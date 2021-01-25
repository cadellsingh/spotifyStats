import { useState, useEffect } from "react";
import { getMyTopArtists } from "../../spotify/apis";
import { StyledContainer } from "../../styles/sharedContainers";
import DisplayImg from "../DisplayImg";
import { Link } from "react-router-dom";

const TopArtists = () => {
  const [topArtists, setTopArtists] = useState([]);

  const getData = async () => {
    const data = await getMyTopArtists(4);
    setTopArtists(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const displayArtists =
    topArtists &&
    topArtists.map((data, index) => {
      return <DisplayImg key={index} data={data} type="artist" />;
    });

  return (
    <div>
      <StyledContainer>
        <div>
          <h2>Top Artists</h2>
          <span>
            <Link to="/artists">See more</Link>
          </span>
        </div>
        {displayArtists}
      </StyledContainer>
    </div>
  );
};

export default TopArtists;
