import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "normalize.css";
import "./styles/styles.scss";

const expreseDashboardPage = () => (
  <div>this is from my dashboard components</div>
);

const addExpresePage = () => <div>this is from my add exrpese component</div>;
const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={expreseDashboardPage} exact={true} />
      <Route path="/create" component={addExpresePage} />
    </div>
  </BrowserRouter>
);
ReactDOM.render(routes, document.getElementById("app"));
