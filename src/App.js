import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./actions/authActions";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
// import Contacts from "./components/contact/Contact";
import Gallery from "./components/gallery/Gallery";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/routes/PrivateRoute";
import Settings from "./components/membersOnly/settings/Settings";
import MessageBoard from "./components/membersOnly/messageboard/MessageBoard";
import MessageReader from "./components/membersOnly/messageboard/MessageReader";
import ScrollHandler from "./components/home/ScrollHandler/ScrollHandler";
import CreateBlog from "./components/blog/CreateBlog";
import BrowseBlog from "./components/blog/BrowseBlog";

import * as routes from "./constants/routes";
import { Switch, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (auth.token != null && !auth.isAuthenticated) {
      dispatch(getUser());
    }
  }, []);
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
      <ScrollHandler />
      <Switch>
        <Route path={routes.about} component={About} />
        {/* <Route path="/contactus" component={Contacts} /> */}
        <Route path={routes.gallery} component={Gallery} />
        <Route path={routes.login} component={Login} />
        <Route exact path={routes.browseBlogs} component={BrowseBlog} />

        <PrivateRoute exact path={routes.setting} component={Settings} />
        <PrivateRoute exact path={routes.messages} component={MessageBoard} />
        <PrivateRoute
          exact
          path={routes.readMessage}
          component={MessageReader}
        />
        <PrivateRoute exact path={routes.createBlog} component={CreateBlog} />

        <Route path="/" component={Home} />
        {/* <Route exact path="/"></Route> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
// http://192.168.1.64:3000
