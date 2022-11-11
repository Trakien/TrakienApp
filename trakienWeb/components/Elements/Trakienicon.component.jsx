import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import Link1 from "next/link";
import LogoIcon from "../Elements/Logo";
import style from "../../styles/Elements/nav.module.css";

const Trakienicon = (props) => {
  return (
    <>
      {props.home == undefined ? (
        <Link className="pointer flexNullCenter" to="home" smooth={true}>
          <LogoIcon />
          <h1 style={{ marginLeft: "15px" }} className="font20 extraBold">
            Trakien
          </h1>
        </Link>
      ) : (
        <Link1 className="pointer flexNullCenter" href="/">
          <img
            className={style.img}
            src="/home/LogoTrakienSimple.png"
            alt="trakienLogo"
          ></img>
        </Link1>
      )}
    </>
  );
};
const NavInner = styled.div`
  position: relative;
  height: 100%;
`;
export default Trakienicon;
