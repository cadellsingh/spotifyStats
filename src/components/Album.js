import { useState, useEffect } from "react";
import { getAlbum } from "../spotify/apis";
import DisplayImg from "./DisplayImg";

const Album = ({ albumId }) => {
  const [album, setAlbum] = useState([]);

  const getData = async () => {
    const data = await getAlbum(albumId);
    setAlbum(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <DisplayImg data={album} type="album" />
    </>
  );
};

export default Album;
