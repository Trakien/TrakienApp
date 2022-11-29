import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Cookies from "universal-cookie";
import Trakienicon from "../Elements/Trakienicon.component";
import style from "../../styles/Nav/TopNavbar.module.css";
import FullButton from "../Buttons/FullButton";
import Logout from "../Elements/Logout";

const cookies = new Cookies();

export default function TopNavbar(props) {
  const token = cookies.get("token");
  const [y, setY] = useState();

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
        className={style.WrapperTopNavbar + " flexCenter animate whiteBg"}
        style={y > 100 ? { height: "60px" } : { height: "70px" }}
      >
        <div className={style.NavInnerTopNavbar + " container flexSpaceCenter"}>
          <Trakienicon home={props.home} />
          {props.home ? (
            <>
              {" "}
              <ul className={style.UlWrapperTopNavbar + " flexNullCenter"}>
                <li className="semiBold font15 pointer desaparece">
                  <Link
                    activeClass="active"
                    style={{ padding: "10px 15px" }}
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-80}
                  >
                    Inicio
                  </Link>
                </li>
                <li className="semiBold font15 pointer desaparece">
                  <Link
                    activeClass="active"
                    style={{ padding: "10px 15px" }}
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-80}
                  >
                    Quiénes somos
                  </Link>
                </li>
                <li className="semiBold font15 pointer desaparece">
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
                <li className="semiBold font15 pointer desaparece">
                  <Link
                    activeClass="active"
                    style={{ padding: "10px 15px" }}
                    to="blog"
                    spy={true}
                    smooth={true}
                    offset={-80}
                  >
                    Propósito
                  </Link>
                </li>
                <li className="semiBold font15 pointer desaparece2">
                  <Link
                    activeClass="active"
                    style={{ padding: "10px 15px" }}
                    to="pricing"
                    spy={true}
                    smooth={true}
                    offset={-80}
                  >
                    Membresías
                  </Link>
                </li>
              </ul>
              <ul className="flexNullCenter">
                <li className="semiBold font15 pointer">
                  <a href="/login" style={{ padding: "10px 30px 10px 0" }}>
                    Iniciar Sesión
                  </a>
                </li>
                <li className="semiBold font15 pointer flexCenter desaparece2">
                  <FullButton
                    title="Registrarse"
                    action={() => {
                      location.href = "/signup";
                    }}
                  />
                </li>
              </ul>
            </>
          ) : (
            <>
              <ul className="flexNullCenter">
                <li className="semiBold font15 pointer flexCenter">
                  <Logout />
                </li>
              </ul>
            </>
          )}
        </div>
      </nav>
    </>
  );
}
