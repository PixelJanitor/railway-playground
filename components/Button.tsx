import clsx from "clsx";

export function Button({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <button
      type="button"
      className={clsx(
        "h-8 px-3 bg-surface-1 rounded-lg shadow-md font-semibold inline-flex items-center gap-1.5 cursor-pointer",
        icon ? "pl-2.5 pr-3" : "px-3",
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </button>
  );
}
