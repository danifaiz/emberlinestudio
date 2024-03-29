import React, { Component }  from 'react'
import { NavLink }  from 'react-router-dom'
import {withRouter} from 'react-router-dom';

class Footer extends Component {
    
    render() {
        const year = new Date().getFullYear()
        let currentPath = this.props.location.pathname
        let contactUsSect
        if(currentPath !== "/contact") {
            contactUsSect = <ContactUs />
        } else {
            contactUsSect = ""
        }
        return (
            <div>
                {contactUsSect}
                <>
                    <div className="connect-us pb-30">
                        <div className="container">
                            <div className="row">
                            <div className="col-md-12 eb-footer"> <img className="_Footer-Logo" src="images/emberline-studios.svg" alt="" /> <a className="f_email" href="mailto:hello@emberlinestudios.com">hello@emberlinestudios.com</a>
                                <h3>YOUR SKYWARD<br />
                                COMPANION</h3>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="copy-right">
                        <div className="container">
                            <div className="row">
                            <div className="col-12">
                                <div className="social-icon"> <a href="https://www.facebook.com/emberlinestudios" rel="noopener" target="_blank">
                                <svg aria-hidden="true" height="28px" focusable="false" data-prefix="fab" data-icon="facebook-f" className="svg-inline--fa fa-facebook-f fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                                </svg>
                                </a> <a href="https://www.behance.net/emberlinestudios" rel="noopener" target="_blank">
                                <svg aria-hidden="true" height="28px" focusable="false" data-prefix="fab" data-icon="behance" className="svg-inline--fa fa-behance fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                    <path fill="currentColor" d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2.6-8.7.6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"></path>
                                </svg>
                                </a> 
                                <a href="https://www.linkedin.com/company/emberline-studios" rel="noopener" target="_blank"><svg aria-hidden="true" height="28px" focusable="false" data-prefix="fab" data-icon="linkedin-in" className="svg-inline--fa fa-linkedin-in fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg></a>
                                <a href="https://www.instagram.com/emberline_studios" rel="noopener" target="_blank">
                                <svg aria-hidden="true" height="28px" focusable="false" data-prefix="fab" data-icon="instagram" className="svg-inline--fa fa-instagram fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                </svg>
                                </a></div>
                                <p className="mb-0">Copyright © {year} Emberline Studios® - A Design Agency</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </>
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
