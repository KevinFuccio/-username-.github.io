import "./Experience.scss";
import htmlLogo from "../../assets/icons8-html-144.png";
import cssLogo from "../../assets/icons8-css-144.png";
import jsLogo from "../../assets/icons8-js-144.png";
import bootstrapLogo from "../../assets/icons8-bootstrap-144.png";
import tsLogo from "../../assets/icons8-typescript-144.png";
import reactLogo from "../../assets/icons8-react-144.png";
import javaLogo from "../../assets/icons8-java-144.png";
import springbootLogo from "../../assets/icons8-spring-boot-144 (1).png";
import postgreLogo from "../../assets/icons8-postgresql-144.png";

export const Experience = () => {
  return (
    <div className="experience-container" id="experience">
      <div>
        <h2>EXPERIENCE</h2>
      </div>
      <div className="experience-logo">
        <div className="experience-container">
          <div className="experience-logos">
            <div>
              <img src={htmlLogo} alt="" />
              <span>HTML</span>
            </div>
            <div>
              <img src={cssLogo} alt="" />
              <span>CSS</span>
            </div>
            <div>
              <img src={bootstrapLogo} alt="" />
              <span>Bootstrap</span>
            </div>
          </div>
          <div className="experience-logos">
            <div>
              <img src={jsLogo} alt="" />
              <span>JavaScript</span>
            </div>
            <div>
              <img src={reactLogo} alt="" />
              <span>React</span>
            </div>
            <div>
              <img src={tsLogo} alt="" />
              <span>TypeScript</span>
            </div>
          </div>
          <div className="experience-logos">
            <div>
              <img src={javaLogo} alt="" />
              <span>Java</span>
            </div>
            <div>
              <img src={springbootLogo} alt="" />
              <span>SpringBoot</span>
            </div>
            <div>
              <img src={postgreLogo} alt="" />
              <span>PostgreSQL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
