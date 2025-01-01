import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import { getPayload } from "payload";
import configPromise from "@payload-config";

const payload = await getPayload({ config: configPromise });

export default async function MusicPage() {
  const music = await payload.find({
    collection: "music",
    sort: "-releaseDate",
  });

  const window = new JSDOM("").window;
  const DOMPurifyServer = DOMPurify(window);

  return (
    <section className="grid py-16 mt-[4.5rem] mx-5">
      <h1 className="text-5xl font-extrabold">Music</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-10">
        {music.docs.map((track, index) => {
          if (track.trackEmbed) {
            const cleanHtml = DOMPurifyServer.sanitize(track.trackEmbed, {
              ALLOWED_TAGS: ["iframe", "div", "a"],
              ALLOWED_ATTR: [
                "width",
                "height",
                "scrolling",
                "frameborder",
                "allow",
                "src",
                "style",
                "href",
                "title",
                "target",
              ],
            });

            return (
              <div
                key={index}
                dangerouslySetInnerHTML={{
                  __html: cleanHtml,
                }}
              ></div>
            );
          }
        })}
      </div>
    </section>
  );
}
