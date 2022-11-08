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
export default function Contact() {
  return (
    <Wrapper id="services">
      <div className="lightBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Quienes somos</h1>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="monitor"
                title="Misión"
                subtitle="Somos una empresa que busca elevar el nivel de información brindada al cliente que desea realizar compras por internet mediante el aprovechamiento de tecnologías de punta y con el personal capacitado, brindando una interfaz amigable con el fin de ayudar a al comprador a encontrar, decidir y ahorrar en cualquier compra en línea.​"
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="browser"
                title="Visión"
                subtitle="Ser la opción número uno de aplicaciones informativas del comercio digital en Colombia, y con presencia en otros países latinoamericanos, brindando información al consumidor final y  empresas que usan del comercio electrónico."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="printer"
                title="Objetivo"
                subtitle="Permitir a nuestros clientes ser mas asertivos en la toma de decisiones al momento de comprar/vender a través de internet, teniendo como principal servicio un histórico de precios sobre los productos rastreados, mediante el uso de IA y servicios despegados en la  nube, y servicios secundarios, como sugerencias de lugares de compras, venta de información a empresas vendedoras de productos."
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
      </div>
    </Wrapper>
  );
}
