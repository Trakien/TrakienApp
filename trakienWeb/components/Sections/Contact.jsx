import React from "react";
import styled from "styled-components";
// Components
import ServiceBox from "../Elements/ServiceBox";
import style from "../../styles/Sections/Contact.module.css";


export default function Contact() {
  return (
    <div id="services" className={style.wrapperContact}>
      <div className="lightBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <div>
            <h1 className="font40 extraBold">Quienes somos</h1>
          </div>
          <div className="flex">
            <div className={style.ServiceBoxWrapperContact}>
              <ServiceBox
                icon="monitor"
                title="Misión"
                subtitle="Somos una empresa que busca elevar el nivel de información brindada al cliente que desea realizar compras por internet mediante el aprovechamiento de tecnologías de punta y con el personal capacitado, brindando una interfaz amigable con el fin de ayudar a al comprador a encontrar, decidir y ahorrar en cualquier compra en línea.​"
              />
            </div>
            <div className={style.ServiceBoxWrapperContact} >
              <ServiceBox
                icon="browser"
                title="Visión"
                subtitle="Ser la opción número uno de aplicaciones informativas del comercio digital en Colombia, y con presencia en otros países latinoamericanos, brindando información al consumidor final y  empresas que usan del comercio electrónico."
              />
            </div>
            <div className={style.ServiceBoxWrapperContact}>
              <ServiceBox
                icon="printer"
                title="Objetivo"
                subtitle="Permitir a nuestros clientes ser mas asertivos en la toma de decisiones al momento de comprar/vender a través de internet, teniendo como principal servicio un histórico de precios sobre los productos rastreados, mediante el uso de IA y servicios despegados en la  nube, y servicios secundarios, como sugerencias de lugares de compras, venta de información a empresas vendedoras de productos."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}