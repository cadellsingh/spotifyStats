import { useState, useEffect } from "react";
import styled from "styled-components";
import { ContainerBackgroundColor, TextColor } from "../../styles/sharedStyles";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { getMyTopTracks } from "../../spotify/apis";
import DisplayTrack from "../DisplayTrack";

const Container = styled.div`
  width: 90%;
  border-radius: 10px;
  padding: 15px;
  margin: 0 auto;
  ${ContainerBackgroundColor};
`;

const Text = styled.div`
  margin-bottom: 15px;

  & h2 {
    ${TextColor}
    margin-bottom: 15px;
  }
`;

const Range = styled.div`
  display: flex;
`;

const RangeButton = styled.button`
  cursor: pointer;

  ${(props) => props.isActive && TextColor}

  :nth-child(2n) {
    margin: 0 15px;
  }

  :hover {
    text-decoration: underline;
  }
`;

const TracksContainer = styled.div`
  display: grid;
  grid-row-gap: 15px;
`;

const AllTopTracks = () => {
  const { path } = useRouteMatch();
  const [timeRange, setTimeRange] = useState("long_term");
  const [topTracks, setTopTracks] = useState([]);

  const getData = async () => {
    const data = await getMyTopTracks(50, timeRange);
    setTopTracks(data);
  };

  useEffect(() => {
    getData();
  }, [timeRange]);

  const displayTracks =
    topTracks &&
    topTracks.map((data, index) => {
      return <DisplayTrack key={index} data={data} type="top" />;
    });

  return (
    <div>
      <Container>
        <Text>
          <h2>Top Songs</h2>

          <Range>
            <RangeButton
              onClick={() => setTimeRange("long_term")}
              isActive={timeRange === "long_term"}
            >
              All time
            </RangeButton>
            <RangeButton
              onClick={() => setTimeRange("medium_term")}
              isActive={timeRange === "medium_term"}
            >
              Last 6 months
            </RangeButton>
            <RangeButton
              onClick={() => setTimeRange("short_term")}
              isActive={timeRange === "short_term"}
            >
              Last month
            </RangeButton>
          </Range>
        </Text>
        <TracksContainer>{displayTracks}</TracksContainer>
      </Container>
    </div>
  );
};

export default AllTopTracks;
