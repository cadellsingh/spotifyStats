import { useState, useEffect } from "react";
import { getMyRecentlyPlayed } from "../../spotify/apis";
import { TracksText, TracksContainer } from "../../styles/sharedContainers";
import DisplayTrack from "../DisplayTrack";
import { Link, useRouteMatch } from "react-router-dom";

const RecentlyPlayedTracks = () => {
  const { url } = useRouteMatch();
  const [recentTracks, setRecentTracks] = useState([]);

  const getData = async () => {
    const data = await getMyRecentlyPlayed(10);
    setRecentTracks(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const displayTracks =
    recentTracks &&
    recentTracks.map((data, index) => {
      return <DisplayTrack key={index} data={data} type="recent" />;
    });

  return (
    <div>
      <TracksContainer>
        <TracksText>
          <h2>Recently Played</h2>
          <span>
            <Link to="/recentlyPlayed">See more</Link>
          </span>
        </TracksText>
        {displayTracks}
      </TracksContainer>
    </div>
  );
};

export default RecentlyPlayedTracks;
