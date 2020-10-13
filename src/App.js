import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { Switch, Route, Redirect } from "react-router-dom";
// import Footer from "./components/footer/Footer";
function App() {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Header />
      <Switch>
        <Route path="/" component={Home} />
        <Route exact path="/DirectTechNepal">
          <Redirect to="/" />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
// http://192.168.1.64:3000
