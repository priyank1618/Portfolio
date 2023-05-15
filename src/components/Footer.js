import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon />
        <TwitterIcon />
        <a href="https://github.com/priyank1618"><GithubIcon /></a>
      <a href="https://www.linkedin.com/in/priyank-patel1618"><LinkedInIcon /></a>
      </div>
      <p> &copy; 2023 priyankpatel.com</p>
    </div>
  );
}

export default Footer;
//https://github.com/priyank1618
//https://www.linkedin.com/in/priyank-patel1618