import React, { Component } from 'react'
import $ from 'jquery'
import Isotope from "isotope-layout/js/isotope";
import axios from 'axios';
import * as PATHS from '../../constants/data_routes'
import { Link } from 'react-router-dom'
export default class Projects extends Component {
    state = {
        projects:[],
        categories:[]
    }
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
        const cachedProjects = sessionStorage.getItem("projects");
        const cachedTags = sessionStorage.getItem("tags");
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
        if(cachedTags) {
            let categories = JSON.parse(cachedTags)
            this.setState({categories: categories});
            Projects.initializeIsotopes()
        } else {
            axios.get(`${PATHS.BASE_URL}`+`${PATHS.TAGS_URL}`)
            .then(res => {
               const categories = res.data;
               this.setState({categories: categories});
               sessionStorage.setItem("tags", JSON.stringify(categories));
               Projects.initializeIsotopes()
           })
           .catch(function (error) {
               console.log(error);
           });
        }
    }
    render() {
        const projects = this.state.projects
        console.log(projects);
        
        const categories = this.state.categories
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
                                    {categories.map( category => (
                                        <li data-filter={"." + category.name.toLowerCase().replace(/\//g, '') } key={category.id}><a className="button" onClick={() => {this.onFilterChange(category.name.toLowerCase().replace(/\//g, ''))}}>{category.name.toUpperCase()}</a></li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-12 filters-content" >
                                    <div className="row grid">
                            {projects.map( project => (
                                        <div key={project.id} className={"col-lg-4 col-md-6 col-sm-6 col-12 all " + project.categories.map( category =>  category.name.toLowerCase()).join(" ") }>
                                            <Link to={"project/" + project.id}>
                                                <div className="project-thumb">
                                                    <div className="projektDiv js-tilt">
                                                        <div className="p-content">
                                                        <h2>{project.title}</h2>
                                                        <span>{project.categories.map( (category,index) => ( project.categories.length == index+1  ? category.name :  category.name + "," )) }</span> </div>
                                                        <img src={project.banner_image} alt={project.banner_image} /> </div>
                                                    </div>
                                            </Link>
                                        </div>
                            ))}
                             </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}