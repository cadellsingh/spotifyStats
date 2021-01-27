import { useState, useEffect } from "react";
import { getUserInfo } from "../../spotify/apis";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Nav = () => {
  const [userName, setUserName] = useState("");
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    let timeoutId = null;

    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setWidth(window.innerWidth), 1000);
    };

    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  const getData = async () => {
    const name = await getUserInfo();
    setUserName(name);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {width <= 700 ? <MobileNav /> : <DesktopNav userName={userName} />}
    </div>
  );
};

export default Nav;
