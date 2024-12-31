import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";

export default function MusicPage() {
  const iframes = [
    '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1769456373&color=%2314130a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/lotustape" title="Lotus Tape" target="_blank" style="color: #cccccc; text-decoration: none;">Lotus Tape</a> · <a href="https://soundcloud.com/lotustape/lotus-tape-knock-1" title="Lotus Tape - KNOCK" target="_blank" style="color: #cccccc; text-decoration: none;">Lotus Tape - KNOCK</a></div>',
    '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1615739508&color=%2314130a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/lotustape" title="Lotus Tape" target="_blank" style="color: #cccccc; text-decoration: none;">Lotus Tape</a> · <a href="https://soundcloud.com/lotustape/lotus-tape-og-freestyle-3" title="Lotus Tape - OG FREESTYLE" target="_blank" style="color: #cccccc; text-decoration: none;">Lotus Tape - OG FREESTYLE</a></div>',
  ];

  const window = new JSDOM("").window;
  const DOMPurifyServer = DOMPurify(window);

  return (
    <section className="grid py-16 mt-[4.5rem] mx-5">
      <h1 className="text-5xl font-extrabold">Music</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-10">
        {iframes.map((iframe) => {
          const cleanHtml = DOMPurifyServer.sanitize(iframe, {
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
              className=""
              dangerouslySetInnerHTML={{
                __html: cleanHtml,
              }}
            ></div>
          );
        })}
      </div>
    </section>
  );
}
