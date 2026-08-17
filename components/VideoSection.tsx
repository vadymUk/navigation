import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { YOUTUBE_VIDEO_URL, videoSectionContent } from "@/data/video";

type VideoSectionProps = {
  /** Override config URL — defaults to YOUTUBE_VIDEO_URL from data/video.ts */
  videoUrl?: string;
  className?: string;
};

export function VideoSection({
  videoUrl = YOUTUBE_VIDEO_URL,
  className,
}: VideoSectionProps) {
  const { title, subtitle, placeholderText, iframeTitle } = videoSectionContent;

  return (
    <section id="video" className={className ?? "section-padding"}>
      <Container>
        <ScrollReveal>
          <SectionHeading title={title} subtitle={subtitle} />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="mx-auto w-full max-w-4xl">
            <YouTubeEmbed
              videoUrl={videoUrl}
              title={iframeTitle}
              placeholderText={placeholderText}
            />
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
