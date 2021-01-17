import { loginUrl } from "../spotify/loginUrl";

const Login = () => {
  const handleClick = () => {
    window.location = loginUrl;
  };

  return (
    <div>
      <button type="submit" onClick={handleClick}>
        login to spotify
      </button>
    </div>
  );
};

export default Login;
