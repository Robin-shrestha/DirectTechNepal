import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { Switch, Route } from "react-router-dom";
import Foorter from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route to="/" component={Home} />
      </Switch>
      <Foorter />
      <div style={{ marginTop: "2000px" }}></div>
    </div>
  );
}

export default App;
// http://192.168.1.64:3000
