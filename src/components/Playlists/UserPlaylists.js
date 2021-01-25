import { useState, useEffect } from "react";
import { getUserPlaylists } from "../../spotify/apis";
import DisplayImg from "../DisplayImg";

const UserPlaylists = () => {
  const [playlists, setPlaylists] = useState([]);

  const getData = async () => {
    const data = await getUserPlaylists();
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

export default UserPlaylists;
