import React from "react";
import './App.css';
import Homepage from "./frontend/pages/Homepage";
import ContactUs from "./frontend/pages/ContactUs";
import AboutUs from "./frontend/pages/AboutUs";
import Websitepage from "./frontend/pages/Websitepage";
import Login from "./frontend/pages/Login";
import CreateAccount from "./frontend/pages/CreateAccount";
import Searchpage from "./frontend/pages/Searchpage";
import AboutProf from "./frontend/pages/AboutProf";
import { BrowserRouter, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact component={Homepage} />
        <Route path="/web" exact component={Websitepage} />
        <Route path="/ContactUs" exact component={ContactUs} />
        <Route path="/AboutUs" exact component={AboutUs} />
        <Route path="/Login" exact component={Login} />
        <Route path="/CreateAccount" exact component={CreateAccount} />
        <Route path="/Searchpage" exact component={Searchpage} />
        <Route path="/AboutProf" exact component={AboutProf} />
      </div>
    </BrowserRouter>
  );
}
