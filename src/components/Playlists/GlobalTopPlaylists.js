import { useState, useEffect } from "react";
import { getPopularPlaylists } from "../../spotify/apis";
import DisplayImg from "../DisplayImg";

const GlobalTopPlaylists = () => {
  const [playlists, setPlaylists] = useState([]);

  const getData = async () => {
    const data = await getPopularPlaylists("toplists");
    setPlaylists(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const displayPlaylists =
    playlists &&
    playlists.map((data, index) => {
      return <DisplayImg key={index} data={data} type="playlist" />;
    });

  return <>{displayPlaylists}</>;
};

export default GlobalTopPlaylists;
