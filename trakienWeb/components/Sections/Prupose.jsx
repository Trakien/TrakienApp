import React from "react";
import styled from "styled-components";
const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;

const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  @media (max-width: 860px) {
    order: 1;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const Img = styled.img`
  @media (max-width: 560px) {
    height: auto;
  }
`;

export default function Purpose() {
  return (
    <Wrapper id="blog">
      {" "}
      <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <h4 className="font20 semiBold">Nuestro</h4>
              <h2 className="font40 extraBold">Proposito</h2>
              <p className="font19">
                Elevar niveles de competitividad del comercio colombiano
                mediante el montaje de una empresa para la prestación del
                servicio de rastreo de precios en el mercado digital colombiano,
                que permita elevar la fidelización de clientes, bajar niveles de
                inconformismo por parte de los compradores y bajar los niveles
                de especulación.​
              </p>
            </AddLeft>
            <AddRight>
              <AddRightInner>
                <Img
                  className="radius8"
                  src="/home/proposito.png"
                  alt="trakienLogo"
                  style={{ zIndex: 9 }}
                />
              </AddRightInner>
            </AddRight>
          </Advertising>
        </div>
      </div>
    </Wrapper>
  );
}
