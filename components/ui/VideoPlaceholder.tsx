import { Play, Video } from "lucide-react";
import { cn } from "@/lib/utils";

type VideoPlaceholderProps = {
  message: string;
  className?: string;
};

export function VideoPlaceholder({ message, className }: VideoPlaceholderProps) {
  return (
    <div
      className={cn(
        "relative flex aspect-video w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface",
        className,
      )}
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 40%, rgba(245,158,11,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(245,158,11,0.1) 0%, transparent 40%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center gap-4 px-6 py-10 text-center sm:gap-5 sm:px-10">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent sm:h-20 sm:w-20">
          <Play size={28} className="ml-1 sm:size-8" aria-hidden="true" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2 text-muted">
            <Video size={16} aria-hidden="true" />
            <span className="text-xs font-medium uppercase tracking-widest sm:text-sm">
              Відео
            </span>
          </div>
          <p className="max-w-sm text-base font-medium text-foreground sm:text-lg">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}
