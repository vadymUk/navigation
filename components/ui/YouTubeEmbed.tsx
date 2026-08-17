"use client";

import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import { getYouTubeEmbedUrl } from "@/lib/youtube";
import { VideoPlaceholder } from "@/components/ui/VideoPlaceholder";
import { cn } from "@/lib/utils";

type YouTubeEmbedProps = {
  /** Raw YouTube URL from config (watch, youtu.be, or embed link) */
  videoUrl: string;
  title: string;
  placeholderText: string;
  className?: string;
};

function VideoLoadingShell({ title }: { title: string }) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center bg-surface"
      aria-label={`Завантаження відео: ${title}`}
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10"
        aria-hidden="true"
      />
      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent sm:h-20 sm:w-20">
        <Play size={28} className="ml-1 sm:size-8" aria-hidden="true" />
      </div>
    </div>
  );
}

export function YouTubeEmbed({
  videoUrl,
  title,
  placeholderText,
  className,
}: YouTubeEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  const embedUrl = getYouTubeEmbedUrl(videoUrl);

  useEffect(() => {
    if (!embedUrl) return;

    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.1 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [embedUrl]);

  if (!embedUrl) {
    return <VideoPlaceholder message={placeholderText} className={className} />;
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-black/20",
        className,
      )}
    >
      {isInView ? (
        <iframe
          src={embedUrl}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <VideoLoadingShell title={title} />
      )}
    </div>
  );
}
