import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { Switch, Route, Redirect } from "react-router-dom";
import Foorter from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route to="/" component={Home} />
        <Route exact path="/DirectTechNepal">
          <Redirect to="/" />
        </Route>
      </Switch>
      <Foorter />
    </div>
  );
}

export default App;
// http://192.168.1.64:3000
