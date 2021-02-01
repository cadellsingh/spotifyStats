import { ResultsContainer } from "../../styles/sharedContainers";
import DisplayImg from "../DisplayImg";

const Playlists = ({ playlists }) => {
  const { items } = playlists || {};

  const displayPlaylists =
    items &&
    items.slice(0, 6).map((data, index) => {
      return <DisplayImg key={index} data={data} type="playlist" />;
    });

  return (
    <div>
      <ResultsContainer>
        <h3>Playlists</h3>
        {displayPlaylists}
      </ResultsContainer>
    </div>
  );
};

export default Playlists;
