import React from "react";
import "./About.css";
import img1 from "../../assets/program-1.png";
import img2 from "../../assets/program-2.png";
import img3 from "../../assets/program-3.png";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";
const About = () => {
  return (
    <div className="about">
     
      <div className="program">
        <img src={img1} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Technology</p>
        </div>
      </div>

      <div className="program">
        <img src={img2} alt="" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>Buisness</p>
        </div>
      </div>
      <div className="program">
        <img src={img3} alt="" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
      63    <p>Design</p>
        </div>
      </div>
    </div>
  );
};

export default About;
