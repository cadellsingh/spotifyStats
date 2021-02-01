import { useState, useEffect } from "react";
import { getMyRecentlyPlayed } from "../../spotify/apis";
import { SeeMoreText2, OneGridContainer } from "../../styles/sharedContainers";
import DisplayTrack from "../DisplayTrack";
import { Link } from "react-router-dom";

const RecentlyPlayedTracks = () => {
  const [recentTracks, setRecentTracks] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getMyRecentlyPlayed(10);
      setRecentTracks(data);
    };
    getData();
  }, []);

  const displayTracks =
    recentTracks &&
    recentTracks.map((data, index) => {
      const { track } = data;
      return <DisplayTrack key={index} data={track} />;
    });

  return (
    <OneGridContainer>
      <SeeMoreText2>
        <h2>Recently Played</h2>
        <span>
          <Link to="/recentlyPlayed">See more</Link>
        </span>
      </SeeMoreText2>

      {recentTracks.length > 0 ? displayTracks : null}
    </OneGridContainer>
  );
};

export default RecentlyPlayedTracks;
