import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAlbum } from "../spotify/apis";

const AlbumTracks = () => {
  const { albumId } = useParams;

  //   const [album, setAlbum] = useState([]);

  //   const getData = async () => {
  //     const data = await getAlbum(albumId);
  //     setAlbum(data);
  //   };

  //   useEffect(() => {
  //     getData();
  //   }, []);

  return (
    <div>
      <h1>album tracks</h1>
      <h1>{albumId}</h1>
    </div>
  );
};

export default AlbumTracks;
