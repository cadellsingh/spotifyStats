import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { getPlaylist } from "../../spotify/apis";

const Playlist = () => {
  const { playlistId } = useParams();
  const [playlist, setPlaylist] = useState([]);

  const getData = async () => {
    const data = await getPlaylist(playlistId);
    setPlaylist(data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(playlist);

  return (
    <div>
      <h1>Playlist</h1>
      <h1>id: {playlistId}</h1>
    </div>
  );
};

export default Playlist;
