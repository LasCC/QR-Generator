import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import Wifi from "./pages/Wifi";
import Messages from "./pages/Messages";
import URL_code from "./pages/URL";
import UnknownPage from "./pages/UnknownPage";
import PhoneCall from "./pages/PhoneCall";
import Mail from "./pages/Mail";
import "./styles.css";

const App = () => {
  return (
    <>
      <Switch>
        <Route component={Wifi} exact path="/" />
        <Route component={URL_code} exact path="/url" />
        <Route component={Messages} exact path="/sms" />
        <Route component={PhoneCall} exact path="/phone" />
        <Route component={Mail} exact path="/mail" />
        <Route component={UnknownPage} path="*" />
      </Switch>
    </>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
