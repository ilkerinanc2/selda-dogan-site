import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import cerrahi_girisimler from "../images/treatments/cerrahi_girisimler.png";
import dis_eti from "../images/treatments/dis_eti.png";
import kanal_tedavisi from "../images/treatments/kanal_tedavisi.png";
import kuron_kopru_protez from "../images/treatments/kuron_kopru_protez.png";
import oral_implantoloji from "../images/treatments/oral_implantoloji.png";
import ortodonti from "../images/treatments/ortodonti.png";
import pedodonti from "../images/treatments/pedodonti.png";
import protez_dis from "../images/treatments/protez_dis.png";

export default function TitlebarImageList() {
  return (
    <ImageList
      style={{
        margin: "auto",
        paddingTop: "10%",
        display: "relative",
        zIndex: "0",
      }}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            style={{ width: "100%" }}
            src={item.img}
            srcSet={`${item.img}`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar title={item.title} subtitle={item.author} />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: cerrahi_girisimler,
    title: "",
    author: "Cerrahi Girişimler",
  },
  {
    img: dis_eti,
    title: "",
    author: "Diş Eti Tedavileri",
  },
  {
    img: kanal_tedavisi,
    title: "",
    author: "Kanal Tedavisi",
  },
  {
    img: kuron_kopru_protez,
    title: "",
    author: "Kuron Köprü Protez",
  },
  {
    img: oral_implantoloji,
    title: "",
    author: "Oral İmplantoloji",
  },
  {
    img: ortodonti,
    title: "",
    author: "Ortodonti",
  },
  {
    img: pedodonti,
    title: "",
    author: "Pedodonti",
  },
  {
    img: protez_dis,
    title: "",
    author: "Protez Diş",
  },
];
