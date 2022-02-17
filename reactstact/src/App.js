import logo from "./logo.svg";
import react from "React";
import "./App.css";
import Header from "./componet/Header";
import Footer from "./componet/Footer";
import Main from "./componet/Main";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
