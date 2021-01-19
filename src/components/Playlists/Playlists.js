import { useState, useEffect } from "react";
import { getUserPlaylists } from "../../spotify/apis";
import { StyledContainer } from "../../styles/styledContainer";
import DisplayImg from "../DisplayImg";

const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);

  const getData = async () => {
    const data = await getUserPlaylists(4);
    setPlaylists(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const displayPlaylists =
    playlists &&
    playlists.map((data, index) => {
      return <DisplayImg key={index} data={data} />;
    });

  return (
    <StyledContainer>
      <div>
        <h2>Playlists</h2>
        <p>See all</p>
      </div>
      {displayPlaylists}
    </StyledContainer>
  );
};

export default Playlists;
