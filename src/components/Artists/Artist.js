import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Artist = () => {
  const { artistId } = useParams();
  const [artist, setArtist] = useState([]);

  // const getData = async () => {
  //   const data = await getMyTopArtists(50, timeRange);
  //   setTopArtists(data);
  // };

  // useEffect(() => {
  //   getData();
  // }, [timeRange]);

  return (
    <div>
      <h1>Artist</h1>
      <h1>id: {artistId}</h1>
    </div>
  );
};

export default Artist;
