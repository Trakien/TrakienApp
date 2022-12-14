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
            <h1 className="titulo"><strong>Nuestros servicios</strong></h1>
            <p className="font13">
              Nuestro principal objetivo es ofrecer un servicio eficiente y
              dinámico a nuestros clientes para que puedan tomar las mejores
              decisiones
              <br />
              en el momento de realizar compras digitales, basadas en
              trazabilidades realizadas a partir de información confiable.
            </p>
          </div>
          <div className="flex">
            <div className={style.ServiceBoxWrapperServices}>
              <ServiceBox
                icon="monitor"
                title="Análisis de precios"
                subtitle="El análisis de precios y comparación de los mismos en productos similares, le permitirá tomar decisiones más asertivas al momento de comprar."
              />
            </div>
            <div className={style.ServiceBoxWrapperServices}>
              <ServiceBox
                icon="filtro"
                title="Filtrador de productos"
                subtitle="El filtrador de productos le permitirá encontrar los productos que usted necesita de una manera más eficiente y rápida."
              />
            </div>
            <div className={style.ServiceBoxWrapperServices}>
              <ServiceBox
                icon="printer"
                title="Seguimiento de precios"
                subtitle="Configure alertas de aumento de precio y sea notificado una vez el producto alcanza su límite."
              />
            </div>
            <div className={style.ServiceBoxWrapperServices}>
              <ServiceBox
                icon="monitor"
                title="Trazabilidad gráfica"
                subtitle="Visualice de manera sencilla y eficiente la variación en los precios de un producto a través del tiempo."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
