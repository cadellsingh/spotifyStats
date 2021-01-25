import { Link } from "react-router-dom";
import styled from "styled-components";

const Img = styled.img`
  max-width: 100%;
  width: 100%;
  height: 30vh;
  object-fit: cover;
  border-radius: 15px;
`;

const DisplayTopArtists = ({ data }) => {
  const { name, images, id } = data;
  const { url } = images[0];

  return (
    <Link to={`artist/${id}`}>
      <div>
        <Img src={url} alt={name} />
        <p>{name}</p>
      </div>
    </Link>
  );
};

export default DisplayTopArtists;
