import { useState, useEffect } from "react";
import styled from "styled-components";
import { getTrack } from "../../spotify/apis";

const StyledTrack = styled.div`
  display: flex;
  text-align: center;
  margin: 0 auto;
`;

const Img = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 10px;
`;

const Artists = styled.div``;

const EachTrack = ({ data }) => {
  const { artists, name, album } = data;
  const { images } = album;
  const { url } = images[0];

  const displayArtists = artists.map((artist, index) => {
    const { name } = artist;
    return <p key={index}>{name}</p>;
  });

  return (
    <StyledTrack>
      <div>
        <Img src={url} alt={name} />
      </div>
      <div>
        <p>{name}</p>
        <Artists>{displayArtists}</Artists>
      </div>
    </StyledTrack>
  );
};

export default EachTrack;
