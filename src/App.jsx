import React from "react";
import Header from "./components/header/Header";
import Explore from "./components/explore/Explore";
import Cards from "./components/cards/Cards";
import Wait from "./components/wait/Wait";
import JoinToday from "./components/jointoday/JoinToday";
import Footer from "./components/footer/Footer";
import './App.css'

const App = () => {
  return (
    <div className="app">
      <Header />
      <Explore />
      <Cards />
      <Wait />
      <JoinToday />
      <Footer />
    </div>
  );
};

export default App;
