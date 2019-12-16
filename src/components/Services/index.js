import React, { Component } from 'react'
export default class Services extends Component {
   
    render() {
        return (
            <div>
                <div className="ES-section about subpage">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1 className="text-uppercase">Our Services</h1>
                                <p className="mb-0">We provide our clients a full range of design services with a promise of excellence and ingenuity.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ES-section _Projects pt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 _service js-tilt">
                                <a href="amusement-fun.html">
                                    <figure>
                                        <img src="images/amusement.png" alt=""/>
                                        <h2>Amusement & Fun</h2>
                                        <div className="_button-arrow">
                                            <p>More Info</p>
                                            <span className="arrow"></span>
                                        </div>
                                    </figure>
                                </a>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 _service js-tilt">
                                <a href="architecture.html">
                                    <figure>
                                        <img src="images/architecture.png" alt=""/>
                                        <h2>Architecture & Interiors</h2>
                                        <div className="_button-arrow">
                                            <p>More Info</p>
                                            <span className="arrow"></span>
                                        </div>
                                    </figure>
                                </a>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 _service js-tilt">
                                <a href="ui-ux.html">
                                    <figure>
                                        <img src="images/ui.png" alt=""/>
                                        <h2>UI/UX</h2>
                                        <div className="_button-arrow">
                                            <p>More Info</p>
                                            <span className="arrow"></span>
                                        </div>
                                    </figure>
                                </a>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 _service js-tilt">
                                <a href="graphic.html">
                                    <figure>
                                        <img src="images/graphics.png" alt=""/>
                                        <h2>Branding & Graphics</h2>
                                        <div className="_button-arrow">
                                            <p>More Info</p>
                                            <span className="arrow"></span>
                                        </div>
                                    </figure>
                                </a>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 _service js-tilt">
                                <a href="kiosks-exhibitions.html">
                                    <figure>
                                        <img src="images/kiosks.png" alt=""/>
                                        <h2>Kiosks & Exhibitions</h2>
                                        <div className="_button-arrow">
                                            <p>More Info</p>
                                            <span className="arrow"></span>
                                        </div>
                                    </figure>
                                </a>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 _service js-tilt">
                                <a href="3d-animation.html">
                                    <figure>
                                        <img src="images/3danimation.png" alt="Amusement Design" />
                                        <h2>3D & Animation</h2>
                                        <div className="_button-arrow">
                                            <p>More Info</p>
                                            <span className="arrow"></span>
                                        </div>
                                    </figure>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
   }
}