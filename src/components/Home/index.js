import React, { Component } from 'react'
import ESHeader from '../ESHeader'
import OwlCarousel from 'react-owl-carousel';


import Script from 'react-load-script'
export default class Home extends Component {
    constructor() {
        super()
       
    }
    
    componentDidLoad() {
        
    }
    componentDidMount () {
        
    }
    componentWillUnmount() {
        
    }
    render() {
        let responsiveOwl = {
            320: {
                items: 1
            },
            640: {
                items: 1
            },
            768: {
                items: 2
            },
            800: {
                items: 2
            },
            992: {
                items: 3
            }
        };
        return (
            <div>
                <ESHeader/>
                <div className="ES-section about">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1>ABOUT US</h1>
                                <p>The chronicle of Emberline is a story of three inventors who wanted to serve people and make their lives easier. Fueled by a single dream, these fellow men started working together which did the magic and they were able to put a smile on every face they worked with.</p>
                                <a className="button" href="#">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ES-section P767">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1>OUR SERVICES</h1>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 _service js-tilt">
                                        <a href="#">
                                            <figure> 
                                                <img src="images/amusement.png" alt="" />
                                                <h2>Amusement & Fun</h2>
                                                <div className="_button-arrow">
                                                    <p>More Info</p>
                                                    <span className="arrow"></span>
                                                </div>
                                            </figure>
                                        </a>
                                    </div>
    
                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 _service js-tilt">
                                        <a href="#">
                                            <figure>
                                                <img src="images/architecture.png" alt="" />
                                                <h2>Architecture & Interiors</h2>
                                                <div className="_button-arrow">
                                                    <p>More Info</p>
                                                    <span className="arrow"></span>
                                                </div>
                                            </figure>
                                        </a>
                                    </div>
    
                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 _service js-tilt">
                                        <a href="#">
                                            <figure>
                                                <img src="images/ui.png" alt="" />
                                                <h2>UI/UX</h2>
                                                <div className="_button-arrow">
                                                    <p>More Info</p>
                                                    <span className="arrow"></span>
                                                </div>
                                            </figure>
                                        </a>
                                    </div>
    
                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 _service js-tilt">
                                        <a href="#">
                                            <figure>
                                                <img src="images/graphics.png" alt="" />
                                                <h2>Graphics & Branding</h2>
                                                <div className="_button-arrow">
                                                    <p>More Info</p>
                                                    <span className="arrow"></span>
                                                </div>
                                            </figure>
                                        </a>
                                    </div>
    
                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 _service js-tilt">
                                        <a href="#">
                                            <figure>
                                                <img src="images/kiosks.png" alt="" />
                                                <h2>Kiosks & Exhibitions</h2>
                                                <div className="_button-arrow">
                                                    <p>More Info</p>
                                                    <span className="arrow"></span>
                                                </div>
                                            </figure>
                                        </a>
                                    </div>
    
                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 _service js-tilt">
                                        <a href="#">
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
                </div>
                <div className="ES-section _Projects">
                    <div className="container _pro-BG">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1>FEATURED PROJECTS</h1>
                                <OwlCarousel 
                                    className="owl-theme"
                                    loop
                                    margin={10}
                                    nav
                                    autoplay
                                    autoplayTimeout="9000"
                                    autoplayHoverPause
                                    smartSpeed="2000"
                                    responsive={responsiveOwl}
                                >
                                    <div className="item">
                                        <div className="projektDiv js-tilt">
                                            <a href="#">
                                                <div className="p-content">
                                                    <h2>Adventure World</h2>
                                                    <span>Architecture, Amusement, Interior, Graphics</span> </div>
                                                <img src="images/adventure-world.jpg" alt="" /> </a>
                                        </div>
                                    </div>
    
                                    <div className="item">
                                        <div className="projektDiv js-tilt">
                                            <a href="#">
                                                <div className="p-content">
                                                    <h2>Doob Brand Activation</h2>
                                                    <span>3D, Branding, Graphics</span> </div>
                                                <img src="images/doob.jpg" alt="" /> </a>
                                        </div>
                                    </div>
    
                                    <div className="item">
                                        <div className="projektDiv js-tilt">
                                            <a href="#">
                                                <div className="p-content">
                                                    <h2>Goody Kitchen</h2>
                                                    <span>Kiosks, Graphics</span> </div>
                                                <img src="images/goody-kitchen.jpg" alt="" /> </a>
                                        </div>
                                    </div>
    
                                    <div className="item">
                                        <div className="projektDiv js-tilt">
                                            <a href="#">
                                                <div className="p-content">
                                                    <h2>NIC Lahore</h2>
                                                    <span>Interior, Graphics</span> </div>
                                                <img src="images/nic.jpg" alt="" /> </a>
                                        </div>
                                    </div>
    
                                    <div className="item">
                                        <div className="projektDiv js-tilt">
                                            <a href="#">
                                                <div className="p-content">
                                                    <h2>Popas Candy Planet</h2>
                                                    <span>Interior, Graphics</span> </div>
                                                <img src="images/popas-planet.jpg" alt="" /> </a>
                                        </div>
                                    </div>
    
                                    <div className="item">
                                        <div className="projektDiv js-tilt">
                                            <a href="#">
                                                <div className="p-content">
                                                    <h2>Prince Hair Saloon</h2>
                                                    <span>Architecture, Interiors</span> </div>
                                                <img src="images/prince.jpg" alt="" /> </a>
                                        </div>
                                    </div>
    
                                    <div className="item">
                                        <div className="projektDiv js-tilt">
                                            <a href="#">
                                                <div className="p-content">
                                                    <h2>YOYO Land</h2>
                                                    <span>Architecture, Amusement, Interior, Graphics</span> </div>
                                                <img src="images/yoyoland.jpg" alt="" /> </a>
                                        </div>
                                    </div>

                                </OwlCarousel>
    
                                <a className="button" href="#">Learn More</a>
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
                                        <div className="col-lg-2 col-md-4 col-6"><img src="images/thermo-color.png" alt="" /></div>
                                        <div className="col-lg-2 col-md-4 col-6"><img src="images/jojo-color.png" alt="" /></div>
                                        <div className="col-lg-2 col-md-4 col-6"><img src="images/adventure-color.png" alt="" /></div>
                                        <div className="col-lg-2 col-md-4 col-6"><img src="images/yoyo-color.png" alt="" /></div>
                                        <div className="col-lg-2 col-md-4 col-6"><img src="images/jazzi-color.png" alt="" /></div>
                                        <div className="col-lg-2 col-md-4 col-6"><img src="images/fg-color.png" alt="" /></div>
                                        <div className="col-lg-2 col-md-4 col-6"><img src="images/nic-color.png" alt="" /></div>
                                        <div className="col-lg-2 col-md-4 col-6"><img src="images/prince-color.png" alt="" /></div>
                                        <div className="col-lg-2 col-md-4 col-6"><img src="images/usman-color.png" alt="" /></div>
                                        <div className="col-lg-2 col-md-4 col-6"><img src="images/dha-color.png" alt="" /></div>
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