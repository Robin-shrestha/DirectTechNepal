import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
// import Footer from "./components/footer/Footer";
import Footer from "./components/footer/Footer1";

import Contacts from "./components/contact/Contact";
import Gallery from "./components/gallery/Gallery";

import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div
      style={
        {
          // background: "rgb(9,9,121)",
          // background:
          //   "linear-gradient(90deg, rgba(9,9,121,0.5046393557422969) 7%, rgba(255,0,0,0.3113620448179272) 51%, rgba(9,9,121,0.5046393557422969) 93%)",
        }
      }
    >
      <Header />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contactus" component={Contacts} />
        <Route path="/gallery" component={Gallery} />

        <Route path="/" component={Home} />
        <Route exact path="/DirectTechNepal">
          <Redirect to="/" />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
// http://192.168.1.64:3000
