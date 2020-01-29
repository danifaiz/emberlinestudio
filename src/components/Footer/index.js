import React, { Component }  from 'react'
import { NavLink }  from 'react-router-dom'
import {withRouter} from 'react-router-dom';

class Footer extends Component {
    
    render() {
        let currentPath = this.props.location.pathname
        let contactUsSect
        if(currentPath != "/contact") {
            contactUsSect = <ContactUs />
        } else {
            contactUsSect = ""
        }
        return (
            <div>
                {contactUsSect}
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <NavLink className="col-md-4" to="/">
                                <img className="_FLogo" src="images/emberline-studios.svg" alt="" /> </NavLink>
                            <div className="col-md-4 text-center">
                                <span className="_ph">+92 333 477 89 77</span>
                                <a className="_email" href="mailto:hello@emberlinestudios.com">hello@emberlinestudios.com</a>
                            </div>
                            <div className="col-md-4">
                                <h3>YOUR SKYWARD<br />COMPANION</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy-right">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="social-icon">
                                    <a href="https://www.facebook.com/emberlinestudios" target="_blank"><i className="fa fa-facebook" title="Facebook"></i></a>
                                    <a href="https://www.behance.net/emberlinestudios" target="_blank"><i className="fa fa-behance" title="Behance"></i></a>
                                    <a href="https://www.linkedin.com/company/emberline-studios" target="_blank"><i className="fa fa-linkedin" title="Linkedin"></i></a>
                                    <a href="https://www.instagram.com/emberline_studios" target="_blank"><i className="fa fa-instagram" title="Instagram"></i></a>
                                </div>
                                <p className="mb-0">Copyright © 2019 Emberline Studios® - a design agency</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function ContactUs() {
    return (
        <div>
            <div className="ES-section about">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className="text-uppercase">lets work together</h1>
                            <p>Not sure where to start? We are here for you. Let’s team up to create positive impact in your business starting with your free consultation.</p>
                            <NavLink className="button" to="/contact">CONTACT US</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Footer)
