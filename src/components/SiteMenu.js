import React from "react";
import logo from "../images/icon_mavi.png";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Iletisim } from "./Iletisim";
import { Hakkimda } from "./Hakkimda";
import AnaSayfa from "./AnaSayfa";
import Tedaviler from "./Tedaviler";
import "./SiteMenu.css";
import MenuButton from "./MenuButton";

export default function SiteMenu() {
  return (
    <div>
      <div className="menu-section">
        <div className="left-section-menu">
          <a href="/">
            <img align="left" src={logo} alt="Logo" />
          </a>
        </div>
        <div className="right-section-menu">
          <MenuButton text="Anasayfa" href="/" />
          <MenuButton text="Tedaviler" href="/tedaviler" />
          <MenuButton text="Hakkımda" href="/hakkimda" />
          <MenuButton text="İletişim" href="/iletisim" />
        </div>
      </div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AnaSayfa></AnaSayfa>} />
            <Route path="/tedaviler" element={<Tedaviler></Tedaviler>} />
            <Route path="/hakkimda" element={<Hakkimda></Hakkimda>} />
            <Route path="/sorusor" element={<Hakkimda></Hakkimda>} />
            <Route path="/iletisim" element={<Iletisim></Iletisim>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
