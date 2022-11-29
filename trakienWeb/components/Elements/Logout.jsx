import React from "react";
import style from "../../styles/Elements/nav.module.css";
import Cookies from "universal-cookie";
import Router from "next/router";
const Logout = (props) => {
  const cookies = new Cookies();
  const deleteToken = () => {
    cookies.remove("token");
    cookies.remove("email");
    Router.push("/");
  };
  const account = () => {
    Router.push("/dashboard/profile");
  };
  return (
    <div className={style.dropdown}>
      <img
        className={style.img}
        src={"/dashboard/user.png"}
        alt={"Logout Icon"}
      ></img>
      <div className={style.dropdownContent}>
        <li className={style.desc}>
          <ul>
            <a onClick={deleteToken}>Cerrar sesión</a>
          </ul>
          {Router.useRouter().asPath.includes("profile") ? (
            <></>
          ) : (
            <ul>
              <a onClick={account}>Cuenta</a>
            </ul>
          )}
        </li>
      </div>
    </div>
  );
};
export default Logout;
