import React from "react";
import style from "../../styles/Sections/Prupose.module.css";

export default function Purpose() {
  return (
    <section className={style.wrapperPrupose} id="blog">
      {" "}
      <div className="lightBg">
        <div className="container">
          <div className={style.AdvertisingPrupose + " flexSpaceCenter"}>
            <div className={style.AddLeftPrupose}>
              <h4 className="tituloBlanco">Nuestro</h4>
              <h2 className="tituloBlanco">Proposito</h2>
              <br></br>
              <br></br>
              <p className={style.pPrupose}>
                Elevar niveles de competitividad del comercio colombiano
                mediante el montaje de una empresa para la prestación del
                servicio de rastreo de precios en el mercado digital colombiano,
                que permita elevar la fidelización de clientes, bajar niveles de
                inconformismo por parte de los compradores y bajar los niveles
                de especulación.​
              </p>
              <br></br>
              <br></br>
            </div>
            <div>
              <div className={style.AddRightInnerPrupose}>
                <img
                  className="LogoPrupose"
                  src="/home/proposito.png"
                  alt="trakienLogo"
                  style={{ zIndex: 9 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
