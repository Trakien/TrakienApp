import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";
import style from "../../styles/Sections/Pricing.module.css";

export default function Pricing() {
  return (
    <section className={style.wrapperPricing} id="pricing">
      <div className="whiteBg">
        <div className="container">
          <div className={style.HeaderInfoPricing}>
            <h1 className="titulo">Premium</h1>
            <p className="subtitulo">
              Con premium podrás disfrutar de todas las funcionalidades de
              Trakien.
              <br />
              Invierte inteligente, invierte Trakien.
            </p>
          </div>
          <div>
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
          </div>
        </div>
      </div>
    </section>
  );
}
