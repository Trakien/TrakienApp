import React from "react";
import styled from "styled-components";
import style from "../../styles/Elements/ProjectBox.module.css"

export default function ProjectBox({ img, title, text, action}) {
  return (
    <div className={style.WrapperProjectBox}>
      <button className={style.ImgBtnProjectBox + " aniamte pointer"} onClick={action ? () => action() : null}>
        <img className={style.imgProjectBox + " radius8"} src={img} alt="project"></img>
      </button>
      <h3 className={style.h3ProjectBox + " font20 extraBold"}>{title}</h3>
      <p className="font13">{text}</p>
    </div>
  );
}