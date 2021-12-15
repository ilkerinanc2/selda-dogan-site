import React, { Component } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./Iletisim.css";

export class Iletisim extends Component {
  render() {
    return (
      <div>
        <div className="iletisim-tab">
          <div className="row">
            <h3 className="font-link iletisim-topic">İletişim Bilgileri</h3>
          </div>
          <div className="iletisim-row">
            <div className="iletisim-info">
              <div className="row">
                <p
                  className="font-link iletisim-text"
                  href="tel:(0212) 892 01 03"
                >
                  <PhoneIcon className="iletisim-icon" />
                  <span>(0212) 892 01 03</span>
                </p>
              </div>
              <div className="row">
                <p
                  className="font-link iletisim-text"
                  href="mailto:dtseldadogan@gmail.com"
                >
                  <EmailIcon className="iletisim-icon" />
                  <span>dtseldadogan@gmail.com</span>
                </p>
              </div>
              <div className="row">
                <p className="font-link iletisim-text">
                  <LocationOnIcon className="iletisim-icon" />
                  <span>
                    Hürriyet Mahallesi, Gazi Osman Paşa Cd. <br /> No:48/1,
                    34209 Bağcılar/İstanbul
                  </span>
                </p>
              </div>
            </div>
            <div className="col" style={{ width: "50%", border: "0" }}>
              <iframe
                title="GMapAdress"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.8785943421594!2d28.828236315414678!3d41.02791197929874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa5cc50bf7381%3A0x5366fb9dbf481ce8!2sDi%C5%9F%20Hekimi%20Selda%20Do%C4%9Fan%20Altundal!5e0!3m2!1str!2str!4v1634156544157!5m2!1str!2str"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <hr></hr>
        </div>
      </div>
    );
  }
}
