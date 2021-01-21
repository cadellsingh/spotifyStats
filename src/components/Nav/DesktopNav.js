import styled from "styled-components";
import { ContainerBackgroundColor } from "../../styles/sharedStyles";
import Header from "../Header";
import NavListItem from "../NavListItem";
import Logout from "../Logout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";

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

  & span {
    font-size: 30px;
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

  const displayImg = imageUrl ? (
    <img src={imageUrl} alt={displayName} />
  ) : (
    <span>
      <FontAwesomeIcon icon={faUserAlt} />
    </span>
  );

  return (
    <StyledNav>
      <Header />

      <UserContainer>
        <p>{displayName}</p>

        {displayImg}
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
