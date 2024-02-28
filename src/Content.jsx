import axios from "axios";
import { useState, useEffect } from "react";
import { SongsIndex } from "./SongsIndex";

export function Content() {
  const [songs, setSongs] = useState([]);

  const handleIndexSongs = () => {
    console.log("handleIndexSongs");
    axios.get("http://localhost:3000/songs.json").then((response) => {
      console.log(response.data);
      setSongs(response.data);
    });
  };

  useEffect(handleIndexSongs, []);
  return (
    <main>
      <SongsIndex songs={songs} />
    </main>
  );
}
