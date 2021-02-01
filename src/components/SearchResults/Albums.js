import { ResultsContainer } from "../../styles/sharedContainers";
import Album from "../Album";

const Albums = ({ albums }) => {
  const { items } = albums || {};

  const displayAlbums =
    items &&
    items.slice(0, 6).map((data, index) => {
      const { id } = data;
      return <Album key={index} albumId={id} />;
    });

  return (
    <div>
      <ResultsContainer>
        <h3>Albums</h3>
        {displayAlbums}
      </ResultsContainer>
    </div>
  );
};

export default Albums;
