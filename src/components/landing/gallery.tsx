import Image from "next/image";
import { getPayload } from "payload";
import configPromise from "@payload-config";

const payload = await getPayload({ config: configPromise });

export default async function Gallery() {
  const landscapeImages = await payload.find({
    collection: "gallery-images",
    sort: "order",
    where: {
      and: [
        { orientation: { equals: "landscape" } },
        { visible: { equals: true } },
      ],
    },
  });

  const portraitImages = await payload.find({
    collection: "gallery-images",
    sort: "order",
    where: {
      and: [
        { orientation: { equals: "portrait" } },
        { visible: { equals: true } },
      ],
    },
  });

  const galleryElements = landscapeImages.docs.flatMap((landscape, index) => {
    if (landscape.filesize == 0) return;
    const portraitPair = portraitImages.docs.slice(index * 2, index * 2 + 2);
    const elements = [
      // Add the landscape image
      <div
        key={`landscape-${index}`}
        className="col-span-2 h-[40rem] relative overflow-hidden"
      >
        <Image
          src={`${process.env.BASE_URL}${landscape.url}`}
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
            src={`${process.env.BASE_URL}${portraitPair[0].url}`}
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
            src={`${process.env.BASE_URL}${portraitPair[1].url}`}
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
