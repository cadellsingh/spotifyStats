import { useState, useEffect } from "react";
import { getTrackFromAlbum } from "../spotify/apis";
import DisplayTrack from "./DisplayTrack";

const Track = ({ albumId }) => {
  const [track, setTrack] = useState([]);

  const getData = async () => {
    const data = await getTrackFromAlbum(albumId);
    setTrack(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const { song, url } = track;

  return <>{<DisplayTrack data={song} imageUrl={url} />}</>;
};

export default Track;
