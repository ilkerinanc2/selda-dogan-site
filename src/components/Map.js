import React, { Component } from "react";

export default class Map extends Component {
  render() {
    return (
      <div>
        <iframe
          title="GMapAdress"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.8785943421594!2d28.828236315414678!3d41.02791197929874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa5cc50bf7381%3A0x5366fb9dbf481ce8!2sDi%C5%9F%20Hekimi%20Selda%20Do%C4%9Fan%20Altundal!5e0!3m2!1str!2str!4v1634156544157!5m2!1str!2str"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    );
  }
}
