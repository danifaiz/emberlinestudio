import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar';
import $ from 'jquery'
export default class Header extends Component {
    state = {
        loadingBarProgress: 0
      };
      complete = () => {
        this.setState({ loadingBarProgress: 100 });
      };
      onLoaderFinished = () => {
        this.setState({ loadingBarProgress: 0 });
      };
    componentDidMount () {
        this.complete()
        Header.loadScripts();
    }
    static loadScripts() {
        $('.switchMenu').click(function() {
            $("#_menu").toggleClass('active');
            $('#es_menu').toggleClass('open');
            $("#_menu").toggleClass('menu-open').toggleClass('menu-close');
            $('body').toggleClass('no-scroll')
            $("html, body").animate({ scrollTop: 0 }, "slow");
        });
    }
    render() {
        return (
            <div id="topHeader" className="topheader">
                <LoadingBar
                    progress={this.state.loadingBarProgress}
                    height={2}
                    color='red'
                    onLoaderFinished={() => this.onLoaderFinished()}
                 />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">

                            <div className="EmberlineStudios">
                                <a href="/">
                                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 263.21 205" style={{enableBackground:'new 0 0 263.21 205'}}>
                                        <g id="ESlogo">
                                            <g>
                                                <path className="st0" d="M67.41,33.75c9.04-3.5,19.22,0.87,22.91,9.84c7.25,10.4,21.56,12.95,31.96,5.7c6.86-4.78,10.58-12.92,9.7-21.24c0-3.67-2.98-6.65-6.65-6.65s-6.65,2.98-6.65,6.65c0,1.76,0.69,3.44,1.93,4.69c-6.92-6.92-6.92-18.13,0-25.04s18.13-6.92,25.04,0s6.92,18.13,0,25.04s-6.92,18.13,0,25.04s18.13,6.92,25.04,0c3.32-3.32,5.19-7.83,5.19-12.52c0-2.33,0.61-4.62,1.78-6.64c3.67-6.35,11.79-8.53,18.14-4.86c-4.5,1.85-6.69,6.97-4.93,11.5c8.06,17.36,28.66,24.89,46.01,16.83s24.89-28.66,16.83-46.01c-0.12-0.25-0.24-0.5-0.36-0.75c12.99,27.87,6.53,60.94-16.01,81.85c-6.7-15.75-24.9-23.09-40.65-16.39c-6.76,2.87-12.27,8.06-15.57,14.62c-3.54,7.06-0.69,15.65,6.37,19.19c1.72,0.86,3.6,1.37,5.53,1.49c-11.2,0.13-22.28-2.4-32.32-7.38c7.2-1.4,11.9-8.38,10.5-15.58c-1.4-7.2-8.38-11.9-15.58-10.5c-6.24,1.22-10.74,6.68-10.74,13.04c0,7.05,2.8,13.8,7.78,18.78c6.64,6.64,10.37,15.65,10.37,25.04c0-7.34-5.95-13.28-13.28-13.28s-13.28,5.95-13.28,13.28c0,7.05,2.8,13.8,7.78,18.78c3.1,3.1,5.39,6.93,6.65,11.13c4.22,14.05-3.74,28.86-17.79,33.09c6.12-16.17,3.09-34.38-7.92-47.7c-11.8-15.83-13.14-37.13-3.4-54.31c4.36-6.59,2.55-15.46-4.04-19.81c-6.59-4.36-15.46-2.55-19.81,4.04c-4.36,6.59-2.55,15.46,4.04,19.81c2.09,1.38,4.5,2.19,7,2.34c-10.9,6.18-23.24,9.36-35.77,9.21c7.88-0.49,13.87-7.27,13.38-15.15c-0.12-1.92-0.63-3.8-1.49-5.53c-7.68-15.3-26.3-21.48-41.6-13.8c-7.23,3.63-12.75,9.94-15.39,17.58C3.86,78.52-3.62,44.2,9.85,15.32C1.31,32.28,8.13,52.96,25.09,61.5s37.64,1.73,46.18-15.23c0.17-0.33,0.33-0.67,0.49-1.01c2.15-3.92,0.71-8.84-3.21-10.99C68.18,34.07,67.8,33.89,67.41,33.75z" /> </g>
                                        </g>
                                    </svg>
                                </a>
                            </div>
                            <div className="TopPhone">+92 (333)462 53 11</div>

                            <nav className="navbar navbar-expand-md">
                                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                    <ul className="navbar-nav">
                                        <li className="nav-item"><NavLink className="nav-link" to="/home">HOME <span className="sr-only">(current)</span></NavLink></li>
                                        <li className="nav-item"><NavLink className="nav-link" to="/projects">PROJECTS</NavLink></li>
                                        <li className="nav-item"><NavLink className="nav-link" to="/services">SERVICES</NavLink></li>
                                        <li className="nav-item"><NavLink className="nav-link" to="/about">ABOUT US</NavLink></li>
                                        <li className="nav-item"><NavLink className="nav-link" to="/contact">CONTACT US</NavLink></li>
                                    </ul>
                                </div>
                            </nav>

                        </div>
                    </div>
                </div>

                <div className="menu_icon wow fadeInRight">
                    <a className="menu-open" id="_menu">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </a>
                </div>

                <div className="es_menu" id="es_menu">
                    <div className="container-fluid">
                        <div className="row">

                            <div className="col-lg-6 col-md-6 w-mob">
                                <div className="EmberlineStudios-m">
                                    <NavLink to="/home">
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 263.21 205" style={{enableBackground:'new 0 0 263.21 205'}}>
                                            <g id="ESlogo">
                                                <g>
                                                    <path className="st0" d="M67.41,33.75c9.04-3.5,19.22,0.87,22.91,9.84c7.25,10.4,21.56,12.95,31.96,5.7c6.86-4.78,10.58-12.92,9.7-21.24c0-3.67-2.98-6.65-6.65-6.65s-6.65,2.98-6.65,6.65c0,1.76,0.69,3.44,1.93,4.69c-6.92-6.92-6.92-18.13,0-25.04s18.13-6.92,25.04,0s6.92,18.13,0,25.04s-6.92,18.13,0,25.04s18.13,6.92,25.04,0c3.32-3.32,5.19-7.83,5.19-12.52c0-2.33,0.61-4.62,1.78-6.64c3.67-6.35,11.79-8.53,18.14-4.86c-4.5,1.85-6.69,6.97-4.93,11.5c8.06,17.36,28.66,24.89,46.01,16.83s24.89-28.66,16.83-46.01c-0.12-0.25-0.24-0.5-0.36-0.75c12.99,27.87,6.53,60.94-16.01,81.85c-6.7-15.75-24.9-23.09-40.65-16.39c-6.76,2.87-12.27,8.06-15.57,14.62c-3.54,7.06-0.69,15.65,6.37,19.19c1.72,0.86,3.6,1.37,5.53,1.49c-11.2,0.13-22.28-2.4-32.32-7.38c7.2-1.4,11.9-8.38,10.5-15.58c-1.4-7.2-8.38-11.9-15.58-10.5c-6.24,1.22-10.74,6.68-10.74,13.04c0,7.05,2.8,13.8,7.78,18.78c6.64,6.64,10.37,15.65,10.37,25.04c0-7.34-5.95-13.28-13.28-13.28s-13.28,5.95-13.28,13.28c0,7.05,2.8,13.8,7.78,18.78c3.1,3.1,5.39,6.93,6.65,11.13c4.22,14.05-3.74,28.86-17.79,33.09c6.12-16.17,3.09-34.38-7.92-47.7c-11.8-15.83-13.14-37.13-3.4-54.31c4.36-6.59,2.55-15.46-4.04-19.81c-6.59-4.36-15.46-2.55-19.81,4.04c-4.36,6.59-2.55,15.46,4.04,19.81c2.09,1.38,4.5,2.19,7,2.34c-10.9,6.18-23.24,9.36-35.77,9.21c7.88-0.49,13.87-7.27,13.38-15.15c-0.12-1.92-0.63-3.8-1.49-5.53c-7.68-15.3-26.3-21.48-41.6-13.8c-7.23,3.63-12.75,9.94-15.39,17.58C3.86,78.52-3.62,44.2,9.85,15.32C1.31,32.28,8.13,52.96,25.09,61.5s37.64,1.73,46.18-15.23c0.17-0.33,0.33-0.67,0.49-1.01c2.15-3.92,0.71-8.84-3.21-10.99C68.18,34.07,67.8,33.89,67.41,33.75z" /> </g>
                                            </g>
                                        </svg>
                                    </NavLink>
                                </div>

                                <div className="social-icon es_menu-social">
                                    <a href="https://www.facebook.com/emberlinestudios" target="_blank"><i className="fa fa-facebook" title="Facebook"></i></a>
                                    <a href="https://www.behance.net/emberlinestudios" target="_blank"><i className="fa fa-behance" title="Behance"></i></a>
                                    <a href="https://www.linkedin.com/company/emberline-studios" target="_blank"><i className="fa fa-linkedin" title="Linkedin"></i></a>
                                    <a href="https://www.instagram.com/emberline_studios" target="_blank"><i className="fa fa-instagram" title="Instagram"></i></a>
                                </div>

                                <div className="em-menu-bottom">
                                    <h1>YOUR<br />SKYWARD<br />COMPANION</h1>
                                    <p className="mb-0">+92 333 462 53 11</p>
                                    <a href="mailto:hello@emberlinestudios.com">hello@emberlinestudios.com</a>
                                </div>

                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-auto mw_bg">
                                <nav className="es_menu-l">
                                    <ul>
                                        <li><NavLink to="/home" className="inver switchMenu">Home</NavLink></li>
                                        <li><NavLink to="/projects" className="inver switchMenu">Projects</NavLink></li>
                                        <li><NavLink to="/services" className="inver switchMenu">Services</NavLink></li>
                                        <li><NavLink to="/about" className="inver switchMenu">About Us</NavLink></li>
                                        <li><NavLink to="/contact" className="inver switchMenu">Contact Us</NavLink></li>
                                    </ul>
                                </nav>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
    )
   }
}