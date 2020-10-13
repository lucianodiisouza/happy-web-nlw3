import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Places from "./pages/Places";

const NotFound = () => {
  return <h1>Não encontrado</h1>;
};

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/locais" exact component={Places} />

        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
