import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Premium</h1>
            <p className="font25">
              Con premium podrás disfrutar de todas las funcionalidades de Trakien.
              <br />
              Invierte inteligente, invierte Trakien. 
            </p>
          </HeaderInfo>            
            <TableBox>
              <PricingTable
                icon="monitor"
                price="$5.000/mo"
                title="Plan premium"
                text="Desbloquea todo el potencial de Trakien."
                offers={[
                  { name: "Monitoreo de precios", cheked: true },
                  { name: "Estadisticas en tiempo real", cheked: true },
                  { name: "Alertas personalizadas", cheked: true },
                  { name: "Acceso total al catalogo de productos", cheked: true },
                  { name: "Historial de precios", cheked: true },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;




