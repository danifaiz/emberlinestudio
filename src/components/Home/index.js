import React, { Component } from 'react'
import ESHeader from '../ESHeader'
import OwlCarousel from 'react-owl-carousel';
import axios from 'axios';
import * as PATHS from '../../constants/data_routes'

import Script from 'react-load-script'
import { Link } from 'react-router-dom'
export default class Home extends Component {
    state = {
        projects:[]
    }
    constructor() {
        super()
       
    }
    
    componentDidLoad() {
        
    }
    componentDidMount () {
        const cachedProjects = sessionStorage.getItem("projects");
        if(cachedProjects) {
            let projects = JSON.parse(cachedProjects)
            this.setState({projects:projects});
        } else {
            axios.get(`${PATHS.BASE_URL}`+`${PATHS.PROJECTS_URL}`)
            .then(res => {
               const projects = res.data;
               this.setState({projects});
               sessionStorage.setItem("projects", JSON.stringify(projects));
            })
            .catch(function (error) {
               console.log(error);
            });
        }
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
        const projects = this.state.projects
        console.log(projects);
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
                                {projects.length && (
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
                                    {projects.map( project => (
                                        <div key={project.id} className="item">
                                            <div className="projektDiv js-tilt">
                                                <Link to={"project/" + project.id}>
                                                    <div className="p-content">
                                                        <h2>{project.title}</h2>
                                                        <span>{project.categories.map( (category,index) => ( project.categories.length == index+1  ? category.name :  category.name + "," )) }</span> </div>
                                                        <img src={project.cloudurl} alt={project.banner_image} /> </Link>
                                            </div>
                                        </div>
                                    ))}
                                    
                                </OwlCarousel>
                                )}
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