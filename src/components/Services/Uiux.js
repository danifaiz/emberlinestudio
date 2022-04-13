import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Header from "../Header";
export default class Uiux extends Component {
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
                  <img src="../images/ui-ux-subpage.png" alt="" />
                </div>
              </div>
              <div class="col-lg-7 col-md-6 order-md-2 order-1">
                <div class="middleDiv">
                  <div class="subH-cont">
                    <h1 class="text-uppercase">
                      USER INTERFACE &amp; EXPERIENCE DESIGN
                    </h1>
                    <p>
                      Starting with a vision for the user experience, we design
                      useful &amp; useable experiences — from e-commerce to
                      corporate websites to mobile apps, and everything in
                      between. We design &amp; develop:
                    </p>
                    <p class="mb-0">
                      <strong>
                        <span>—</span> Digital products that people love to
                        interact with
                      </strong>
                    </p>
                    <p class="mb-0">
                      <strong>
                        <span>—</span> Enterprise software &amp; business
                        solution providing useful insights
                      </strong>
                    </p>
                    <p class="mb-0">
                      <strong>
                        <span>—</span> Websites that narrate your brand’s story
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="ES-section p-0 UIUX">
          <div class="container">
            <div class="row">
              <div class="col-12 text-center mb-30">
                <h1 class="text-uppercase">let’s talk about our UX PROCESS</h1>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-6 col-md-12">
                <div class="conBox">
                  <h2 class="text-uppercase">
                    <span class="SN">01</span>DISCOVER
                  </h2>
                  <p>
                    Being a UX service provider, we dig deep to get every bit of
                    detail that will help us creating better experience.
                  </p>
                </div>
              </div>

              <div class="col-lg-6 col-md-12">
                <div class="conBox shadow R800bg">
                  <ul>
                    <li>
                      <strong>Business Vision:</strong> We start our discovery
                      with understanding the company's vision and project goals.
                    </li>
                    <li>
                      <strong>Market Competitors:</strong> We study product’s
                      feasibility along with its competitors.
                    </li>
                    <li>
                      <strong>User Behavior:</strong> Understanding user's needs
                      and their behavior is a great way to design better
                      experiences for that audience.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-6 col-md-12 order-lg-1 order-2">
                <div class="conBox shadow R800bg">
                  <ul>
                    <li>
                      <strong>Problem Statement:</strong> We extract key
                      performance indicators for the project enabling us to get
                      the problem statement.
                    </li>
                    <li>
                      <strong>Information Architecture:</strong> We focus on
                      organizing the content in such a way that it is useful and
                      guides user to accomplish a task seamlessly.
                    </li>
                    <li>
                      <strong>User Journey:</strong> In this phase we focus on
                      designing a useable experience. It enables its users to
                      perform a task in a pleasurable and simple way.
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-6 col-md-12 order-lg-2 order-1">
                <div class="conBox">
                  <h2 class="text-uppercase">
                    <span class="SN">02</span>Define
                  </h2>
                  <p>
                    After getting the business vision and studying the user
                    behavior, we draw insights from the data. It enables us
                    crafting a product roadmap that solves problems.
                  </p>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-6 col-md-12">
                <div class="conBox">
                  <h2 class="text-uppercase">
                    <span class="SN">03</span>design
                  </h2>
                  <p>
                    It's all about bringing life to logic. For making the
                    product both useful and appealing, we map empathy and
                    cognitive science.
                  </p>
                </div>
              </div>

              <div class="col-lg-6 col-md-12">
                <div class="conBox shadow R800bg">
                  <ul>
                    <li>
                      <strong>Wireframes:</strong> We create lot of layouts to
                      attain a best options. These low-fidelity wireframes focus
                      on prioritization of content, functionalities and
                      behaviors.
                    </li>
                    <li>
                      <strong>Visual Design:</strong> This is the time to add
                      colors to our finalized layouts. We focus on brand
                      identity while bringing life to design by adding visually
                      appealing elements and interactions.
                    </li>
                    <li>
                      <strong>Prototyping:</strong> In this phase we test the
                      product by creating high-fidelity mockups for initial
                      feedback.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-6 col-md-12 order-lg-1 order-2">
                <div class="conBox shadow R800bg">
                  <ul>
                    <li>
                      <strong>UI Framework:</strong> For development we start by
                      choosing the right platform to make the code device
                      friendly.
                    </li>
                    <li>
                      <strong>Interactions:</strong> Micro-interactions are
                      coded to engage our target audience in a more creative
                      way.
                    </li>
                    <li>
                      <strong>Testing:</strong> After getting the desired
                      results, we test our code and make sure it is responsive
                      and working without any hindrance.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 order-lg-2 order-1">
                <div class="conBox">
                  <h2 class="text-uppercase">
                    <span class="SN">04</span>Develop
                  </h2>
                  <p>
                    After finalizing the design mockups, we give life to designs
                    and make them a reality.
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 text-center mt-50">
                <NavLink class="button" to="/projects">
                  SEE PROJECTS
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
