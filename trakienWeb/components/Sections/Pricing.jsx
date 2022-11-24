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
            <p className="font13">
              Con premium podrás disfrutar de todas las funcionalidades de
              Trakien.
              <br />
              Invierte inteligente, invierte Trakien.
            </p>
          </div>
          <div className="flexSpaceCenter">
            <div className="flexPlan">
              <PricingTable
                icon="monitor"
                price="$5.000/mo"
                title="Plan premium"
                text="Desbloquea todo el potencial de Trakien."
                offers={[
                  { name: "Monitoreo de precios", cheked: true },
                  { name: "Estadisticas en tiempo real", cheked: true },
                  { name: "Alertas personalizadas", cheked: true },
                  {
                    name: "Acceso total al catalogo de productos",
                    cheked: true,
                  },
                  { name: "Historial de precios", cheked: true },
                ]}
                action={() => alert("clicked")}
              />
            </div>
            <div className="flexPlan">
              <PricingTable
                icon="monitor"
                price="Free"
                title="Plan Gratin"
                text="Justo lo que necesitas de Trakien."
                offers={[
                  { name: "Estadisticas en tiempo real", cheked: true },
                  { name: "Consultas limitadas diarias", cheked: true },
                  {
                    name: "Acceso limitado al catalogo de productos",
                    cheked: true,
                  },
                  { name: "Historial de precios", cheked: true },
                ]}
                action={() => alert("clicked")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
