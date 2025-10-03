export function PlaylistSection() {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-xl font-bold">What I&apos;m listening to</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border border-paragraph/10 rounded-xl">
          <iframe
            data-testid="embed-iframe"
            style={{ borderRadius: 12 }}
            src="https://open.spotify.com/embed/playlist/37i9dQZF1Epntig5dUgcpM?utm_source=generator&theme=0"
            width="100%"
            height="452"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>

        <div className="border border-paragraph/10 rounded-xl">
          <iframe
            style={{ borderRadius: 12 }}
            src="https://open.spotify.com/embed/playlist/37i9dQZF1EpR2Rw6Le4gnH?utm_source=generator&theme=0"
            width="100%"
            height="452"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
