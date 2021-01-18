// used for displaying artist/playlist img in TopArtists / Playlists component

import styled from "styled-components";

const ImgContainer = styled.img`
  max-width: 100%;
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;

const DisplayImg = ({ img, name, images }) => {
  return (
    // <ImgContainer>
    //   {/* <p>{img}</p> */}
    //   <img src={img} alt="" />
    // </ImgContainer>
    <ImgContainer src={img} alt={name} />
  );
};

export default DisplayImg;
