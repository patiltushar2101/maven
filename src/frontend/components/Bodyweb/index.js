import React from "react";
import "./styles.css";
import Card from "../../components/Card";

export default function Bodyweb() {
  return (
    <div className="body-web">
      <h1 className="popular mb-2">Popular University</h1>
      <hr />
      <div className="flex-container">
        <Card
          image="https://i.ibb.co/W0cHtQY/daiict.jpg"
          heading="Daiict"
          detail="Welcome to DAIICT"
        ></Card>

        <Card
          image="https://i.ibb.co/2qCdVy8/Nirma-University-1.jpg"
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

      </div>


      <h1 className="popular-prof">Popular Search</h1>
      <hr />
      <div className="flex-container">
        <Card
          image="https://i.ibb.co/W0cHtQY/daiict.jpg"
          heading="Daiict"
          detail="Welcome to DAIICT"
        ></Card>

        <Card
          image="https://i.ibb.co/2qCdVy8/Nirma-University-1.jpg"
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

      </div>


    </div>
  );
}
