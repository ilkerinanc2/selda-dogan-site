import React, { Component } from "react";

import "../style/Hakkimda.css";

export class Hakkimda extends Component {
  render() {
    return (
      <div
        className="col-container font-link"
        style={{ paddingTop: "1%", margin: "auto" }}
      >
        <div className="row">
          <div id="text-div" className="col">
            <p className="hakkimda-topic">Dr. Selda Doğan Altundal Kimdir?</p>
            <p className="hakkimda-text">
              1987 yılında İstanbul’da doğan Selda Doğan Altundal öğrenim
              hayatına Yenibosna İlköğretim okulunda başladı. 2001-2005 yılında
              Yeşilköy Anadolu Lisesinde orta öğretimini tamamladıktan sonra
              2005 yılında İstanbul Üniversitesi (Çapa) Diş Hekimliği
              Fakültesini kazandı. 2010 yılında üniversite eğitimini tamamladı.
            </p>
            <p className="hakkimda-text">
              Aynı yıl mesleğine Yenibosna’da özel bir poliklinikte başladı.
              Burada 2 yıl çalıştı. Daha sonra 2012-2015 yılları arasında
              İstanbul Güneşli’deki Medicine Hospital’de 3.5 yıl çalıştı. 2016
              yılında Pendik’te özel bir klinikte yoğun çalışma hayatına devam
              edip en son 2017-2020 yılları arasında Güneşli’de özel bir
              klinikte çalışmıştır. 10 yıllık bir çalışma hayatından sonra
              Dt.Selda Doğan Altundal 2020 yılında İstanbul Güneşli’de kendi
              özel muayenehanesini kurmuştur.
            </p>
          </div>
        </div>
        <hr></hr>
      </div>
    );
  }
}
