import { useState, useEffect } from "react";
import styled from "styled-components";
import { getUserPlaylists } from "../../spotify/apis";
import { SixGridContainer } from "../../styles/sharedContainers";
import { ContainerBackground } from "../../styles/sharedStyles";
import DisplayImg from "../DisplayImg";
import Loading from "../Loading";

const Text = styled.h2`
  grid-column: span 6 / auto;
  ${ContainerBackground};
  margin-bottom: 15px;
`;

const UserPlaylists = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getUserPlaylists();
      setPlaylists(data);
    };
    getData();
  }, []);

  const displayPlaylists =
    playlists &&
    playlists.map((data, index) => {
      return <DisplayImg key={index} data={data} type="playlist" />;
    });

  return (
    <>
      {playlists.length > 0 ? (
        <div
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <Text>Your Playlists</Text>
          {playlists.length > 0 ? (
            <SixGridContainer>{displayPlaylists}</SixGridContainer>
          ) : null}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default UserPlaylists;
