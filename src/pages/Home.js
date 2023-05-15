import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Priyank</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <a href="https://github.com/priyank1618"><GithubIcon /></a>
           <a href="/">  <EmailIcon /> </a> 
        <a href="https://www.linkedin.com/in/priyank-patel1618"><LinkedInIcon /></a>
    
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
            HTML, CSS, Reactjs,BootStrap, MaterialUI
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS,ExpressJS,MongoDB
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>c,c++,javascript,python</span>
          </li>
          <li className="item">
            <h2>Others</h2>
            <span>Problem-solving,git,github</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
