import { useState, useEffect } from "react";
import { getMyTopTracks } from "../../spotify/apis";
import { TracksContainer, TracksText } from "../../styles/sharedContainers";
import DisplayTrack from "../DisplayTrack";
import { Link, useRouteMatch } from "react-router-dom";

const TopTracks = () => {
  const { url } = useRouteMatch();
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
      return <DisplayTrack key={index} data={data} type="top" />;
    });

  return (
    <div>
      <TracksContainer>
        <TracksText>
          <h2>Top Tracks</h2>
          <span>
            <Link to="/tracks">See more</Link>
          </span>
        </TracksText>
        {displayTracks}
      </TracksContainer>
    </div>
  );
};

export default TopTracks;
