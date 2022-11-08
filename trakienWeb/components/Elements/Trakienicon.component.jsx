import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import LogoIcon from "../Elements/Logo";

const Trakienicon = (props) => {
  return (
    <Link className="pointer flexNullCenter" to="home" smooth={true}>
      <LogoIcon />
      <h1 style={{ marginLeft: "15px" }} className="font20 extraBold">
        Trakien
      </h1>
    </Link>
  );
};
const NavInner = styled.div`
  position: relative;
  height: 100%;
`;
export default Trakienicon;
