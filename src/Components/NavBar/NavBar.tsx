import Logo from "../../assets/logo.png";
import { scrollToElement } from "../../utils";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./NavBar.scss";
import { useEffect, useState } from "react";

export const NavBar = () => {
  let [open, setOpen] = useState(false);
  const menuChange = () => {
    setOpen(!open);
  };
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600); // Change 768 with your desired resolution
      if (window.innerWidth >= 600) {
        setOpen(false);
      }
    };

    handleResize(); // Check initial resolution

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="navBar ">
      <div>
        <img className="logo" src={Logo} alt="" />
      </div>

      <div
        className={`${isMobile ? "hamburger-list" : "anchor-list"} ${
          open ? "open" : ""
        }`}
      >
        <a onClick={() => scrollToElement("aboutMe")}>ABOUT ME</a>
        <a onClick={() => scrollToElement("project")}>PROJECTS</a>
        <a onClick={() => scrollToElement("experience")}>EXPERIENCE</a>
        <a className="gradient-btn" onClick={() => scrollToElement("contact")}>
          CONTACT
        </a>
      </div>
      <button
        className="hamburger-menu gradient-btn"
        onClick={() => menuChange()}
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>
    </div>
  );
};
