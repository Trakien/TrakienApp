import React, { useState, useEffect } from "react";
import style from "../../styles/Elements/nav.module.css";
import Cookies from "universal-cookie";
import Router from "next/router";

const Logout = (props) => {
    const cookies = new Cookies();

    const deleteToken = () => {
        cookies.remove("token");
        cookies.remove("email");
        Router.push("/");
    }
  return (
    <>
          <img
            className={style.imgUser}
            src={"/dashboard/logout.png"}   
            alt={"Logout Icon"}
            onClick={deleteToken}
          ></img>
    </>
  );
};
export default Logout;