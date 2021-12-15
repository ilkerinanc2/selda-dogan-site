import React, { Component } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./SiteFooter.css";

export default class SiteFooter extends Component {
  render() {
    return (
      <div className="footer-row">
        <div className="footer-col font-link">
          <p>© 2021 Tüm Hakları Saklıdır.</p>
        </div>
        <div className="footer-col font-link">
          <a href="tel:(0212) 892 01 03">
            <PhoneIcon className="footer-icon" />
          </a>
          <a href="mailto:seldadogan4@hotmail.com">
            <EmailIcon className="footer-icon" />
          </a>
          <a href="https://www.instagram.com/dt.seldadogan">
            <InstagramIcon className="footer-icon" />
          </a>
        </div>
      </div>
    );
  }
}
