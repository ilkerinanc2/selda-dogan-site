import React, { Component } from "react";
import TedaviImage from "./TedaviImage";
import "./Tedaviler.css";
import cerrahi_girisimler from "../images/treatments/cerrahi_girisimler.png";
import dis_eti from "../images/treatments/dis_eti.png";
import kanal_tedavisi from "../images/treatments/kanal_tedavisi.png";
import kuron_kopru_protez from "../images/treatments/kuron_kopru_protez.png";
import oral_implantoloji from "../images/treatments/oral_implantoloji.png";
import ortodonti from "../images/treatments/ortodonti.png";
import pedodonti from "../images/treatments/pedodonti.png";
import protez_dis from "../images/treatments/protez_dis.png";

export default class Tedaviler extends Component {
  render() {
    return (
      <div className="tedaviler-section">
        <div className="row">
          <h3 className="font-link" style={{ color: "#23ad7f" }}>
            Uyguladığımız Tedaviler
          </h3>
        </div>
        <div className="row">
          <div className="col">
            <TedaviImage
              alt="cerrahi_girisimler"
              src={cerrahi_girisimler}
              text="Cerrahi Girişimler"
            ></TedaviImage>
          </div>
          <div className="col">
            <TedaviImage
              alt="dis_eti"
              src={dis_eti}
              text="Diş Eti"
            ></TedaviImage>
          </div>
          <div className="col">
            <TedaviImage
              alt="kanal_tedavisi"
              src={kanal_tedavisi}
              text="Kanal Tedavisi"
            ></TedaviImage>
          </div>
          <div className="col">
            <TedaviImage
              alt="kuron_kopru_protez"
              src={kuron_kopru_protez}
              text="Kuron Köprü Protez"
            ></TedaviImage>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <TedaviImage
              alt="oral_implantoloji"
              src={oral_implantoloji}
              text="Oral İmplantoloji"
            ></TedaviImage>
          </div>
          <div className="col">
            <TedaviImage
              alt="ortodonti"
              src={ortodonti}
              text="Ortodonti"
            ></TedaviImage>
          </div>
          <div className="col">
            <TedaviImage
              alt="pedodonti"
              src={pedodonti}
              text="Pedodonti"
            ></TedaviImage>
          </div>
          <div className="col">
            <TedaviImage
              alt="protez_dis"
              src={protez_dis}
              text="Protez Diş"
            ></TedaviImage>
          </div>
        </div>
      </div>
    );
  }
}
