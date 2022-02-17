import React from "react";
import styled from "styled-components";

const Header = (props) => {
  return (
    <HeadDiv>
      <BackBtn>👈</BackBtn>
    </HeadDiv>
  );
};

const HeadDiv = styled.nav`
  width: 100%;
  height: 7%;
  background: linear-gradient(#b8d7ff, skyBlue, deepSkyBlue);
`;

const BackBtn = styled.button`
  border: 0;
  width: 10%;
  margin: 10px auto;
  height: 50%;
  align: left;
`;

export default Header;
