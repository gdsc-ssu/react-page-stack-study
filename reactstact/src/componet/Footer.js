import React from "react";
import styled from "styled-components";
const Footer = (props) => {
  return (
    <FootDiv>
      <Btn>인규</Btn>
      <Btn>준영</Btn>
      <Btn>강현</Btn>
      <Btn>소나</Btn>
    </FootDiv>
  );
};

const FootDiv = styled.nav`
  width: 100%;
  height: 7%;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#b8d7ff, skyBlue, deepSkyBlue);
`;
const Btn = styled.button`
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  margin: 10px;
  border: 0;
`;

export default Footer;
