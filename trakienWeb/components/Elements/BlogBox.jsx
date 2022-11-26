import React from "react";
import style from "../../styles/Elements/BlogBox.module.css"

export default function BlogBox({ tag, title, text, action, author }) {
  return (
    <button className={style.WrapperBtnBlogbox + " animate pointer"} onClick={action ? () => action() : null}>
      <div className={style.WrapperBlogbox + " whiteBg radius8 shadow"}>
        <h3 className="font20 extraBold">{title}</h3>
        <p className="font13" style={{ padding: "30px 0" }}>
          {text}
        </p>
        <p className="font13 extraBold">{author}</p>
        <div className="flex">
          <p className="tag coralBg radius6 font13 extraBold">{tag}</p>
        </div>
      </div>
    </button>
  );
}

