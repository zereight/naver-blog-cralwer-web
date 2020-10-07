import React from "react";
import Header from "./Components/Header";
import globalStyles from "./Styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
