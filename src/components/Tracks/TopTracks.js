import { useState, useEffect } from "react";
import { getMyTopTracks } from "../../spotify/apis";
import { OneGridContainer, SeeMoreText2 } from "../../styles/sharedContainers";
import DisplayTrack from "../DisplayTrack";
import { Link } from "react-router-dom";

const TopTracks = () => {
  const [topTracks, setTopTracks] = useState([]);

  const getData = async () => {
    const data = await getMyTopTracks(10);
    setTopTracks(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const displayTracks =
    topTracks &&
    topTracks.map((data, index) => {
      return <DisplayTrack key={index} data={data} />;
    });

  return (
    <OneGridContainer>
      <SeeMoreText2>
        <h2>Top Tracks</h2>
        <span>
          <Link to="/tracks">See more</Link>
        </span>
      </SeeMoreText2>
      {displayTracks}
    </OneGridContainer>
  );
};

export default TopTracks;
