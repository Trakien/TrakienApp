import React from "react";
import styled from "styled-components";
import style from "../../styles/Sections/Header.module.css";

export default function Header() {
  return (
    <section
      className={style.wrapperHeader + " container flexSpaceCenter"}
      id="home"
    >
      <div className={style.LeftSideHeader + " flexCenter"}>
        <div>
          <h1 className="extraBold font60">Trakien</h1>
          <div className={style.HeaderPHeader + " font17 semiBold "}>
            Somos una empresa enfocada en el rastreo de precios dentro del
            mercado digital en Colombia, brindando a los usuarios y
            organizaciones, información oportuna y transparente de forma ágil
            para que puedan tomar las mejores decisiones en el momento de
            realizar compras digitales.
          </div>
        </div>
      </div>
      <div>
        <img
          className="imgHome"
          src="/home/logoTrakien.png"
          alt="trakienLogo"
        />
      </div>
    </section>
  );
}
