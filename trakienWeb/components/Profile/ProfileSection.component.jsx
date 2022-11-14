import React from "react";
import style from "../../styles/Profile/Profile.module.css";

export default function ProfileSection({ children }) {
  return <div className={style.ProfileSection}>{children}</div>;
}
