import { useState, useEffect } from "react";
import styled from "styled-components";
import { getMyTopArtists } from "../../spotify/apis";
import { SixGridContainer } from "../../styles/sharedContainers";
import { TextColor, ContainerBackground } from "../../styles/sharedStyles";
import DisplayImg from "../DisplayImg";

const Text = styled.div`
  margin-bottom: 15px;
  ${ContainerBackground};

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
  grid-column-gap: 10px;
  grid-row-gap: 20px;
  ${ContainerBackground};

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
      return <DisplayImg key={index} data={data} type="artist" />;
    });

  return (
    <div
      data-aos="fade-down"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
    >
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
      <SixGridContainer>{displayArtists}</SixGridContainer>
    </div>
  );
};

export default AllTopArtists;
