import React from "react";
import style from "../../styles/Elements/Backdrop.module.css"

export default function Backdrop({ toggleSidebar }) {
  return <div className={style.WrapperBackdrop + " darkBg"} onClick={() => toggleSidebar(false)}></div>;
}
