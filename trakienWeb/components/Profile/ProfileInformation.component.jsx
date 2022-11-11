import React from "react";
import { render } from "react-dom/cjs/react-dom.production.min";
import ProfileFile from "./ProfileFile.component";
import TopNavbar from "../Nav/TopNavbar";
import style from "../../styles/Profile/Profile.module.css";
export default function ProfileInformation() {
  return (
    <>
      <TopNavbar></TopNavbar>
      <div className={style.UserdatosSection}>
        <ProfileFile text="Ospina" textChange="Cambio Nombre" />
        <ProfileFile text="Contraseña:" textChange="Cambio Contraseña" />
        <ProfileFile text="Telefono:" textChange="Cambiar Telefono" />
      </div>
    </>
  );
}
