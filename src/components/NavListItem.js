import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const ListItem = styled.li`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  & span {
    font-size: 12px;
    margin: auto 0;
  }

  @media (max-width: 700px) {
    & span {
      display: none;
    }
  }
`;

const NavListItem = ({ listItem }) => {
  return (
    <ListItem>
      {listItem}
      <span>
        <FontAwesomeIcon icon={faChevronRight} />
      </span>
    </ListItem>
  );
};

export default NavListItem;

// {
//   /* <Link to="/profile/playlists">Playlists</Link> */
// }
// {
//   /* <Link to="/profile/topTracks">Top Tracks</Link> */
// }
