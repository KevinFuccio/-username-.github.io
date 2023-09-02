import { ProjectTemplate } from "../ProjectTemplate/ProjectTemplate";
import "./Portfolio.scss";
import pj1 from '../../assets/pj_1.png'
import pj2 from '../../assets/pj_2.png'
import pj3 from '../../assets/pj_3.png'
import pj4 from '../../assets/pj_4.png'
import {PJ_1}from '../../utils'
import {PJ_2}from '../../utils'
import {PJ_3}from '../../utils'
import {PJ_4}from '../../utils'

export const Portfolio = () => {
  return (
    <>
      <div className="portfolio-container" id="project">
        <h2>PORTFOLIO</h2>
      </div>
        <ProjectTemplate project="PROJECT I" title="Quiz-Game" text={PJ_1} img={pj1} links ="https://github.com/KevinFuccio/BuildWeek"/>
        <ProjectTemplate project="PROJECT II" title="Netflix Clone" text={PJ_2} img={pj2} links ="https://github.com/KevinFuccio/netflix-clone" reversed/>
        <ProjectTemplate project="PROJECT III" title="Spotify-Clone" text={PJ_3} img={pj3} links ="https://github.com/KevinFuccio/spotifyproject"/>
        <ProjectTemplate project="PROJECT IV" title="E-Commerce" text={PJ_4} img={pj4} links ="https://github.com/KevinFuccio/Capstone" reversed/>
    </>
  );
};
