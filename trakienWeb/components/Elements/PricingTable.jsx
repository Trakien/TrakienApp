import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import RollerIcon from "../../assets/svg/Services/RollerIcon";
import MonitorIcon from "../../assets/svg/Services/MonitorIcon";
import BrowserIcon from "../../assets/svg/Services/BrowserIcon";
import PrinterIcon from "../../assets/svg/Services/PrinterIcon";
import CheckMark from "../../assets/svg/Checkmark";
import CloseIcon from "../../assets/svg/CloseIcon";
import style from "../../styles/Elements/PricingTable.module.css";
export default function PricingTable({
  icon,
  price,
  title,
  text,
  offers,
  action,
}) {
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
    <div className={style.WrapperPricingTable + " whiteBg radius8 shadow"}>
      <div className="flexSpaceCenter">
        {getIcon}
        <p className="flexSpaceCenter">{price}</p>
      </div>
      <div style={{ margin: "30px 0" }}>
        <h4 className="tituloPlan">{title}</h4>
        <p className="font13">{text}</p>
      </div>
      <div>
        {offers
          ? offers.map((item, index) => (
              <div
                className="flexNullCenter"
                style={{ margin: "15px 0" }}
                key={index}
              >
                <div
                  style={{
                    position: "relative",
                    top: "-1px",
                    marginRight: "15px",
                  }}
                >
                  {item.cheked ? (
                    <div className="checkmark">
                      <CheckMark />
                    </div>
                  ) : (
                    <div className="checkmark">
                      <CloseIcon></CloseIcon>
                    </div>
                  )}
                </div>
                <p className="plansText">{item.name}</p>
              </div>
            ))
          : null}
      </div>
      <div style={{ maxWidth: "120px", margin: "30px auto 0 auto" }}>
        <FullButton title="Buy" action={action} />
      </div>
    </div>
  );
}
