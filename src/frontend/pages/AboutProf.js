import Header from "../components/Header";
import React from "react";
import Footer from "../components/Footer";
import AboutProf from "../components/AboutProf";
import "./styles.css"


export default function Homepage() {
  return (
    <div className="AboutProf">
      <Header></Header>
      <AboutProf></AboutProf>
      <Footer></Footer>
    </div>
  );
}
