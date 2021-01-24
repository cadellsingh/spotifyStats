import { useState, useEffect } from "react";
import { getUserInfo } from "../../spotify/apis";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Nav = () => {
  const [userInfo, setUserInfo] = useState({});
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    let timeoutId = null;

    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setWidth(window.innerWidth), 500);
    };

    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  const getData = async () => {
    const { displayName, imageUrl } = await getUserInfo();

    setUserInfo({ displayName, imageUrl });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {width <= 700 ? <MobileNav /> : <DesktopNav userInfo={userInfo} />}
    </div>
  );
};

export default Nav;
