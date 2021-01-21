import { useState, useEffect } from "react";
import styled from "styled-components";
import { getMyTopArtists } from "../../spotify/apis";
import { ContainerBackgroundColor, TextColor } from "../../styles/sharedStyles";
import DisplayTopArtists from "../DisplayTopArtists";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AllTopTracks from "../Tracks/AllTopTracks";

const Container = styled.div`
  border-radius: 10px;
  padding: 15px;
  ${ContainerBackgroundColor}
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

const ArtistsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  text-align: center;
  grid-gap: 10px;
  grid-column-gap: 10px;
  grid-row-gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const AllTopArtists = () => {
  const { path } = useRouteMatch();
  const [timeRange, setTimeRange] = useState("long_term");
  const [topArtists, setTopArtists] = useState([]);

  const getData = async () => {
    const data = await getMyTopArtists(50, timeRange);
    setTopArtists(data);
  };

  useEffect(() => {
    getData();
  }, [timeRange]);

  const displayArtists =
    topArtists &&
    topArtists.map((data, index) => {
      return <DisplayTopArtists key={index} data={data} />;
    });

  return (
    <Switch>
      <Route path={`${path}/:artistId`} component={AllTopTracks} />
      <>
        <Container>
          <Text>
            <h2>Top Artists</h2>

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
          <ArtistsContainer>{displayArtists}</ArtistsContainer>
        </Container>
      </>
    </Switch>
  );
};

export default AllTopArtists;
