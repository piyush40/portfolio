import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import {Link}  from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Piyush Kumar Singh</h2>
        <div className="prompt">
          <p>A Front-end developer with a passion for learning and creating.</p>
          <Link to="https://www.linkedin.com/in/piyushsingh2001/">
        <LinkedInIcon />
        </Link>
        <Link to="https://mail.google.com/mail/piyush.pks456@gmail.com/">
        <EmailIcon />
        </Link>
           
          <Link to = "https://github.com/piyush40">
            <GithubIcon />

          </Link>
          
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              React.js, JavaScript, HTML, CSS, Redux, JQuery, Git
            </span>
          </li>
          <li className="item">
            
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, C++,Data Structure and Algorithm</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;