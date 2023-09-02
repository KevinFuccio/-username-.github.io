import { scrollToElement } from "../../utils";
import "./Header.scss";
export const Header = () => {
  return (
    <>
      <header className="px-10">
        <span>I'm a </span>
        <h2>
          Full-Stack Web Developer<span>.</span>
        </h2>
        <div>
          <button className="gradient-btn"  onClick={() => scrollToElement("project")}>Projects</button>
        </div>
      </header>
    </>
  );
};
