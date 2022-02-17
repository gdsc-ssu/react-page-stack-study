import React, { useState } from "react";
import styled from "styled-components";
const Main = (props) => {
  let [name, namechange] = useState("메인입니다.");
  return (
    <MainDiv>
      <Name>{name}</Name>
    </MainDiv>
  );
};

const MainDiv = styled.div`
  width: 100%;
  height: 86%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(lightCyan, skyBlue, deepSkyBlue);
`;

const Name = styled.h2``;

export default Main;
