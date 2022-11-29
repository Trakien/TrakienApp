import React from "react";
import { Link } from "react-scroll";
import LogoIcon from "../Elements/Logo";
import style from "../../styles/Elements/nav.module.css";
import Router from "next/router";

const Trakienicon = (props) => {
  function redirect() {
    Router.push("/dashboard");
  }
  return (
    <>
      {props.home ? (
        <Link className="pointer flexNullCenter" to="home" smooth={true}>
          <LogoIcon />
          <h1 style={{ marginLeft: "15px" }} className="font20 extraBold ">
            Trakien
          </h1>
        </Link>
      ) : (
        <a onClick={redirect}>
          <img
            className={style.imgIcon}
            src="/home/LogoTrakienSimple.png"
            alt="trakienLogo"
          ></img>
        </a>
      )}
    </>
  );
};
export default Trakienicon;
