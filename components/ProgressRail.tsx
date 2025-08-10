type ProgressRailProps = {
  progress: number; // 0..1
  className?: string;
  accentClassName?: string; // allows overriding color
};

export default function ProgressRail({ progress, className, accentClassName }: ProgressRailProps) {
  const pct = Math.max(0, Math.min(1, progress)) * 100;
  return (
    <div
      className={
        `pointer-events-none fixed left-0 top-0 h-screen w-2 md:w-2.5 flex items-end ` +
        (className ?? "")
      }
      aria-hidden="true"
    >
      <div className="relative mx-auto h-full w-px bg-white/10">
        <div
          className={`absolute bottom-0 left-0 w-px ${accentClassName ?? "bg-life"}`}
          style={{ height: `${pct}%` }}
        />
      </div>
    </div>
  );
}

