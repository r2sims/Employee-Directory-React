import React from "react";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import Main from "./components/Main";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Container>
        <Header />
        <Main />
      </Container>
    </div>
  );
}

export default App;