import React, { Component } from 'react'
import loadjs from 'loadjs'
import $ from 'jquery'
import Isotope from "isotope-layout/js/isotope";
export default class Projects extends Component {
  onFilterChange = (newFilter) => {
    if (this.iso === undefined) {
      this.iso = new Isotope('.grid', {
        itemSelector: '.all',
        layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
            columnWidth: ".all"
        }
      });
    }
    if(newFilter === '*') {
      this.iso.arrange({ filter: `*` });
    } else {
      this.iso.arrange({ filter: `.${newFilter}` });
    }
  }
    static initializeIsotopes() {
        $('.filters ul li').click(function() {
            $('.filters ul li').removeClass('active');
            $(this).addClass('active');
          });
    }
    componentDidMount() {
        Projects.initializeIsotopes()
    }
    render() {
        return (
            <div>
                <div className="ES-section about subpage">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1 className="text-uppercase">Current projects</h1>
                                <p className="mb-0">We provide our clients a full range of design services with a promise of excellence and ingenuity.</p>
                            </div>
                        </div>
                    </div>
                </div>
              <div className="ES-section _Projects pt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 _Proj-filter-act filters">
                                <ul>
                                    <li className="active" data-filter="*" onClick={() => {this.onFilterChange("*")}}><a className="button">All</a></li>
                                    <li data-filter=".amusement"><a className="button" onClick={() => {this.onFilterChange("amusement")}}>AMUSEMENt</a></li>
                                    <li data-filter=".graphics"><a className="button" onClick={() => {this.onFilterChange("graphics")}}>GRAPHICS</a></li>
                                    <li data-filter=".architecture"><a className="button" onClick={() => {this.onFilterChange("architecture")}}>ARCHITECTURE</a></li>
                                    <li data-filter="interiors"><a className="button" onClick={() => {this.onFilterChange("interiors")}}>Interiors</a></li>
                                    <li data-filter=".branding"><a className="button" onClick={() => {this.onFilterChange("branding")}}>BRANDING</a></li>
                                    <li data-filter=".kiosks"><a className="button" onClick={() => {this.onFilterChange("kiosks")}}>kiosks</a></li>
                                    <li data-filter=".uiux"><a className="button" onClick={() => {this.onFilterChange("uiux")}}>UI/UX</a></li>
                                    <li data-filter="3d"><a className="button" onClick={() => {this.onFilterChange("3d")}}>3D</a></li>
                                    <li data-filter="animation"><a className="button" onClick={() => {this.onFilterChange("animation")}}>Animation</a></li>
                                    <li data-filter="vm"><a className="button" onClick={() => {this.onFilterChange("vm")}}>VM</a></li>
                                </ul>
                            </div>

                            <div className="col-12 filters-content">
                                <div className="row grid">

                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 all architecture amusement interiors graphics ">
                                        <a href="project-detail.html">
                                            <div className="project-thumb">
                                                <div className="projektDiv js-tilt">
                                                    <div className="p-content">
                                                        <h2>Adventure Land</h2>
                                                        <span>Architecture, Amusement, Interiors, Graphics</span> </div>
                                                    <img src="images/adventure-world.jpg" alt="" /> </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 all graphics interiors">
                                        <a href="project-detail.html">
                                            <div className="project-thumb">
                                                <div className="projektDiv js-tilt">
                                                    <div className="p-content">
                                                        <h2>NIC Lahore</h2>
                                                        <span>Interiors, Graphics</span> </div>
                                                    <img src="images/nic.jpg" alt="" /> </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 all graphics interiors">
                                        <a href="project-detail.html">
                                            <div className="project-thumb">
                                                <div className="projektDiv js-tilt">
                                                    <div className="p-content">
                                                        <h2>Winter Wonderland</h2>
                                                        <span>Interiors, Graphics</span> </div>
                                                    <img src="images/winter-wonderland.jpg" alt="" /> </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 all architecture interiors">
                                        <a href="project-detail.html">
                                            <div className="project-thumb">
                                                <div className="projektDiv js-tilt">
                                                    <div className="p-content">
                                                        <h2>Prince Hair Saloon</h2>
                                                        <span>Architecture, Interiors</span> </div>
                                                    <img src="images/prince.jpg" alt="" /> </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 all graphic interiors">
                                        <a href="project-detail.html">
                                            <div className="project-thumb">
                                                <div className="projektDiv js-tilt">
                                                    <div className="p-content">
                                                        <h2>Jojo Popas Planet</h2>
                                                        <span>Interiors, Graphics</span> </div>
                                                    <img src="images/jojo-popas-candy.jpg" alt="" /> </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 all graphics kiosks">
                                        <a href="project-detail.html">
                                            <div className="project-thumb">
                                                <div className="projektDiv js-tilt">
                                                    <div className="p-content">
                                                        <h2>Goody Kitchen</h2>
                                                        <span>Kiosks, Graphics</span> </div>
                                                    <img src="images/goody-kitchen.jpg" alt="" /> </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 all branding graphics">
                                        <a href="project-detail.html">
                                            <div className="project-thumb">
                                                <div className="projektDiv js-tilt">
                                                    <div className="p-content">
                                                        <h2>THROW</h2>
                                                        <span>Branding, Graphics</span> </div>
                                                    <img src="images/training-future.jpg" alt="" /> </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 all kiosks graphics">
                                        <a href="project-detail.html">
                                            <div className="project-thumb">
                                                <div className="projektDiv js-tilt">
                                                    <div className="p-content">
                                                        <h2>Jojo Candy Van</h2>
                                                        <span>Kiosks, Graphics</span> </div>
                                                    <img src="images/jojo-candy-van.jpg" alt="" /> </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 all kiosks graphics">
                                        <a href="project-detail.html">
                                            <div className="project-thumb">
                                                <div className="projektDiv js-tilt">
                                                    <div className="p-content">
                                                        <h2>Jojo Safari Van</h2>
                                                        <span>Kiosks, Graphics</span> </div>
                                                    <img src="images/jojo-safari-van.jpg" alt="" /> </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 all architecture amusement interiors graphics">
                                        <a href="project-detail.html">
                                            <div className="project-thumb">
                                                <div className="projektDiv js-tilt">
                                                    <div className="p-content">
                                                        <h2>YOYO Land</h2>
                                                        <span>Architecture, Amusement, Interiors, Graphics</span> </div>
                                                    <img src="images/jojo-land.jpg" alt="" /> </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 all architecture amusement interiors graphics">
                                        <a href="project-detail.html">
                                            <div className="project-thumb">
                                                <div className="projektDiv js-tilt">
                                                    <div className="p-content">
                                                        <h2>Ice Rink</h2>
                                                        <span>Architecture, Amusement, Interiors, Graphics</span> </div>
                                                    <img src="images/ice-rank.jpg" alt="" /> </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 all branding graphics">
                                        <a href="project-detail.html">
                                            <div className="project-thumb">
                                                <div className="projektDiv js-tilt">
                                                    <div className="p-content">
                                                        <h2>Lime Spark</h2>
                                                        <span>Branding, Graphics</span> </div>
                                                    <img src="images/lime-spark.jpg" alt="" /> </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 all interiors graphics">
                                        <a href="project-detail.html">
                                            <div className="project-thumb">
                                                <div className="projektDiv js-tilt">
                                                    <div className="p-content">
                                                        <h2>Jojo Candy Shop</h2>
                                                        <span>Interiors, Graphics</span> </div>
                                                    <img src="images/jojo-candy-shop.jpg" alt="" /> </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 all kiosks graphics">
                                        <a href="project-detail.html">
                                            <div className="project-thumb">
                                                <div className="projektDiv js-tilt">
                                                    <div className="p-content">
                                                        <h2>Usman Baig Fragrances</h2>
                                                        <span>Kiosks, Graphics</span> </div>
                                                    <img src="images/usman-baig.jpg" alt="" /> </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 all uiux branding">
                                        <a href="project-detail.html">
                                            <div className="project-thumb">
                                                <div className="projektDiv js-tilt">
                                                    <div className="p-content">
                                                        <h2>Help For Your Home</h2>
                                                        <span>UI/UX, Branding</span> </div>
                                                    <img src="images/help-for-home.jpg" alt="" /> </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 all architecture 3d animation">
                                        <a href="project-detail.html">
                                            <div className="project-thumb">
                                                <div className="projektDiv js-tilt">
                                                    <div className="p-content">
                                                        <h2>Feathers</h2>
                                                        <span>Architecture, 3D, Animation</span> </div>
                                                    <img src="images/feathers.jpg" alt="" /> </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 all architecture 3D">
                                        <a href="project-detail.html">
                                            <div className="project-thumb">
                                                <div className="projektDiv js-tilt">
                                                    <div className="p-content">
                                                        <h2>Educational Sector</h2>
                                                        <span>Architecture, 3D</span> </div>
                                                    <img src="images/educational-sector.jpg" alt="" /> </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 all 3d interiors vm">
                                        <a href="project-detail.html">
                                            <div className="project-thumb">
                                                <div className="projektDiv js-tilt">
                                                    <div className="p-content">
                                                        <h2>Visual Merchandising</h2>
                                                        <span>3D, Interiors, VM</span> </div>
                                                    <img src="images/visual-merchandising.jpg" alt="" /> </div>
                                            </div>
                                        </a>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}