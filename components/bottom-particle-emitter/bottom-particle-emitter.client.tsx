"use client";

import { useEffect, useRef } from "react";

const PARTICLE_VERTEX_SHADER = `
attribute vec2 a_position;

void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const PARTICLE_FRAGMENT_SHADER = `
precision highp float;

uniform vec2 u_resolution;
uniform float u_time;

float hash(float n) {
  return fract(sin(n) * 43758.5453123);
}

vec3 particleLayer(vec2 uv, float layer) {
  float speed = mix(0.055, 0.12, layer);
  float radius = mix(0.012, 0.024, layer);
  float alphaScale = mix(0.08, 0.2, layer);
  vec3 accum = vec3(0.0);

  for (int i = 0; i < 22; i++) {
    float fi = float(i);
    float seed = fi + layer * 37.0;
    float life = fract(hash(seed * 1.13) + u_time * speed);
    float x = 0.5 + (hash(seed * 2.31) - 0.5) * mix(1.95, 1.55, layer);
    x += sin(u_time * mix(0.55, 1.1, layer) + seed) * mix(0.026, 0.065, layer);
    float y = life * life;
    vec2 position = vec2(x, y);
    float dist = distance(uv, position);
    float glow = exp(-dist * dist / radius);
    float fade = smoothstep(0.02, 0.18, life) * (1.0 - smoothstep(0.72, 1.0, life));
    float hue = hash(seed * 4.71);
    vec3 color = mix(vec3(0.42, 0.18, 0.82), vec3(0.74, 0.42, 1.0), hue);
    accum += color * glow * fade * alphaScale;
  }

  return accum;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  uv.x = (uv.x - 0.5) * (u_resolution.x / u_resolution.y) + 0.5;

  vec3 color = vec3(0.0);
  color += particleLayer(uv, 0.0);
  color += particleLayer(uv, 0.45);
  color += particleLayer(uv, 1.0);

  float emitterGlow = exp(-pow((uv.x - 0.5) / 0.74, 2.0)) * smoothstep(0.16, 0.0, uv.y) * 0.08;
  color += vec3(0.58, 0.28, 0.96) * emitterGlow;

  float alpha = clamp(max(max(color.r, color.g), color.b), 0.0, 0.9);
  gl_FragColor = vec4(color, alpha);
}
`;

function createShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);

  if (!shader) {
    return null;
  }

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

function createProgram(gl: WebGLRenderingContext) {
  const vertexShader = createShader(
    gl,
    gl.VERTEX_SHADER,
    PARTICLE_VERTEX_SHADER,
  );
  const fragmentShader = createShader(
    gl,
    gl.FRAGMENT_SHADER,
    PARTICLE_FRAGMENT_SHADER,
  );

  if (!vertexShader || !fragmentShader) {
    return null;
  }

  const program = gl.createProgram();

  if (!program) {
    return null;
  }

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  gl.deleteShader(vertexShader);
  gl.deleteShader(fragmentShader);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    gl.deleteProgram(program);
    return null;
  }

  return program;
}

export function BottomParticleEmitterClient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const gl = canvas.getContext("webgl", {
      alpha: true,
      antialias: true,
      depth: false,
      stencil: false,
      premultipliedAlpha: true,
    });

    if (!gl) {
      return;
    }

    const program = createProgram(gl);

    if (!program) {
      return;
    }

    const positionBuffer = gl.createBuffer();

    if (!positionBuffer) {
      gl.deleteProgram(program);
      return;
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    );

    const positionLocation = gl.getAttribLocation(program, "a_position");
    const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
    const timeLocation = gl.getUniformLocation(program, "u_time");

    let frameId = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = 200;
      const height = 40;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    const render = (now: number) => {
      resize();

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl["useProgram"](program);

      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.enableVertexAttribArray(positionLocation);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.uniform1f(timeLocation, now * 0.001);

      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      frameId = window.requestAnimationFrame(render);
    };

    frameId = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(frameId);
      gl.deleteBuffer(positionBuffer);
      gl.deleteProgram(program);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-1 flex justify-center">
      <canvas ref={canvasRef} className="h-10 w-50" />
    </div>
  );
}
