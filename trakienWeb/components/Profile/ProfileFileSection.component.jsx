import React from "react";
import style from "../../styles/Profile/Profile.module.css";

export default function ProfileFileSection({ children }) {
  return <div className={style.UserdatosSection}>{children}</div>;
}
