import React from "react";
import style from "../../styles/Sections/Prupose.module.css";

export default function Purpose() {
  return (
    <section className={style.wrapperPrupose} id="blog">
      {" "}
      <div className="lightBg container flexSpaceCenter">
        <div className="container">
          <div className={style.AdvertisingPrupose + "flex"}>
            <div className={style.AddLeftPrupose + "container"}>
              <h4 className="tituloBlanco">Nuestro Proposito</h4>
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
          </div>
        </div>
        <div>
          <div className={style.AddRightInnerPrupose}>
            <img
              className="LogoPrupose"
              src="/home/proposito.png"
              alt="trakienLogo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
