import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Searchpage from "../components/Searchpage";
import "./styles.css"

export default function Homepage() {
  return (
    <div className="Searchpage">
      <Header></Header>
      <Searchpage></Searchpage>
      <Footer></Footer>
    </div>
  );
}
