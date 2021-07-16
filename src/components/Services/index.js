import React, { Component } from 'react'
import { NavLink }  from 'react-router-dom'
import Tilt from 'react-tilt'

export default class Services extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        let tiltOptions = {
            max: 20,
            perspective: 1000,
            easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
            scale: 1, // 2 = 200%, 1.5 = 150%, etc..
            speed: 250, // Speed of the enter/exit transition.
            transition: true,
        };
        return (
            <div>
                <div className="ES-section subpage">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1 className="text-uppercase">Our Services</h1>
                                <p className="mb-0">We are a team, of multi-talented designers, with a passion for creativity and good design. We facilitate companies with our extensive range of design services including architecture & interiors, amusement park designs, retail kiosks & exhibitions, branding & graphics, UI/UX of digital products, 3D integrated designs and animations.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ES-section _Projects pt-0">
                    <div className="container">
                        <div className="row">
                            <Tilt options={tiltOptions} className="col-xs-12 col-sm-6 col-md-6 col-lg-4 _service js-tilt">
                                <NavLink to="/service/amusement">
                                    <figure> 
                                        <img src="images/amusement.png" alt="" className="card-image"/>
                                        <figcaption>    
                                        <h2>Amusement & Fun</h2>
                                        <div className="_button-arrow">
                                            <p>More Info</p>
                                            <span className="arrow"></span>
                                        </div>
                                    </figcaption>
                                    </figure>
                                </NavLink>
                            </Tilt >

                            <Tilt options={tiltOptions} className="col-xs-12 col-sm-6 col-md-6 col-lg-4 _service js-tilt">
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
                            </Tilt>

                            <Tilt options={tiltOptions} className="col-xs-12 col-sm-6 col-md-6 col-lg-4 _service js-tilt">
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
                            </Tilt>

                            <Tilt options={tiltOptions} className="col-xs-12 col-sm-6 col-md-6 col-lg-4 _service js-tilt">
                                <NavLink to="/service/graphic">
                                    <figure>
                                        <img src="images/branding.png" alt=""/>
                                        <h2>Branding & Strategy</h2>
                                        <div className="_button-arrow">
                                            <p>More Info</p>
                                            <span className="arrow"></span>
                                        </div>
                                    </figure>
                                </NavLink>
                            </Tilt>

                            <Tilt options={tiltOptions} className="col-xs-12 col-sm-6 col-md-6 col-lg-4 _service js-tilt">
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
                            </Tilt>

                            <Tilt options={tiltOptions} className="col-xs-12 col-sm-6 col-md-6 col-lg-4 _service js-tilt">
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
                            </Tilt>

                            <Tilt options={tiltOptions} className="col-xs-12 col-sm-6 col-md-6 col-lg-4 _service js-tilt">
                                <NavLink to="/ecommerce-solution">
                                    <figure>
                                        <img src="images/ECommerce.png" alt="Amusement Design" />
                                        <h2>E-commerce Solution</h2>
                                        <div className="_button-arrow">
                                            <p>More Info</p>
                                            <span className="arrow"></span>
                                        </div>
                                    </figure>
                                </NavLink>
                            </Tilt>

                        </div>
                    </div>
                </div>
            </div>
        )
   }
}
