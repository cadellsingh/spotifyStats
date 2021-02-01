import { useState, useEffect } from "react";
import { getUserPlaylists } from "../../spotify/apis";
import { SeeMoreText, ThreeGridContainer } from "../../styles/sharedContainers";
import DisplayImg from "../DisplayImg";
import { Link } from "react-router-dom";

const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getUserPlaylists(6);
      setPlaylists(data);
    };
    getData();
  }, []);

  const displayPlaylists =
    playlists &&
    playlists.map((data, index) => {
      return <DisplayImg key={index} data={data} type="playlist" />;
    });

  return (
    <ThreeGridContainer>
      <SeeMoreText>
        <h2>Playlists</h2>
        <span>
          <Link to="/playlists">See more</Link>
        </span>
      </SeeMoreText>
      {displayPlaylists}
    </ThreeGridContainer>
  );
};

export default Playlists;
