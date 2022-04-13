import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Header from "../Header";
export default class Architecture extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Header />
        <div class="ES-section about subpage smPadd">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-5 col-md-6 order-md-1 order-2">
                <div class="subH-img">
                  <img src="../images/architecture-subpage.png" alt="" />
                </div>
              </div>
              <div class="col-lg-7 col-md-6 order-md-2 order-1">
                <div class="middleDiv">
                  <div class="subH-cont">
                    <h1 class="text-uppercase">Architecture & Interiors</h1>
                    <p class="mb-0">
                      “To create, one must first question everything.” – Eileen
                      Gray When it comes to spaces, every experience count. We
                      work towards making these spaces part of you and turning
                      your experiences into memories. We leave no stone unturned
                      in our pursuit for the best design for your home or your
                      business place.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="ES-section p-0">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-12">
                <div class="conBox W800bg">
                  <h2 class="text-uppercase">
                    Residential & Commercial Architecture
                  </h2>
                  <p class="mb-20">
                    We love to design homes for people. With focus on ergonomics
                    and living standards, our aim has always been to design
                    spaces which become a part of you. Our efforts seek to
                    reflect our client’s thinking, character and aura in our
                    design. We believe space design can enhance or diminishp
                    roductivity which can affect your business. Hence our
                    disposition for commercial architecture is always serious
                    and resolute.
                  </p>
                </div>
              </div>

              <div class="col-lg-6 col-md-12">
                <div class="conBox shadow R800bg">
                  <h2 class="text-uppercase">Landscape Architecture</h2>
                  <p class="mb-20">
                    We love to design homes for people. With focus on ergonomics
                    and living standards, our aim has always been to design
                    spaces which become a part of you. Our efforts seek to
                    reflect our client’s thinking, character and aura in our
                    design.
                  </p>
                  <p>
                    We believe space design can enhance or diminishp roductivity
                    which can affect your business. Hence our disposition for
                    commercial architecture is always serious and resolute.
                  </p>
                </div>
              </div>

              <div class="col-lg-6 col-md-12">
                <div class="conBox shadow W800bg">
                  <h2 class="text-uppercase">INTERIORS</h2>
                  <p>
                    Our philosophy is when you interact with an interior space,
                    it should reply. Keeping this thought as a starting point,
                    we try our best to deliver interior designs which involve
                    all your senses. We select, carefully, furniture, wall
                    finishes and décor items for your sense of touch, colors and
                    lights for your eyes and make an ambiance suited for your
                    persona.
                  </p>
                </div>
              </div>

              <div class="col-lg-6 col-md-12">
                <div class="conBox R800bg">
                  <h2 class="text-uppercase">Art Installations</h2>
                  <p>
                    Roundabouts have always attracted artists, designers and
                    architects to perform wonders in their field. We offer a
                    turn key solution for art installations starting from the
                    idea itself, material selection, 3D visualization,
                    manufacturing files and its execution.
                  </p>
                </div>
              </div>

              <div class="col-lg-6 col-md-12">
                <div class="conBox W800bg">
                  <h2 class="text-uppercase">Architectural Visualization</h2>
                  <p>
                    We furnish Hi-definition 3D renders and animations for
                    architectural work and for our clients who want to make TV
                    commercials, social media footage for their housing
                    societies or commercial plazas etc.
                  </p>
                </div>
              </div>

              <div class="col-lg-6 col-md-12">
                <div class="conBox shadow R800bg">
                  <h2 class="text-uppercase">VISUAL Merchandising</h2>
                  <p>
                    We provide a well-designed showcase of your retail shop in
                    3D form that would upgrade your façade and increase your
                    sales
                  </p>
                </div>
              </div>

              <div class="col-md-12 text-center mt-50">
                <NavLink class="button" to="/projects">
                  SEE PROJECTS
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div class="ES-section about pb-0">
          <div class="container">
            <div class="row">
              <div class="col-12 text-center">
                <h1 class="text-uppercase">how we do</h1>
              </div>

              <div class="col-lg-6 col-md-12">
                <div class="conBox">
                  <h2 class="text-uppercase">
                    <span class="SN">01</span>Client brief
                  </h2>
                  <p>
                    It starts off with what the client needs and wants. We talk
                    about the project over coffee table and share ideas. Details
                    are shared over a couple of meetings prior to the
                    commencement of work and we discuss finances.
                  </p>
                </div>
              </div>

              <div class="col-lg-6 col-md-12">
                <div class="conBox">
                  <h2 class="text-uppercase">
                    <span class="SN">02</span>research
                  </h2>
                  <p>
                    We kick off the project by visiting the site with our
                    client, why he chose this location and what vision does he
                    has for his project. We perform analysis in depth of the
                    location and its surroundings such as sun path, climate,
                    wind etc. fter getting the business vision and studying the
                    user behavior, we draw insights from the data. It enables us
                    crafting a product roadmap that solves problems.
                  </p>
                </div>
              </div>

              <div class="col-lg-6 col-md-12">
                <div class="conBox">
                  <h2 class="text-uppercase">
                    <span class="SN">03</span>brainstorming
                  </h2>
                  <p>
                    We put all of our ideas on a piece of paper and start
                    connecting them with the project brief. Keeping in mind what
                    the client needs and that how can we consult him to achieve
                    the best in the budget constraints
                  </p>
                </div>
              </div>

              <div class="col-lg-6 col-md-12">
                <div class="conBox">
                  <h2 class="text-uppercase">
                    <span class="SN">04</span>theme & mood board
                  </h2>
                  <p>
                    We compile all our ideas in a mood-board and discuss it with
                    client and let him know our direction. The mode of
                    architecture, interior and landscape.
                  </p>
                </div>
              </div>

              <div class="col-lg-6 col-md-12">
                <div class="conBox">
                  <h2 class="text-uppercase">
                    <span class="SN">05</span>layout & exterior
                  </h2>
                  <p>
                    The layout is planned in a detail-oriented manner. We put
                    hard work in this stage and architects give undivided
                    attention to the dynamics of the space. The façade and
                    elevations of the building is designed along with the
                    interior plan. We give freedom to our architects to display
                    their creativity and come up with unique yet useful and
                    timeless designs.
                  </p>
                </div>
              </div>

              <div class="col-lg-6 col-md-12">
                <div class="conBox">
                  <h2 class="text-uppercase">
                    <span class="SN">06</span>construction details
                  </h2>
                  <p>
                    We provide a complete set of services which enable the
                    contractor to build. Starting off from architectural
                    drawings, we along with our partners, provide you MEP
                    drawings, BOQs and support the contractor with regular site
                    visits and manufacture liaison.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
