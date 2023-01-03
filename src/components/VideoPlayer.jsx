export function VideoPlayer({ source }) {
  return <div className="Video">
    <iframe
      width="960"
      height="615"
      src={source}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  </div>;
}
