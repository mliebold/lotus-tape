import CTAContact from "@/components/landing/cta-contact";
import CTASubscribe from "@/components/landing/cta-subscribe";
import Shows from "@/components/landing/shows";
import VideoBackground from "@/components/landing/video-background";

export default function Home() {
  return (
    <>
      <VideoBackground />
      <Shows />
      <CTAContact />
      <CTASubscribe />
    </>
  );
}
