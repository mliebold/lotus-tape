import { list } from "@vercel/blob";

export default async function VideoBackground() {
  const { blobs } = await list({
    prefix: "videos/logo-loop",
    limit: 1,
  });
  const { url } = blobs[0];

  return (
    <video
      preload="auto"
      autoPlay
      muted
      playsInline
      loop
      aria-label="Video player"
      className="object-cover h-screen w-full sm:object-cover sm:h-screen sm:w-screen z-0 mb-32"
    >
      <source src={url} type="video/mp4" />
      Your browser does not support the video tag
    </video>
  );
}
