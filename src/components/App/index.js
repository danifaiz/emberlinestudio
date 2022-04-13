import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Home";
import Footer from "../Footer";
import Projects from "../Projects";
import Services from "../Services";
import Branding from "../Branding/Branding";
import BrandingBook from "../BrandingBook/BrandingBook";
import AboutPage from "../AboutPage";
import Contact from "../Contact";
import ProjectDetail from "../ProjectDetail";
import ServicesDetail from "../Services/ServicesDetail";
import Ecommerce from "../Ecommerce";

import * as ROUTES from "../../constants/routes";

class App extends Component {
  state = {
    projects: [],
  };
  static loadScripts() {
    var Headerfix = document.getElementById("action");
    var myScrollFunc = function () {
      var y = window.scrollY;
      if (y >= 230) {
        Headerfix.className = "action n-hiden";
      } else {
        Headerfix.className = "action n-show";
      }
    };
    window.addEventListener("scroll", myScrollFunc);
  }

  componentWillMount() {
    localStorage.clear();
    sessionStorage.clear();
  }
  componentDidMount() {
    App.loadScripts();
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={ROUTES.Landing} component={Home} />
          <Route path={ROUTES.HOME} component={Home} />
          <Route path={ROUTES.BRANDING} component={Branding} />
          <Route path={ROUTES.BRANDING_BOOK} component={BrandingBook} />
          <Route path={ROUTES.PROJECTS} component={Projects} />
          <Route path={ROUTES.ABOUT_US} component={AboutPage} />
          <Route path={ROUTES.SERVICES} component={Services} />
          <Route path={ROUTES.CONTACT_US} component={Contact} />
          <Route path={ROUTES.PROJECT_DETAIL} component={ProjectDetail} />
          <Route path={ROUTES.SERVICES_DETAIL} component={ServicesDetail} />
          <Route path={ROUTES.ECOMMERECE_SOLUTION} component={Ecommerce} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
