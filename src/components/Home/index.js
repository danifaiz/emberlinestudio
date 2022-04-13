import React, { Component } from "react";
import ESHeader from "../ESHeader";
import OwlCarousel from "react-owl-carousel";
import axios from "axios";
import * as PATHS from "../../constants/data_routes";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Services from "../Services";
import Tilt from "react-tilt";
import Header from "../Header";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
    };
  }
  componentDidMount() {
    const cachedProjects = sessionStorage.getItem("projects");
    if (cachedProjects) {
      let projects = JSON.parse(cachedProjects);
      this.setState({ projects: projects });
    } else {
      axios
        .get(`${PATHS.BASE_URL}` + `${PATHS.PROJECTS_URL}`)
        .then((res) => {
          const projects = res.data;
          const projectIdMap = {};
          projects.forEach(function (project) {
            var title = project.title.replace(/ /g, "-").toLowerCase();
            projectIdMap[title] = project.id;
          });
          this.setState({ projects });
          localStorage.setItem("projectIdMap", JSON.stringify(projectIdMap));
          sessionStorage.setItem("projects", JSON.stringify(projects));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    window.scrollTo(0, 0);
  }
  imageBrowserCompatible(url) {
    var userAgent = window.navigator.userAgent;
    var isSafari =
      /constructor/i.test(window.HTMLElement) ||
      (function (p) {
        return p.toString() === "[object SafariRemoteNotification]";
      })(
        !window["safari"] ||
          (typeof window["safari"] !== "undefined" &&
            window["safari"].pushNotification)
      );
    if (isSafari || userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
      return url.replace(".webp", ".png");
    } else {
      return url;
    }
  }
  render() {
    let responsiveOwl = {
      320: {
        items: 1,
      },
      640: {
        items: 1,
      },
      768: {
        items: 2,
      },
      800: {
        items: 2,
      },
      992: {
        items: 3,
      },
    };
    let tiltOptions = {
      max: 20,
      perspective: 1000,
      easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
      scale: 1, // 2 = 200%, 1.5 = 150%, etc..
      speed: 250, // Speed of the enter/exit transition.
      transition: true,
    };
    const projects = this.state.projects;
    return (
      <div>
        <Header />
        <ESHeader />
        <div className="abouthome">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h1>ABOUT US</h1>
                <p>
                  We are of the few firms where owners create design and serve
                  as the primary contact for clients. This shows our love for
                  work and commitment for people who demand strong design
                  sensations. Our devotion is rewarded by our portfolio that is
                  versatile and expanding fast.
                </p>
                <NavLink className="button" to="/about">
                  Our Story
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <Services hideHeader={true} />
        <div className="ES-section _Projects">
          <div className="container _pro-BG">
            <div className="row">
              <div className="col-12 text-center">
                <h1>FEATURED PROJECTS</h1>
                {projects.length && (
                  <OwlCarousel
                    className="owl-theme"
                    loop
                    margin={10}
                    nav
                    autoplay
                    dragEndSpeed="800"
                    autoplayTimeout="8000"
                    autoplayHoverPause
                    dotData
                    smartSpeed="1000"
                    responsive={responsiveOwl}
                  >
                    {projects.map((project) => (
                      <div key={project.id} className="item">
                        <Link
                          to={
                            "project/" +
                            project.title.replace(/ /g, "-").toLowerCase()
                          }
                        >
                          <Tilt
                            options={tiltOptions}
                            className="projektDiv js-tilt"
                          >
                            <div className="p-content">
                              <h2>{project.title}</h2>
                              <span>
                                {project.categories.map((category, index) =>
                                  project.categories.length == index + 1
                                    ? category.name
                                    : category.name + ","
                                )}
                              </span>{" "}
                            </div>
                            <img
                              src={this.imageBrowserCompatible(
                                project.cloudurl
                              )}
                              alt={project.title}
                            />
                          </Tilt>
                        </Link>
                      </div>
                    ))}
                  </OwlCarousel>
                )}
                <NavLink className="button" to="/projects">
                  All Projects
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="ES-section P767">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h1>OUR CLIENTS</h1>
                <div className="_partner">
                  <div className="row">
                    <div className="col-lg-2 col-md-4 col-6">
                      <img
                        src="images/thermo-color.png"
                        alt="Industrial Enterprises"
                      />
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                      <img
                        src="images/jojo-color.png"
                        alt="Jojo Confectioneries PVT Ltd"
                      />
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                      <img
                        src="images/adventure-color.png"
                        alt="Adventure Planet Indoor Playland"
                      />
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                      <img
                        src="images/yoyo-color.png"
                        alt="YoyoLand Indoor Playland"
                      />
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                      <img src="images/jazzi-color.png" alt="Jazzi Amusement" />
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                      <img src="images/Uzham-Fashion.png" alt="Uzham Fashion" />
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                      <img
                        src="images/nic-color.png"
                        alt="National Incubation Center - LUMS Lahore "
                      />
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                      <img
                        src="images/prince-color.png"
                        alt="Prince Hair Salon"
                      />
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                      <img
                        src="images/usman-color.png"
                        alt="Usman Fragrances"
                      />
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                      <img
                        src="images/dha-color.png"
                        alt="Defence Housing Society"
                      />
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                      <img
                        src="images/Panel_Logo_trasnparent_s.png"
                        alt="Panel Analytics"
                      />
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                      <img src="images/fg-color.png" alt="F&G Enterprises" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
