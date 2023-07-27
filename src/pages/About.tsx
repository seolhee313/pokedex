import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/seolhee.jpg";
import { FaGithub } from "react-icons/fa";
import { SiTistory } from "react-icons/si";
import { ImCodepen } from "react-icons/im";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="" className="profile-image" />
      <h1 className="profile-text">Hi I am seol hee</h1>
      <h2 className="profile-text">The creator of this awesome pokedex</h2>
      <h4 className="profile-text">
        This project is created for youtube tutorial for my channel Kishan Sheth
      </h4>
      <div className="profile-links">
        <a href="https://github.com/seolhee313">
          <FaGithub />
        </a>
        <a href="https://seolheeone.tistory.com/">
          <SiTistory />
        </a>
        <a href="https://codepen.io/your-work/">
          <ImCodepen />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
