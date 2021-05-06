import React from "react";
import "./styles.css";
import Card from "../../components/Card";

export default function Bodyweb() {
  return (
    <div className="body-web">
      <h1 className="popular mb-5">Popular</h1>
      <div className="flex-container">
        <Card
          image="https://i.ibb.co/W0cHtQY/daiict.jpg"
          heading="Daiict"
          detail="Welcome to DAIICT"
        ></Card>

        <Card
          image="https://i.ibb.co/5x8pqdS/Nirma-University-Logo.png"
          heading="NIRMA"
          detail="Welcome to NIRMA"
        ></Card>

        <Card
          image="https://i.ibb.co/mqvQZ2Z/IIT-bombay.png"
          heading="IIT BOMBAY"
          detail="Welcome to IIT BOMBAY"
        ></Card>

        <Card
          image="https://i.ibb.co/HrZMQTS/IISc-Logo.jpg"
          heading="IISC"
          detail="Welcome to IISC"
        ></Card>

        {/* <Card
          image="https://i.ibb.co/BsC4TsP/Boy.png"
          heading="Daiict"
          detail="Welcome to DAIICT"
        ></Card>

        <Card
          image="https://i.ibb.co/BsC4TsP/Boy.png"
          heading="Daiict"
          detail="Welcome to DAIICT"
        ></Card> */}
      </div>
    </div>
  );
}
