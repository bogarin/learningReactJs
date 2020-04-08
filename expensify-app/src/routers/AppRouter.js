import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpresePage from "../components/AddExpresePage";
import EditExpresePage from "../components/EditExpresePage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
const AppRouter = () => {

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={ExpenseDashboardPage} exact={true} />
          <Route path="/create" component={AddExpresePage} />
          <Route path="/edit/:id" component={EditExpresePage} />
          <Route path="/help" component={HelpPage} />
          <Route  component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default AppRouter;
