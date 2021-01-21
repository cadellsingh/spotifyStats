import { useState, useEffect } from "react";
import { getUserPlaylists } from "../../spotify/apis";
import { StyledContainer } from "../../styles/sharedContainers";
import DisplayImg from "../DisplayImg";
import { Link, useRouteMatch } from "react-router-dom";

const Playlists = () => {
  const { url } = useRouteMatch();
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
    <div>
      <StyledContainer>
        <div>
          <h2>Playlists</h2>
          <span>
            <Link to={`${url}/allPlaylists`}>See more</Link>
          </span>
        </div>
        {displayPlaylists}
      </StyledContainer>
    </div>
  );
};

export default Playlists;
