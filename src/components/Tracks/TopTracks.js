import { useState, useEffect } from "react";
import { getMyTopTracks } from "../../spotify/apis";
import { TracksContainer, TracksText } from "../../styles/sharedContainers";
import DisplayTrack from "../DisplayTrack";

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
      return <DisplayTrack key={index} data={data} type="top" />;
    });

  return (
    <TracksContainer>
      <TracksText>
        <h2>Top Tracks</h2>
        <p>See all</p>
      </TracksText>
      {displayTracks}
    </TracksContainer>
  );
};

export default TopTracks;
