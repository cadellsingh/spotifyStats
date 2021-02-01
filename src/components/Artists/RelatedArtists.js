import styled from "styled-components";
import { useState, useEffect } from "react";
import { ContainerBackground } from "../../styles/sharedStyles";
import { getArtistRelatedArtists } from "../../spotify/apis";
import DisplayImg from "../DisplayImg";

const Container = styled.div`
  grid-row: span 2 / auto;
`;

const Artists = styled.div`
  grid-row: span 2 / auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  ${ContainerBackground};
`;

const RelatedArtists = ({ artistId, setReloadArtist }) => {
  const [relatedArtists, setRelatedArtists] = useState([]);

  const getData = async () => {
    const data = await getArtistRelatedArtists(artistId);
    setRelatedArtists(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const displayRelatedArtists =
    relatedArtists &&
    relatedArtists.slice(0, 10).map((data, index) => {
      return (
        <DisplayImg
          key={index}
          data={data}
          type="artist"
          setReloadArtist={setReloadArtist}
        />
      );
    });

  return (
    <Container>
      <h3>Related Artists</h3>
      {relatedArtists.length > 0 ? (
        <Artists>{displayRelatedArtists}</Artists>
      ) : null}
    </Container>
  );
};

export default RelatedArtists;
