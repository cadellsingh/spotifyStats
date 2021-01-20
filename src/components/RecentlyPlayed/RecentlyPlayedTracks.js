import { useState, useEffect } from "react";
import { getMyRecentlyPlayed } from "../../spotify/apis";
import { TracksText, TracksContainer } from "../../styles/styledContainer";
import DisplayTrack from "../DisplayTrack";

const RecentlyPlayedTracks = () => {
  const [recentTracks, setRecentTracks] = useState([]);

  const getData = async () => {
    const data = await getMyRecentlyPlayed(10);
    setRecentTracks(data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(recentTracks);

  const displayTracks =
    recentTracks &&
    recentTracks.map((data, index) => {
      return <DisplayTrack key={index} data={data} type="recent" />;
    });

  return (
    <TracksContainer>
      <TracksText>
        <h2>Recently Played</h2>
        <p>See all</p>
      </TracksText>
      {displayTracks}
    </TracksContainer>
  );
};

export default RecentlyPlayedTracks;
