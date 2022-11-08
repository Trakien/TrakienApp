import React from "react";
import styled from "styled-components";

export default function FullButton({ title, action, border }) {
  return (
    <Wrapper
      className="animate pointer radius8"
      onClick={action ? () => action() : null}
      border={border}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? "#707070" : "#4630aa")};
  background-color: ${(props) => (props.border ? "transparent" : "#4630aa")};
  width: 100%;
  padding: 15px;
  outline: none;
  font-weight: 600 !important;
  font-size: 0.938rem;
  color: ${(props) => (props.border ? "#707070" : "#fff")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#f0774a")};
    border: 1px solid #f0774a;
    color: ${(props) => (props.border ? "#f0774a" : "#fff")};
  }
`;
