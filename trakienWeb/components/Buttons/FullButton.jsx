import React from "react";
import style from "../../styles/Buttons/FullButton.module.css"

export default function FullButton({ title, action, border }) {
  return (
    <button
      className={style.WrapperFullButton + " animate pointer radius8"}
      onClick={action ? () => action() : null}
      border={border}
    >
      {title}
    </button>
  );
}