import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <p>you lost buddy</p>
      <p>
        {" "}
        <Link to="/profile">Home</Link>
      </p>
    </div>
  );
};

export default NotFound;
