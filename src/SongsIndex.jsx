export function SongsIndex(props) {
  return (
    <div>
      <h1>All songs</h1>
      {props.songs.map((song) => (
        <div key={song.id}>
          <h2>{song.title}</h2>
          <p>{song.stanza}</p>
          <p>{song.chorus}</p>
          <p>{song.key}</p>
        </div>
      ))}
    </div>
  );
}
