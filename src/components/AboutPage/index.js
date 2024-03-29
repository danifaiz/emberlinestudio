import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Header from "../Header";
class AboutPage extends Component {
  constructor() {
    super();
  }

  componentDidLoad() {}
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentWillUnmount() {}
  render() {
    return (
      <div>
        <Header />
        <div className="ES-section about subpage">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="text-uppercase">WHO WE ARE</h1>
                <p className="mb-0">
                  The chronicle of Emberline Studios is a story of three
                  designers who loved their work and wanted to be problem
                  solvers. After working individually for years, they decided to
                  share a platform in the design industry. Today, we are an
                  independent design firm owned by a triangle of multi-talented
                  designers.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ES-section _aboutPage">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-12">
                <h1 className="text-uppercase">WHAT WE DO</h1>
                <p>
                  Our atlas covers architecture & interiors, amusement park
                  designs, retail kiosks & exhibitions, branding & graphics,
                  UI/UX of digital products, 3D integrated designs and
                  animations.
                </p>
              </div>

              <div className="col-md-12 mt-50">
                <div className="row">
                  <div className="col-md-3 col-auto">
                    <div
                      className="nav flex-column nav-pills"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      <a
                        className="nav-link active"
                        id="Amusement-tab"
                        data-toggle="pill"
                        href="#Amusement"
                        role="tab"
                        aria-controls="Amusement"
                        aria-selected="true"
                      >
                        Amusement
                      </a>
                      <a
                        className="nav-link"
                        id="Architecture-tab"
                        data-toggle="pill"
                        href="#Architecture"
                        role="tab"
                        aria-controls="Architecture"
                        aria-selected="true"
                      >
                        Architecture
                      </a>
                      <a
                        className="nav-link"
                        id="Interior-tab"
                        data-toggle="pill"
                        href="#Interior"
                        role="tab"
                        aria-controls="Interior"
                        aria-selected="true"
                      >
                        Interior
                      </a>
                      <a
                        className="nav-link"
                        id="Graphics-tab"
                        data-toggle="pill"
                        href="#Graphics"
                        role="tab"
                        aria-controls="Graphics"
                        aria-selected="true"
                      >
                        Graphics
                      </a>
                      <a
                        className="nav-link"
                        id="Branding-tab"
                        data-toggle="pill"
                        href="#Branding"
                        role="tab"
                        aria-controls="Branding"
                        aria-selected="true"
                      >
                        Branding
                      </a>
                      <a
                        className="nav-link"
                        id="UIUX-tab"
                        data-toggle="pill"
                        href="#UIUX"
                        role="tab"
                        aria-controls="UIUX"
                        aria-selected="true"
                      >
                        UI/UX
                      </a>
                      <a
                        className="nav-link"
                        id="Animation-tab"
                        data-toggle="pill"
                        href="#Animation"
                        role="tab"
                        aria-controls="Animation"
                        aria-selected="true"
                      >
                        3D Animation
                      </a>
                      <a
                        className="nav-link"
                        id="Kiosks-tab"
                        data-toggle="pill"
                        href="#Kiosks"
                        role="tab"
                        aria-controls="Kiosks"
                        aria-selected="true"
                      >
                        Kiosks
                      </a>
                      <a
                        className="nav-link"
                        id="Exhibition-tab"
                        data-toggle="pill"
                        href="#Exhibition"
                        role="tab"
                        aria-controls="Exhibition"
                        aria-selected="true"
                      >
                        Exhibition Stalls
                      </a>
                    </div>
                    <NavLink className="button btn-explore" to="/projects">
                      EXPLORE
                    </NavLink>
                  </div>
                  <div className="col-md-9 col">
                    <div className="tab-content" id="v-pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="Amusement"
                        role="tabpanel"
                        aria-labelledby="Amusement-tab"
                      >
                        <img
                          src="images/amusement_img.jpg"
                          width="1140"
                          height="790"
                          alt="amusement"
                        />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="Architecture"
                        role="tabpanel"
                        aria-labelledby="Architecture-tab"
                      >
                        <img
                          src="images/Architecture-ab.jpg"
                          width="1140"
                          height="790"
                          alt="Architecture"
                        />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="Interior"
                        role="tabpanel"
                        aria-labelledby="Interior-tab"
                      >
                        <img
                          src="images/Interior-ab.jpg"
                          width="1140"
                          height="790"
                          alt="Interior"
                        />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="Graphics"
                        role="tabpanel"
                        aria-labelledby="Graphics-tab"
                      >
                        <img
                          src="images/Graphics-ab.jpg"
                          width="1140"
                          height="790"
                          alt="Graphics"
                        />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="Branding"
                        role="tabpanel"
                        aria-labelledby="Branding-tab"
                      >
                        <img
                          src="images/Branding-ab.jpg"
                          width="1140"
                          height="790"
                          alt="Branding"
                        />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="UIUX"
                        role="tabpanel"
                        aria-labelledby="UIUX-tab"
                      >
                        <img
                          src="images/UI-UX-ab.jpg"
                          width="1140"
                          height="790"
                          alt="UI-UX"
                        />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="Animation"
                        role="tabpanel"
                        aria-labelledby="Animation-tab"
                      >
                        <img
                          src="images/3D-Animation-ab.jpg"
                          width="1140"
                          height="790"
                          alt="3D-Animation"
                        />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="Kiosks"
                        role="tabpanel"
                        aria-labelledby="Kiosks-tab"
                      >
                        <img
                          src="images/Kiosk-ab.jpg"
                          width="1140"
                          height="790"
                          alt="Kiosk"
                        />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="Exhibition"
                        role="tabpanel"
                        aria-labelledby="Exhibition-tab"
                      >
                        <img
                          src="images/Exhibition-Stall-ab.jpg"
                          width="1140"
                          height="790"
                          alt="Exhibition Stall"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ES-section _approach">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-12">
                <h1 className="text-uppercase">our approach</h1>
                <p>
                  We are of the few firms where owners create design and serve
                  as the primary contact for clients. This shows our love for
                  work and commitment for people who demand strong design
                  sensations.
                </p>
              </div>

              <div className="col-md-12 mt-50">
                <div className="row">
                  <ul className="nav nav-pills" id="pills-tab" role="tablist">
                    <li className="col-md nav-item">
                      Moodboard
                      <a
                        className="nav-link active"
                        id="Moodboard-tab"
                        data-toggle="pill"
                        href="#Moodboard"
                        role="tab"
                        aria-controls="Moodboard"
                        aria-selected="true"
                      >
                        1
                      </a>{" "}
                    </li>
                    <li className="col-md nav-item">
                      Brainstorm
                      <a
                        className="nav-link"
                        id="Brainstorm-tab"
                        data-toggle="pill"
                        href="#Brainstorm"
                        role="tab"
                        aria-controls="Brainstorm"
                        aria-selected="true"
                      >
                        2
                      </a>{" "}
                    </li>
                    <li className="col-md nav-item">
                      Design
                      <a
                        className="nav-link"
                        id="Design01-tab"
                        data-toggle="pill"
                        href="#Design01"
                        role="tab"
                        aria-controls="Design01"
                        aria-selected="true"
                      >
                        3
                      </a>{" "}
                    </li>
                    <li className="col-md nav-item">
                      Execution
                      <a
                        className="nav-link"
                        id="Execution-tab"
                        data-toggle="pill"
                        href="#Execution"
                        role="tab"
                        aria-controls="Execution"
                        aria-selected="true"
                      >
                        4
                      </a>{" "}
                    </li>
                    <li className="col-md nav-item">
                      Support
                      <a
                        className="nav-link"
                        id="Support-tab"
                        data-toggle="pill"
                        href="#Support"
                        role="tab"
                        aria-controls="Support"
                        aria-selected="true"
                      >
                        5
                      </a>{" "}
                    </li>
                  </ul>
                  <div className="col-12 tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="Moodboard"
                      role="tabpanel"
                      aria-labelledby="Moodboard-tab"
                    >
                      <h3>Moodboard</h3>
                      <p>
                        We organize our study about your project into a brief
                        presentation which helps both parties to visualize the
                        art direction being followed. This helps us to get on
                        the same page with our clients.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="Brainstorm"
                      role="tabpanel"
                      aria-labelledby="Brainstorm-tab"
                    >
                      <h3>Brainstorm</h3>
                      <p>
                        {" "}
                        Once we establish our art direction, we sketch and
                        iterate new ideas and shape them according to the
                        project needs.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="Design01"
                      role="tabpanel"
                      aria-labelledby="Design01-tab"
                    >
                      <h3>Design</h3>
                      <p>
                        This is the fundamental stage of our work where we bring
                        our ideas into reality; visualize, iterate, and create
                        drawing set for execution and easy implementation.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="Execution"
                      role="tabpanel"
                      aria-labelledby="Execution-tab"
                    >
                      <h3>Execution</h3>
                      <p>
                        {" "}
                        Our team is trained to provide precision in the
                        execution of the project that is on budget and in time.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="Support"
                      role="tabpanel"
                      aria-labelledby="Support-tab"
                    >
                      <h3>Support</h3>
                      <p>
                        Our team is always active and will answer your call for
                        support on projects we deliver. We keep record of our
                        projects so you don't have to worry about it.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ES-section p-0">
          <div className="container">
            <div className="row">
              <div className="col-md-7 philosophy">
                <h1 className="text-uppercase">our PHILOSOPHY</h1>
                <p>
                  Emberline Studios is a blend of two subjects – Ember & Line –
                  and has been symbolized as a Phoenix.
                </p>
                <p>
                  <strong>Ember</strong> is the last burning piece of a dying
                  fire. It is also the crux of a phoenix’s rebirth. Thus, ember
                  – to us – personifies hope; a promise which enables us to
                  start over again when we fail. It also reflects our faith in
                  Allah who would forgive and nullify our sins when we repent.
                </p>
                <p className="mb-0">
                  <strong>Line</strong> is a one-dimensional shape with infinite
                  ends. It personifies a phoenix’s eternal life and its infinite
                  journey. Hence, line – to us – is consistency & direction; a
                  flight that has Allah’s throne as its destination.
                </p>
              </div>
              <div className="col-md-5">
                <div className="AB-logo">
                  <div className="MP">
                    <img src="images/emberline-studios-red.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ES-section OV-Beliefs">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1 className="text-uppercase">
                  Our Values,
                  <br />
                  BELIEFS
                </h1>
              </div>
              <div className="col-md-6">
                <div className="OV-cont">
                  <h3>Your Skyward Companion</h3>
                  <p>
                    We take great pride in calling ourselves your skyward
                    companion because this feat demands ceaseless resolution,
                    character and awe-inspiring creativity.
                  </p>
                </div>
                <div className="OV-cont">
                  <h3>Part of your circle</h3>
                  <p>
                    Being connected with people is what fuels us and helps us
                    grow. This healthy relationship, more often than not,
                    results in an increment of ideas and opportunities.
                  </p>
                </div>
                <div className="OV-cont">
                  <h3>Facta Non Verba</h3>
                  <p>
                    “Actions, not words” – is our battle-cry. Each person at
                    Emberline Studios wants his work speak for himself. Each one
                    of us is a strong believer of “Walk the talk”.
                  </p>
                </div>
                <div className="OV-cont">
                  <h3>Go Getters</h3>
                  <p>
                    We love to talk to new people and ask them how we could help
                    them grow their businesses. Our team is passionate about
                    solving problems and helping out people.
                  </p>
                </div>
                <div className="OV-cont">
                  <h3>Intricacy Involved</h3>
                  <p>
                    We know that small things in life matter and we put hard
                    work into them. These efforts strengthen design and enhance
                    the overall quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ES-section about C-Happy">
          <div className="container">
            <div className="row">
              <div className="col-md-4 CR-side">
                <h1 className="text-uppercase">
                  Making each of our clients happY
                </h1>
              </div>
              <div className="col-md-8">
                <div className="row happyCL">
                  <div className="col-auto pr-0">
                    <img
                      src="images/thermo-color.png"
                      width="240"
                      height="150"
                      alt=""
                    />
                  </div>
                  <div className="col">
                    <p>
                      Emberline Studios is a productive and resourceful team.
                      They developed 3D models and 3D renderings for my
                      proposals. They understand Styrofoam material as well as
                      Styrofoam props and decorative products which Thermocut
                      makes. I am satisfied with their work and also suggest
                      others to work with them. Best of luck to them.
                    </p>
                    <p>
                      <strong>Ahyan, Director Operations, at Thermocut</strong>
                    </p>
                  </div>
                </div>
                <div className="row happyCL">
                  <div className="col-auto pr-0">
                    <img
                      src="images/jojo-color.png"
                      width="240"
                      height="150"
                      alt=""
                    />
                  </div>
                  <div className="col">
                    <p>
                      This agency has a smooth work pipeline and my experience
                      working with them has been great. They have designed and
                      executed numerous retail kiosks and carts for us. I am
                      pleased to have this team on board and would surely
                      recommend others to work with them.
                    </p>
                    <p>
                      <strong>Farooq, Manager Marketing, at JOJO Foods</strong>
                    </p>
                  </div>
                </div>
                <div className="row happyCL">
                  <div className="col-auto pr-0">
                    <img
                      src="images/adventure-color.png"
                      width="240"
                      height="150"
                      alt=""
                    />
                  </div>
                  <div className="col">
                    <p>
                      This team did an amazing job with the design of Adventure
                      Planet. I am happy with the decision of hiring the best
                      professional team for interior design of one of the
                      largest indoor playland. Results are splendid, kids love
                      coming to Adventure Planet. Will definitely use them again
                      for their services.
                    </p>
                    <p>
                      <strong>
                        Adil Butt, Chief Executive Office, at Adventure Planet
                      </strong>
                    </p>
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
export default AboutPage;
