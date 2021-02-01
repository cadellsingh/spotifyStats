import { OneGridContainer } from "../../styles/sharedContainers";
import DisplayTrack from "../DisplayTrack";

const Tracks = ({ tracks }) => {
  const { items } = tracks || {};

  const displayTracks =
    items &&
    items.slice(0, 6).map((data, index) => {
      return <DisplayTrack key={index} data={data} />;
    });

  return (
    <div>
      <OneGridContainer>
        <h3>Tracks</h3>
        {displayTracks}
      </OneGridContainer>
    </div>
  );
};

export default Tracks;
