import styled from "styled-components";
import { ContainerBackgroundColor } from "../../styles/sharedStyles";
import Header from "../Header";
import NavListItem from "../NavListItem";
import Logout from "../Logout";

const StyledNav = styled.nav`
  grid-row: span 2 / auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 10px;
`;

const UserContainer = styled.div`
  margin: 20px 0;
  padding: 20px;
  border-radius: 10px;
  ${ContainerBackgroundColor}

  & img {
    max-width: 100%;
    height: 100px;
    border-radius: 100%;
    margin: 15px 0;
  }
`;

const StyledUl = styled.ul`
  padding: 20px;
  border-radius: 10px;
  ${ContainerBackgroundColor};
  text-align: left;
  list-style: none;
  font-size: 16px;
`;

const DesktopNav = ({ userInfo }) => {
  const { displayName, imageUrl } = userInfo;

  return (
    <StyledNav>
      <Header />

      <UserContainer>
        <p>{displayName}</p>
        <img src={imageUrl} alt={displayName} />
        {/*<span>*/}
        {/*  <FontAwesomeIcon icon={faUserAlt} />*/}
        {/*</span>*/}
      </UserContainer>
      <StyledUl>
        <NavListItem listItem="Profile" />
        <NavListItem listItem="Audio Analysis" />
        <NavListItem listItem="Playlists" />
        <NavListItem listItem="Top Tracks" />
        <NavListItem listItem="Top Artists" />
        <NavListItem listItem="Top Genres" />
        <NavListItem listItem="Recently Played" />
      </StyledUl>

      <Logout />
    </StyledNav>
  );
};

export default DesktopNav;
