import { useState, useEffect } from "react";
import styled from "styled-components";
import { TextColor, ContainerBackground } from "../../styles/sharedStyles";
import { getMyTopTracks } from "../../spotify/apis";
import DisplayTrack from "../DisplayTrack";
import { TwoGridContainer } from "../../styles/sharedContainers";
import Loading from "../Loading";

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

  @media (max-width: 430px) {
    font-size: 15px;
  }
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

  @media (max-width: 430px) {
    font-size: 15px;
  }
`;

const UserTopTracks = () => {
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
      return <DisplayTrack key={index} data={data} />;
    });

  return (
    <>
      {topTracks.length > 0 ? (
        <div
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <Text>
            <h2>Top Tracks</h2>

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
          {topTracks.length > 0 ? (
            <TwoGridContainer>{displayTracks}</TwoGridContainer>
          ) : null}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default UserTopTracks;
