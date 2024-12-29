export default function MusicPage() {
  const trackUuids = [
    "7hiRSxfVaYUWhIddOtw6Y1",
    "65Plu14QWS6vOmq6aUaCIw",
    "3TOkJ9RIUJIwcAybyCZdri",
    "0XgwqNPqPpS51Lbr4g998B",
    "5EMoEdaEJlwiHiBSWGBoO1",
    "2wVw68d7C5ZCsWT01LMArE",
  ];

  return (
    <div className="grid py-32 mx-5">
      <h1 className="text-5xl font-extrabold">Music</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-10">
        {trackUuids.map((trackUuid) => (
          <iframe
            key={trackUuid}
            style={{
              borderRadius: "20px",
            }}
            src={`https://open.spotify.com/embed/track/${trackUuid}?utm_source=generator&theme=0`}
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="eager"
          ></iframe>
        ))}
      </div>
    </div>
  );
}
