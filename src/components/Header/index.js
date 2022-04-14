import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import $ from "jquery";
class Header extends Component {
  state = {
    loadingBarProgress: 0,
    isMenuWhite: false,
  };
  complete = () => {
    this.setState({ loadingBarProgress: 100 });
  };
  onLoaderFinished = () => {
    this.setState({ loadingBarProgress: 0 });
  };
  componentDidMount() {
    this.complete();
    const isBranding = this.props.location.pathname.includes("branding");
    this.setState({ isMenuWhite: isBranding });
    Header.loadScripts();
  }
  static loadScripts() {
    $(".switchMenu").click(function () {
      $("#_menu").toggleClass("active");
      $("#es_menu").toggleClass("open");
      $("#_menu").toggleClass("menu-open").toggleClass("menu-close");
      $("body").toggleClass("no-scroll");
      $("html, body").animate({ scrollTop: 0 }, "slow");
    });
  }
  handleMenuToggle() {
    $("#_menu").toggleClass("active");
    $("#es_menu").toggleClass("open");
    $("#_menu").toggleClass("menu-open").toggleClass("menu-close");
    $("body").toggleClass("no-scroll");
  }
  render() {
    const customMenuStyle = this.state.isMenuWhite ? { color: "white" } : {};
    return (
      <div id="topHeader" className="topheader">
        <LoadingBar
          progress={this.state.loadingBarProgress}
          height={2}
          color="red"
          onLoaderFinished={() => this.onLoaderFinished()}
        />
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="EmberlineStudios">
                <a href="/" aria-label="EmberlineStudios">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xlinkHref="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 263.21 205"
                    style={{ enableBackground: "new 0 0 263.21 205" }}
                  >
                    <g className="ESlogo">
                      <g>
                        <path
                          className="st0"
                          d="M67.41,33.75c9.04-3.5,19.22,0.87,22.91,9.84c7.25,10.4,21.56,12.95,31.96,5.7c6.86-4.78,10.58-12.92,9.7-21.24c0-3.67-2.98-6.65-6.65-6.65s-6.65,2.98-6.65,6.65c0,1.76,0.69,3.44,1.93,4.69c-6.92-6.92-6.92-18.13,0-25.04s18.13-6.92,25.04,0s6.92,18.13,0,25.04s-6.92,18.13,0,25.04s18.13,6.92,25.04,0c3.32-3.32,5.19-7.83,5.19-12.52c0-2.33,0.61-4.62,1.78-6.64c3.67-6.35,11.79-8.53,18.14-4.86c-4.5,1.85-6.69,6.97-4.93,11.5c8.06,17.36,28.66,24.89,46.01,16.83s24.89-28.66,16.83-46.01c-0.12-0.25-0.24-0.5-0.36-0.75c12.99,27.87,6.53,60.94-16.01,81.85c-6.7-15.75-24.9-23.09-40.65-16.39c-6.76,2.87-12.27,8.06-15.57,14.62c-3.54,7.06-0.69,15.65,6.37,19.19c1.72,0.86,3.6,1.37,5.53,1.49c-11.2,0.13-22.28-2.4-32.32-7.38c7.2-1.4,11.9-8.38,10.5-15.58c-1.4-7.2-8.38-11.9-15.58-10.5c-6.24,1.22-10.74,6.68-10.74,13.04c0,7.05,2.8,13.8,7.78,18.78c6.64,6.64,10.37,15.65,10.37,25.04c0-7.34-5.95-13.28-13.28-13.28s-13.28,5.95-13.28,13.28c0,7.05,2.8,13.8,7.78,18.78c3.1,3.1,5.39,6.93,6.65,11.13c4.22,14.05-3.74,28.86-17.79,33.09c6.12-16.17,3.09-34.38-7.92-47.7c-11.8-15.83-13.14-37.13-3.4-54.31c4.36-6.59,2.55-15.46-4.04-19.81c-6.59-4.36-15.46-2.55-19.81,4.04c-4.36,6.59-2.55,15.46,4.04,19.81c2.09,1.38,4.5,2.19,7,2.34c-10.9,6.18-23.24,9.36-35.77,9.21c7.88-0.49,13.87-7.27,13.38-15.15c-0.12-1.92-0.63-3.8-1.49-5.53c-7.68-15.3-26.3-21.48-41.6-13.8c-7.23,3.63-12.75,9.94-15.39,17.58C3.86,78.52-3.62,44.2,9.85,15.32C1.31,32.28,8.13,52.96,25.09,61.5s37.64,1.73,46.18-15.23c0.17-0.33,0.33-0.67,0.49-1.01c2.15-3.92,0.71-8.84-3.21-10.99C68.18,34.07,67.8,33.89,67.41,33.75z"
                        />{" "}
                      </g>
                    </g>
                  </svg>
                </a>
              </div>

              <nav className="navbar navbar-expand-md">
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDropdown"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <NavLink
                        style={customMenuStyle}
                        exact
                        activeClassName="active"
                        className="nav-link"
                        to="/"
                      >
                        HOME <span className="sr-only">(current)</span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        style={customMenuStyle}
                        className="nav-link"
                        to="/projects"
                      >
                        PROJECTS
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        style={customMenuStyle}
                        className="nav-link"
                        to="/services"
                      >
                        SERVICES
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        style={customMenuStyle}
                        className="nav-link"
                        to="/branding"
                      >
                        BRANDING
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        style={customMenuStyle}
                        className="nav-link"
                        to="/about"
                      >
                        ABOUT US
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        style={customMenuStyle}
                        className="nav-link"
                        to="/contact"
                      >
                        CONTACT US
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div className="menu_icon wow fadeInRight">
          <a className="menu-open" id="_menu" onClick={this.handleMenuToggle}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </a>
        </div>

        <div className="es_menu" id="es_menu">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-6 w-mob">
                <div className="EmberlineStudios-m">
                  <NavLink to="/">
                    <svg
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xlinkHref="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 263.21 205"
                      style={{ enableBackground: "new 0 0 263.21 205" }}
                    >
                      <g className="ESlogo">
                        <g>
                          <path
                            className="st0"
                            d="M67.41,33.75c9.04-3.5,19.22,0.87,22.91,9.84c7.25,10.4,21.56,12.95,31.96,5.7c6.86-4.78,10.58-12.92,9.7-21.24c0-3.67-2.98-6.65-6.65-6.65s-6.65,2.98-6.65,6.65c0,1.76,0.69,3.44,1.93,4.69c-6.92-6.92-6.92-18.13,0-25.04s18.13-6.92,25.04,0s6.92,18.13,0,25.04s-6.92,18.13,0,25.04s18.13,6.92,25.04,0c3.32-3.32,5.19-7.83,5.19-12.52c0-2.33,0.61-4.62,1.78-6.64c3.67-6.35,11.79-8.53,18.14-4.86c-4.5,1.85-6.69,6.97-4.93,11.5c8.06,17.36,28.66,24.89,46.01,16.83s24.89-28.66,16.83-46.01c-0.12-0.25-0.24-0.5-0.36-0.75c12.99,27.87,6.53,60.94-16.01,81.85c-6.7-15.75-24.9-23.09-40.65-16.39c-6.76,2.87-12.27,8.06-15.57,14.62c-3.54,7.06-0.69,15.65,6.37,19.19c1.72,0.86,3.6,1.37,5.53,1.49c-11.2,0.13-22.28-2.4-32.32-7.38c7.2-1.4,11.9-8.38,10.5-15.58c-1.4-7.2-8.38-11.9-15.58-10.5c-6.24,1.22-10.74,6.68-10.74,13.04c0,7.05,2.8,13.8,7.78,18.78c6.64,6.64,10.37,15.65,10.37,25.04c0-7.34-5.95-13.28-13.28-13.28s-13.28,5.95-13.28,13.28c0,7.05,2.8,13.8,7.78,18.78c3.1,3.1,5.39,6.93,6.65,11.13c4.22,14.05-3.74,28.86-17.79,33.09c6.12-16.17,3.09-34.38-7.92-47.7c-11.8-15.83-13.14-37.13-3.4-54.31c4.36-6.59,2.55-15.46-4.04-19.81c-6.59-4.36-15.46-2.55-19.81,4.04c-4.36,6.59-2.55,15.46,4.04,19.81c2.09,1.38,4.5,2.19,7,2.34c-10.9,6.18-23.24,9.36-35.77,9.21c7.88-0.49,13.87-7.27,13.38-15.15c-0.12-1.92-0.63-3.8-1.49-5.53c-7.68-15.3-26.3-21.48-41.6-13.8c-7.23,3.63-12.75,9.94-15.39,17.58C3.86,78.52-3.62,44.2,9.85,15.32C1.31,32.28,8.13,52.96,25.09,61.5s37.64,1.73,46.18-15.23c0.17-0.33,0.33-0.67,0.49-1.01c2.15-3.92,0.71-8.84-3.21-10.99C68.18,34.07,67.8,33.89,67.41,33.75z"
                          />{" "}
                        </g>
                      </g>
                    </svg>
                  </NavLink>
                </div>

                <div className="social-icon es_menu-social">
                  <a
                    href="https://www.facebook.com/emberlinestudios"
                    rel="noopener"
                    target="_blank"
                  >
                    <svg
                      aria-hidden="true"
                      height="17px"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="facebook-f"
                      class="svg-inline--fa fa-facebook-f fa-w-10"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.behance.net/emberlinestudios"
                    rel="noopener"
                    target="_blank"
                  >
                    <svg
                      aria-hidden="true"
                      height="17px"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="behance"
                      class="svg-inline--fa fa-behance fa-w-18"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2.6-8.7.6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/emberline-studios"
                    rel="noopener"
                    target="_blank"
                  >
                    <svg
                      aria-hidden="true"
                      height="17px"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="linkedin-in"
                      class="svg-inline--fa fa-linkedin-in fa-w-14"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/emberline_studios"
                    rel="noopener"
                    target="_blank"
                  >
                    <svg
                      aria-hidden="true"
                      height="17px"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="instagram"
                      class="svg-inline--fa fa-instagram fa-w-14"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                      ></path>
                    </svg>
                  </a>
                </div>

                <div className="em-menu-bottom">
                  <h1>
                    YOUR
                    <br />
                    SKYWARD
                    <br />
                    COMPANION
                  </h1>
                  <a href="mailto:hello@emberlinestudios.com">
                    hello@emberlinestudios.com
                  </a>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-auto mw_bg">
                <nav className="es_menu-l">
                  <ul>
                    <li>
                      <NavLink to="/" className="inver switchMenu">
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/projects" className="inver switchMenu">
                        Projects
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/services" className="inver switchMenu">
                        Services
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/branding" className="inver switchMenu">
                        Branding
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/about" className="inver switchMenu">
                        About Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact" className="inver switchMenu">
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
