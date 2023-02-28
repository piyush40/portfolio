import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link to="https://www.instagram.com/_piyush_5/">
        <InstagramIcon />
        </Link>
       
        <Link to="https://www.facebook.com/profile.php?id=100005854720156">
        <FacebookIcon />
        </Link>
        <Link to="https://www.linkedin.com/in/piyushsingh2001/">
        <LinkedInIcon />
        </Link>
      
      </div>
      <p> &copy; 2023 Piyush Kumar Singh</p>
    </div>
  );
}

export default Footer;