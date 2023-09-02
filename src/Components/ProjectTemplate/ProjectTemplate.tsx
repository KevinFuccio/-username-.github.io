import "./ProjectTemplate.scss";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

type ProjectTemplate = {
  project: string;
  title: string;
  text: string;
  img: string;
  links: string;
  reversed?: boolean;
};

export const ProjectTemplate = ({
  project,
  title,
  text,
  img,
  links,
  reversed,
}: ProjectTemplate) => {
  return (
    <div className={`pj-template-container ${reversed?'reversed':''}`} >
      <div className="pj-template-description">
        <h2>{project}</h2>
        <h2>{title}</h2>
        <span>{text}</span>
        <a target="_blank" href={links}>
          see on GitHub <ArrowRightAltIcon />{" "}
        </a>
      </div>
      <div  data-aos={reversed?"fade-right":"fade-left"} data-aos-anchor-placement="center-bottom" >
        <img src={img} alt=""/>
      </div>
    </div>
  );
};
