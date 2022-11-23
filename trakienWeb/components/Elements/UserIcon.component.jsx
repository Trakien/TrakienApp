import React, { useState, useEffect } from "react";
import Link1 from "next/link";
import style from "../../styles/Elements/nav.module.css";

const UserIcon = (props) => {
  return (
    <>
        <Link1 className="pointer flexNullCenter" href={"/dashboard/" + props.route}>
          <img
            className={style.imgUser}
            src={"/dashboard/" + props.route +".png"}   
            alt={props.route + " Icon"}
          ></img>
        </Link1>
    </>
  );
};
export default UserIcon;
