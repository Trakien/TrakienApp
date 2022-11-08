import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  @media (max-width: 960px) {
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;

const Img = styled.img`
  @media (max-width: 560px) {
    height: auto;
  }
`;

export default function Header() {
  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font60">Trakien</h1>
          <HeaderP className="font17 semiBold">
            Somos una empresa enfocada en el rastreo de precios dentro del
            mercado digital en Colombia, brindando a los usuarios y
            organizaciones, información oportuna y transparente de forma ágil
            para que puedan tomar las mejores decisiones en el momento de
            realizar compras digitales.
          </HeaderP>
        </div>
      </LeftSide>
      <RightSide>
        <Img
          className="radius8"
          src="/home/logoTrakien.png"
          alt="trakienLogo"
          style={{ zIndex: 9 }}
        />
      </RightSide>
    </Wrapper>
  );
}
