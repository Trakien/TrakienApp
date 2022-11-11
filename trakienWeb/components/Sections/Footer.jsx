import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import LogoImg from "../Elements/Logo";
import style from "../../styles/Sections/Footer.module.css";


export default function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className={style.wrapperFooter}>
      <div className="darkBg">
        <div className="container">
          <div
            className="flexSpaceCenter"
            style={{ padding: "30px 0" }}
          >
            <Link
              className="flexCenter animate pointer"
              to="home"
              smooth={true}
              offset={-80}
            >
              <LogoImg />
              <h1
                className="font15 extraBold whiteColor"
                style={{ marginLeft: "15px" }}
              >
                Trakien
              </h1>
            </Link>
            <p className="whiteColor font13">
              © {getCurrentYear()} -{" "}
              <span className="purpleColor font13">Fanatic</span> All Right
              Reserved
            </p>

            <Link
              className="whiteColor animate pointer font13"
              to="home"
              smooth={true}
              offset={-80}
            >
              Inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
