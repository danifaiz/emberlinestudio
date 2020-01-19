import React, { Component } from 'react'
import { NavLink }  from 'react-router-dom'
export default class Services extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
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
                                <NavLink to="/service/amusement">
                                    <figure>
                                        <img src="images/amusement.png" alt=""/>
                                        <h2>Amusement & Fun</h2>
                                        <div className="_button-arrow">
                                            <p>More Info</p>
                                            <span className="arrow"></span>
                                        </div>
                                    </figure>
                                </NavLink>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 _service js-tilt">
                                <NavLink to="/service/architecture">
                                    <figure>
                                        <img src="images/architecture.png" alt=""/>
                                        <h2>Architecture & Interiors</h2>
                                        <div className="_button-arrow">
                                            <p>More Info</p>
                                            <span className="arrow"></span>
                                        </div>
                                    </figure>
                                </NavLink>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 _service js-tilt">
                                <NavLink to="/service/uiux">
                                    <figure>
                                        <img src="images/ui.png" alt=""/>
                                        <h2>UI/UX</h2>
                                        <div className="_button-arrow">
                                            <p>More Info</p>
                                            <span className="arrow"></span>
                                        </div>
                                    </figure>
                                </NavLink>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 _service js-tilt">
                                <NavLink to="/service/graphic">
                                    <figure>
                                        <img src="images/graphics.png" alt=""/>
                                        <h2>Branding & Graphics</h2>
                                        <div className="_button-arrow">
                                            <p>More Info</p>
                                            <span className="arrow"></span>
                                        </div>
                                    </figure>
                                </NavLink>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 _service js-tilt">
                                <NavLink to="/service/kiosks">
                                    <figure>
                                        <img src="images/kiosks.png" alt=""/>
                                        <h2>Kiosks & Exhibitions</h2>
                                        <div className="_button-arrow">
                                            <p>More Info</p>
                                            <span className="arrow"></span>
                                        </div>
                                    </figure>
                                </NavLink>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 _service js-tilt">
                                <NavLink to="/service/animation">
                                    <figure>
                                        <img src="images/3danimation.png" alt="Amusement Design" />
                                        <h2>3D & Animation</h2>
                                        <div className="_button-arrow">
                                            <p>More Info</p>
                                            <span className="arrow"></span>
                                        </div>
                                    </figure>
                                </NavLink>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
   }
}