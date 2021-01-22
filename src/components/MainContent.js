import styled from "styled-components";
import TopArtists from "./Artists/TopArtists";
import Playlists from "./Playlists/Playlists";
import TopTracks from "./Tracks/TopTracks";
import RecentlyPlayedTracks from "./RecentlyPlayed/RecentlyPlayedTracks";
import "aos/dist/aos.css";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const MainContent = () => {
  return (
    <Layout
      data-aos="zoom-out-up"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
    >
      <TopArtists />
      <Playlists />
      <TopTracks />
      <RecentlyPlayedTracks />
    </Layout>
  );
};

export default MainContent;
