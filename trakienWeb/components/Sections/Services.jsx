import React from "react";
import styled from "styled-components";
// Components
import ServiceBox from "../Elements/ServiceBox";

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;

export default function Services() {
  return (
    <Wrapper id="services">
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Nuestros servicios</h1>
            <p className="font13">
              Nuestro principal objetivo es ofrecer un servicio eficinte y
              dinamico a nuestros clientes para que puedan tomar las mejores
              decisiones
              <br />
              en el momento de realizar compras digitales, basadas en
              trazabilidades realizadas a partir de informacion confiable.
            </p>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="monitor"
                title="Informes y análisis de precios"
                subtitle="El análisis de precios y comparación de los mismos en productos similares, le permitirá tomar decisiones mas asertivas al momento de comprar."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="browser"
                title="Filtrador de productos"
                subtitle="El filtrador de productos le permitirá encontrar los productos que usted necesita de una manera mas eficiente y rápida."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="printer"
                title="Seguimiento de aumento de precios"
                subtitle="Configure alertas de aumento de precio y sea notificado una vez el producto alcanza su limite."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="monitor"
                title="Trazabilidad grafica"
                subtitle="Vizualice de manera sencilla y eficiente la variación en los precios de un producto a traves del tiempo."
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
      </div>
    </Wrapper>
  );
}
