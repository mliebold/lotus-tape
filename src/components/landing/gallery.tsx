import { list } from "@vercel/blob";
import Image from "next/image";

export default async function Gallery() {
  const { blobs: portraitBlobs } = await list({
    prefix: "photos/gallery/portrait",
  });
  const { blobs: landscapeBlobs } = await list({
    prefix: "photos/gallery/portrait",
  });

  const galleryElements = landscapeBlobs.flatMap((landscape, index) => {
    if (landscape.size == 0) return;
    const portraitPair = portraitBlobs.slice(index * 2, index * 2 + 2);
    const elements = [
      // Add the landscape image
      <div
        key={`landscape-${index}`}
        className="col-span-2 h-[30rem] relative hover:shadow-lg transition-shadow duration-300"
      >
        <Image
          src={landscape.url}
          fill
          alt="Landscape image"
          className="object-cover"
        />
      </div>,
    ];

    // Add the pair of portrait images if available
    if (portraitPair.length === 2) {
      elements.push(
        <div key={`portrait-left-${index}`} className="h-[40rem] relative">
          <Image
            src={portraitPair[0].url}
            fill
            alt="Portrait image"
            className="object-cover"
          />
        </div>,
        <div key={`portrait-right-${index}`} className="h-[40rem] relative">
          <Image
            src={portraitPair[1].url}
            fill
            alt="Portrait image"
            className="object-cover"
          />
        </div>
      );
    }

    return elements;
  });

  return <div className="grid grid-cols-2">{galleryElements}</div>;
}
