import { Button } from "@/components/Button";
import { DotGrid } from "@/components/DotGrid";

export function ResourceCanvasClient() {
  return (
    <section className="relative flex items-center justify-center size-full isolate">
      <div className="absolute -z-1 inset-0">
        <DotGrid />
      </div>

      <div className="relative z-1 space-y-16 w-full max-w-sm">
        <div className="bg-inset-surface rounded-2xl shadow-inset">
          <div className="bg-surface-1 p-6 rounded-2xl shadow-md space-y-2">
            <div className="flex items-center gap-3 text-lg font-semibold">
              <svg
                aria-hidden="true"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C20.565 21.795 24 17.295 24 12C24 5.37 18.63 0 12 0Z"
                  fill="white"
                />
              </svg>
              clawdbot-railway-template
            </div>

            <div className="font-mono text-white/60 pl-9">
              clawdbot-railway-template-production-6539.up.railway.app
            </div>

            <div className="flex items-center gap-3 text-green-500 font-medium">
              <div className="size-6 relative flex items-center justify-center isolate">
                <div className="size-3 rounded-full bg-green-500 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] absolute opacity-40" />
                <div className="size-1.5 rounded-full bg-green-500 shadow shadow-black/50 z-1" />
              </div>
              Online
            </div>
          </div>

          <div className="px-7 py-4 flex items-center gap-4 text-md text-white/60">
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6667 8H1.33337M14.6667 8V12C14.6667 12.3536 14.5262 12.6928 14.2762 12.9428C14.0261 13.1929 13.687 13.3333 13.3334 13.3333H2.66671C2.31309 13.3333 1.97395 13.1929 1.7239 12.9428C1.47385 12.6928 1.33337 12.3536 1.33337 12V8M14.6667 8L12.3667 3.40667C12.2563 3.18452 12.0862 2.99758 11.8753 2.86685C11.6645 2.73612 11.4214 2.6668 11.1734 2.66667H4.82671C4.57865 2.6668 4.33555 2.73612 4.12474 2.86685C3.91392 2.99758 3.74376 3.18452 3.63337 3.40667L1.33337 8M4.00004 10.6667H4.00671M6.66671 10.6667H6.67337"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            clawdbot-railway-template-volume
          </div>
        </div>

        <div className="text-center">
          <Button
            icon={
              <svg
                aria-hidden="true"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9.5L6 2.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.5 6L9.5 6"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          >
            Add resource
          </Button>
        </div>
      </div>

      <div className="pointer-events-none fixed inset-x-0 bottom-6 z-2 flex justify-center">
        <div className="relative font-medium text-white/28">
          <span>Ask anything</span>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 select-none text-transparent bg-clip-text [-webkit-background-clip:text] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.18)_38%,rgba(255,255,255,0.9)_50%,rgba(255,255,255,0.18)_62%,rgba(255,255,255,0)_100%)] bg-no-repeat bg-size-[12rem_100%] will-change-[background-position] animate-ask-anything-shimmer"
          >
            Ask anything
          </span>
        </div>
      </div>
    </section>
  );
}
