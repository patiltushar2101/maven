import Header from "../components/Header";
import React from "react";
import Footer from "../components/Footer";
import AboutProf from "../components/AboutProf";
import "./styles.css"


export default function Homepage(props) {
  return (
    <div className="AboutProf">
      <h1>{props.match.params.searchName}</h1>
      <Header></Header>
      <AboutProf></AboutProf>
      <Footer></Footer>
    </div>
  );
}
