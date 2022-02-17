import React from "react";
import "./App.css";
import Header from "./componet/Header.js";
import Footer from "./componet/Footer.js";
import Main from "./componet/Main.js";
import styled from "styled-components";

function App() {
  return (
    <FullDiv className="App">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </FullDiv>
  );
}
const FullDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #b8d7ff;
`;
export default App;
