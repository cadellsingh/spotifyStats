import { useState, useEffect } from "react";
import { getTopArtists } from "../spotify/apis";
// import { get } from "../utils/api";

const Profile = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    let test = await getTopArtists();
    setData(test);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <div>
      <p>profile</p>
    </div>
  );
};

export default Profile;
