import { list } from "@vercel/blob";
import Image from "next/image";

export default async function Gallery() {
  const { blobs: portraitBlobs } = await list({
    prefix: "photos/gallery/portrait",
  });
  const { blobs: landscapeBlobs } = await list({
    prefix: "photos/gallery/landscape",
  });

  const galleryElements = landscapeBlobs.flatMap((landscape, index) => {
    if (landscape.size == 0) return;
    const portraitPair = portraitBlobs.slice(index * 2, index * 2 + 2);
    const elements = [
      // Add the landscape image
      <div
        key={`landscape-${index}`}
        className="col-span-2 h-[40rem] relative overflow-hidden"
      >
        <Image
          src={landscape.url}
          sizes="100vw"
          fill
          alt="Landscape image"
          className="object-cover object-center hover:shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>,
    ];

    // Add the pair of portrait images if available
    if (portraitPair.length === 2) {
      elements.push(
        <div
          key={`portrait-left-${index}`}
          className="h-[40rem] relative overflow-hidden"
        >
          <Image
            src={portraitPair[0].url}
            fill
            sizes="50vw"
            alt="Portrait image"
            className="object-cover object-center hover:shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>,
        <div
          key={`portrait-right-${index}`}
          className="h-[40rem] relative overflow-hidden"
        >
          <Image
            src={portraitPair[1].url}
            fill
            sizes="50vw"
            alt="Portrait image"
            className="object-cover object-center hover:shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      );
    }

    return elements;
  });

  return (
    <section className="grid grid-cols-2 xl:grid-cols-4 py-32">
      {galleryElements}
    </section>
  );
}
