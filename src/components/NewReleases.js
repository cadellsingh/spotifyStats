import styled from "styled-components";
import { useState, useEffect } from "react";
import { getNewReleases } from "../spotify/apis";
import { ContainerBackground, TextColor } from "../styles/sharedStyles";
import Album from "./Album";
import Track from "./Track";
import { TwoGridContainer, SixGridContainer } from "../styles/sharedContainers";
import Loading from "./Loading";

const Text = styled.div`
  margin-bottom: 15px;
  ${ContainerBackground};

  & h2 {
    ${TextColor}
    margin-bottom: 15px;
  }
`;

const Release = styled.div`
  display: flex;

  @media (max-width: 430px) {
    font-size: 15px;
    justify-content: center;
  }
`;

const ReleaseButton = styled.button`
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

const NewReleases = () => {
  const [releases, setReleases] = useState([]);
  const [type, setType] = useState("album");

  const getData = async () => {
    const data = await getNewReleases();
    setReleases(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const singles = releases.filter((data) => {
    const { album_type } = data;
    return album_type === "single";
  });

  const displaySingles =
    singles &&
    singles.map((data, index) => {
      const { id } = data;
      return <Track key={index} albumId={id} />;
    });

  const albums = releases.filter((data) => {
    const { album_type } = data;

    return album_type === "album";
  });

  const displayAlbums =
    albums &&
    albums.map((data, index) => {
      const { id } = data;
      return <Album key={index} albumId={id} />;
    });

  const displayNewReleases =
    type === "album" ? (
      <SixGridContainer>{displayAlbums}</SixGridContainer>
    ) : (
      <TwoGridContainer>{displaySingles}</TwoGridContainer>
    );

  return (
    <>
      {releases.length > 0 ? (
        <div
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <Text>
            <h2>New Releases</h2>
            <Release>
              <ReleaseButton
                onClick={() => setType("album")}
                isActive={type === "album"}
              >
                Albums
              </ReleaseButton>
              <ReleaseButton
                onClick={() => setType("single")}
                isActive={type === "single"}
              >
                Singles
              </ReleaseButton>
            </Release>
          </Text>
          {displayNewReleases}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default NewReleases;
