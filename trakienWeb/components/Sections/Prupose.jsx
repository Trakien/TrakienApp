import React from "react";
import style from "../../styles/Sections/Prupose.module.css";

export default function Purpose() {
  return (
    <section className = {style.wrapperPrupose} id="blog">
      {" "}
      <div className="lightBg">
        <div className="container">
          <div className={style.AdvertisingPrupose+" flexSpaceCenter"}>
            <div className={style.AddLeftPrupose}>
              <h4 className="font20 semiBold">Nuestro</h4>
              <h2 className="font40 extraBold">Proposito</h2>
              <p className={style.pPrupose+" font19"}>
                Elevar niveles de competitividad del comercio colombiano
                mediante el montaje de una empresa para la prestación del
                servicio de rastreo de precios en el mercado digital colombiano,
                que permita elevar la fidelización de clientes, bajar niveles de
                inconformismo por parte de los compradores y bajar los niveles
                de especulación.​
              </p>
            </div>
            <div>
              <div className={style.AddRightInnerPrupose}>
                <img
                  className="radius8"
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
