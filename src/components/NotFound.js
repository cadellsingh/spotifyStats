import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <p>
        Um, you look a bit lost... lets get you back{" "}
        <span>
          <Link to="/">Home</Link>
        </span>
      </p>
    </div>
  );
};

export default NotFound;
