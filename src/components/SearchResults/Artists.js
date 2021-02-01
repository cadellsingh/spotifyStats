import { ResultsContainer } from "../../styles/sharedContainers";
import DisplayImg from "../DisplayImg";

const Artists = ({ artists }) => {
  const { items } = artists || [];

  const displayArtists =
    items &&
    items.slice(0, 6).map((data, index) => {
      return <DisplayImg key={index} data={data} type="artist" />;
    });

  return (
    <div>
      <ResultsContainer>
        <h3>Albums</h3>
        {displayArtists}
      </ResultsContainer>
    </div>
  );
};

export default Artists;
