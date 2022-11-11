import React from "react";
import styled from "styled-components";
// Components
import ServiceBox from "../Elements/ServiceBox";
import style from "../../styles/Sections/Services.module.css";


export default function Services() {
  return (
    <div className={style.wrapperServices} id="services">
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <div>
            <h1 className="font40 extraBold">Nuestros servicios</h1>
            <p className="font13">
              Nuestro principal objetivo es ofrecer un servicio eficinte y
              dinamico a nuestros clientes para que puedan tomar las mejores
              decisiones
              <br />
              en el momento de realizar compras digitales, basadas en
              trazabilidades realizadas a partir de informacion confiable.
            </p>
          </div>
          <div className="flex">
            <div className={style.ServiceBoxWrapperServices}>
              <ServiceBox
                icon="monitor"
                title="Informes y análisis de precios"
                subtitle="El análisis de precios y comparación de los mismos en productos similares, le permitirá tomar decisiones mas asertivas al momento de comprar."
              />
            </div>
            <div>
              <ServiceBox
                icon="browser"
                title="Filtrador de productos"
                subtitle="El filtrador de productos le permitirá encontrar los productos que usted necesita de una manera mas eficiente y rápida."
              />
            </div>
            <div>
              <ServiceBox
                icon="printer"
                title="Seguimiento de aumento de precios"
                subtitle="Configure alertas de aumento de precio y sea notificado una vez el producto alcanza su limite."
              />
            </div>
            <div>
              <ServiceBox
                icon="monitor"
                title="Trazabilidad grafica"
                subtitle="Vizualice de manera sencilla y eficiente la variación en los precios de un producto a traves del tiempo."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
