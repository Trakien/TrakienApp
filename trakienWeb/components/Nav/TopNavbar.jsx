import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import Trakienicon from "../Elements/Trakienicon.component";
import style from "../../styles/Nav/TopNavbar.module.css"

export default function TopNavbar() {
  const [y, setY] = useState();
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  useEffect(() => {
    setY(window.scrollY);
  }, []);

  return (
    <>
      <nav
        className={style.WrapperTopNavbar + " flexCenter animate whiteBg" }
        style={y > 100 ? { height: "60px" } : { height: "80px" }}
      >
        <div className={style.NavInnerTopNavbar + " container flexSpaceCenter"}>
          <Trakienicon />
          <ul className={style.UlWrapperTopNavbar + " flexNullCenter"}>
            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="home"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Home
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="services"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Servicios
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="pricing"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Premium
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Quienes somos
              </Link>
            </li>
          </ul>
          <ul className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <a href="/login" style={{ padding: "10px 30px 10px 0" }}>
                Log in
              </a>
            </li>
            <li className="semiBold font15 pointer flexCenter">
              <a
                href="/signup"
                className="radius8 lightBg"
                style={{ padding: "10px 15px" }}
              >
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

