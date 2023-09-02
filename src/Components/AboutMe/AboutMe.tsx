import "./AboutMe.scss";
import placeholder from "../../assets/about_me_placeholder.png";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import cv from '../../assets/CV_Kevin_Fuccio.pdf'


export const AboutMe = () => {
 
  return (
    <>
      <div className="aboutMe-container px-10"  id="aboutMe">
        <div className="img-border-box">
          <div className="aboutMe-border"></div>
          <img className="aboutMe-img" src={placeholder} alt="" />
        </div>
        <div className="aboutMe-description-container">
          <h2>About me</h2>
          <span>
              Hi! I am Kevin, a 22-year-old Junior Full-Stack Developer. Since when I was little due to my strong passion for technology and software development, I have decided to embark on this path,I have a basic understanding of Photoshop and video editing with VEGAS PRO, and through my recent studies, I have gained in-depth knowledge of several web development technologies, including JavaScript, React, Spring Boot, Java, HTML, and CSS, using tools like Visual Studio Code and Eclipse.
          </span>
          <div>
            <a href={cv} target="_blank" rel="noreferrer" download='CV_Kevin_Fuccio'><button className="gradient-btn">download my CV <FileDownloadIcon /> </button></a>
          </div>
        </div>
      </div>
    </>
  );
};
