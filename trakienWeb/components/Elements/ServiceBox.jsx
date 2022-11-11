import React from "react";
// Assets
import RollerIcon from "../../assets/svg/Services/RollerIcon";
import MonitorIcon from "../../assets/svg/Services/MonitorIcon";
import BrowserIcon from "../../assets/svg/Services/BrowserIcon";
import PrinterIcon from "../../assets/svg/Services/PrinterIcon";
import style from "../../styles/Elements/ServiceBox.module.css"

export default function ServiceBox({icon, title, subtitle}) {
  let getIcon;

  switch (icon) {
    case "roller":
      getIcon = <RollerIcon />;
      break;
    case "monitor":
      getIcon = <MonitorIcon />;
      break;
    case "browser":
      getIcon = <BrowserIcon />;
      break;
    case "printer":
      getIcon = <PrinterIcon />;
      break;
    default:
      getIcon = <RollerIcon />;
      break;
  }


  return (
    <div className={style.WrapperServiceBox + " flex flexColumn"}>
      <div>{getIcon}</div>
      <h2 className={style.TitleStyleServiceBox + " font20 extraBold"}>{title}</h2>
      <p className={style.SubtitleStyleServiceBox + " font13"}>{subtitle}</p>
    </div>
  );
}
