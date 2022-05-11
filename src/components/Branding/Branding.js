import React, { useEffect, useMemo, useRef, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import axios from "axios";
import { Link } from "react-router-dom";
import * as PATHS from "../../constants/data_routes";
import Tilt from "react-tilt";
import "../../css/hvco-pdf.css";
import Header from "../Header";
import { executeScroll, imageBrowserCompatible } from "../../util";
import CalendlyForm from "../CalendlyForm/calendlyform";
import * as ROUTES from "../../constants/routes";
import brandingImg from "../../images/branding-img.jpg";

export default function Branding({ ...props }) {
  const bookMyCallRef = useRef(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const cachedProjects = sessionStorage.getItem("projects");
    if (cachedProjects) {
      let projects = JSON.parse(cachedProjects);
      setProjects(projects);
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
          setProjects(projects);
          localStorage.setItem("projectIdMap", JSON.stringify(projectIdMap));
          sessionStorage.setItem("projects", JSON.stringify(projects));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, []);

  const brandingProjects = useMemo(()=>{
    return projects.filter(project => {
      const categories = project.categories.map(category => category.name);
      return categories.includes('Branding');
    });
  },[projects]);

  const goToConnectSection = (e) => {
    e.preventDefault();
    if (bookMyCallRef.current) {
      executeScroll(bookMyCallRef);
    }
  };

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
  /// Desktop: https://res.cloudinary.com/drz9rnpwi/video/upload/v1652272439/emberlines/Desktop_Small_zost26.mp4
  //// Mobile : https://res.cloudinary.com/drz9rnpwi/video/upload/v1652272649/emberlines/Mobile_Small_yydldp.mp4
  return (
    <div>
      <Header />
      <div className="vds-header d-flex">
        <video
          playsInline="playsInline"
          autoPlay="autoplay"
          muted="muted"
          loop="loop"
        >
          <source
            src="https://res.cloudinary.com/drz9rnpwi/video/upload/v1652272439/emberlines/Desktop_Small_zost26.mp4"
            type="video/mp4"
          />
        </video>
        <div className="container m-auto">
          <div className="row">
            <div className="col-md-12">
              <h2>Make Your Business</h2>
              <h1>BULLETPROOF</h1>
              <p>
                We help you create an Impactful Brand by telling your story in a
                way that connects with people.
              </p>
              <div className="row">
                <div className="col-6">
                  <div className="w-b">
                    Unlimited <span>Revisions</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="w-b">
                    100% <span>Payment after work</span>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="btn button-vds"
                onClick={goToConnectSection}
              >
                FREE CONSULTATION CALL
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="breadwinner">
        <div className="container">
          <div className="row">
            <div className="card">
              <div className="card-header"> Dear Breadwinner </div>
              <div className="card-body">
                <p>We understand.</p>
                <p>
                  We know building a successful business is hard and keeping it
                  up even harder.
                </p>
                <p>
                  Always worrying about your next customer and fear of losing
                  current clients.
                </p>
                <p>Wondering how on Earth people have built Giant brands.</p>
                <p>
                  Who are these people, where do they come from, what do they
                  eat?!
                </p>
                <p>
                  Probably waking up and praying in the middle of the night.{" "}
                </p>
                <p>
                  How can I end this 9-5 and start my own thing but then your
                  baby kicks you in the tummy reminding that milk and diapers
                  are worth gold these days.
                </p>
                <p>
                  Yesterday, a friend told you to post daily on social media and
                  today a blog post told you to run ads.
                </p>
                <p>
                  Sending you into a vicious circle of the fast and ever
                  changing crazy world of the internet and Social Media.{" "}
                </p>
                <p>
                  Instagram or TikTok or Both? <br />
                  What’s Telegram marketing? <br />
                  Can someone please tell me what is Metaverse?
                </p>
                <p>
                  Watching success stories inspires you but honestly deep down
                  in your hearts you know you can do better than you are doing
                  right now.
                </p>
                <p>
                  And one fine morning, you might have thought about getting a
                  new fancy website.
                </p>
                <p>
                  Waking up everyday to I got to do this, I got to do that and
                  getting nowhere with useless chunks of everything.
                </p>
                <p>
                  Ending up overworked and exhausted back to where you started
                  from.
                </p>
                <p>
                  <strong>THIS IS WHAT TURNS HAIR GRAY.</strong>
                </p>
                <p>
                  We have gone through exactly what you just read so we know the
                  pain.
                </p>
                <p>
                  <strong>BUT THIS IS REALLY ABOUT YOU.</strong>
                </p>
                <p>
                  You know this feel because you might be going through this
                  right now, have gone through this or are comfortable but need
                  a little more security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="deal-sec">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <p>So here’s the deal</p>
              <h2>
                WE WILL CREATE
                <br />
                AN IMPACTFUL
                <br />
                BRAND IDENTITY
              </h2>
              <p>along with these incredible guarantees</p>
            </div>
            <div className="col-md-4">
              <div className="deal-sec-card">
                100% PAYMENT
                <br />
                AFTER WORK
              </div>
            </div>
            <div className="col-md-4">
              <div className="deal-sec-card">
                UNLIMITED
                <br />
                REVISIONS
              </div>
            </div>
            <div className="col-md-4">
              <div className="deal-sec-card">
                EVERYTHING
                <br />
                ON TIME
              </div>
            </div>
            <div className="col-12 text-center">
              <button
                type="submit"
                className="btn button-vds"
                onClick={goToConnectSection}
              >
                GET ME ON CALL
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="ES-section _Projects HVCO-PDF pt-0">
        <div className="container _pro-BG">
          <div className="row">
            <div className="col-12 text-center">
              <h1>BRANDS WE WORKED WITH</h1>
              {brandingProjects?.length && (
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
                  {brandingProjects?.map((project) => (
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
                            src={imageBrowserCompatible(project.cloudurl)}
                            alt={project.title}
                          />
                        </Tilt>
                      </Link>
                    </div>
                  ))}
                </OwlCarousel>
              )}
              <a
                className="btn button-vds"
                href="/"
                onClick={goToConnectSection}
              >
                BOOK MY CALL
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="branding-sec pt-0">
        <div className="container d-flex">
          <div className="row">
            <div className="col-md-6 m-auto">
              <p>We’ve put Everything in This Book so</p>
              <h4>YOU CAN LEARN DEEP SECRETS OF</h4>
              <h2>BRANDING </h2>
              <ul>
                <li>How to brand your business without hurting your pockets</li>
                <li>An attractive Logo brings more customers, right? WRONG!</li>
                <li>
                  Experiments you should never do with your Brand Identity...
                </li>
                <li>
                  That expensive graphic designer will get your job done? LOL!
                </li>
                <li>
                  05 Super Easy Steps to create an impactful brand from Scratch
                  without hiring Expensive Experts in just 1 Week!
                </li>
              </ul>
              <img
                className="d-mob"
                src={brandingImg}
                alt="Emberlinestudio Branding"
              />
              <Link to={ROUTES.BRANDING_BOOK} className="btn button-vds">
                GET YOUR COPY!
              </Link>
            </div>
            <div className="col-md-6 m-auto h-mob ">
              <img src={brandingImg} alt="Emberlinestudio Branding" />
            </div>
          </div>
        </div>
      </div>
      <div className="sec-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h3>WE ARE RESOLVED TO HELP YOU GROW</h3>
              <p>
                With this promise, we are offering another jaw-dropping prospect
              </p>
              <h2>A HIGHLY PRODUCTIVE CONSULTATION CALL WORTH $500</h2>
              <h1>FOR FREE!</h1>
            </div>
            <div className="col-12">
              <p className="text-center">Where we will try to discuss:</p>
              <div className="row">
              <div className="col-2"></div>
              <div className="col-10">
              <ul>
                <li>Current Branding</li>
                <li>Our Brand Design Process</li>
                <li>Brand Colatterals</li>
                <li>Social Media Presence</li>
              </ul>
              <ul>
                <li>What Inspired You!</li>
                <li>Brand Goals</li>
                <li>Marketing Strategies</li>
                <li>Website Overview </li>
              </ul>
              </div>
              
              </div>
              
            </div>
            <div className="col-12 text-center">
              <button
                type="submit"
                className="btn button-vds"
                onClick={goToConnectSection}
              >
                GET ME ON CALL
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="letConnect d-flex" ref={bookMyCallRef}>
        <CalendlyForm />
      </div>
    </div>
  );
}
