import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


function App() {
  return (<>


    <BrowserRouter >
      <Header />
      <Routes>
        <Route index element={<Home />} />

      </Routes>
      <Footer />
    </BrowserRouter>


  </>);
}

export default App;
