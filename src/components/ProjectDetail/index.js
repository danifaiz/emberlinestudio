import React, { Component } from 'react'
import loadjs from 'loadjs'
import $ from 'jquery'
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import * as PATHS from '../../constants/data_routes'
export default class ProjectDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project : {},
            gallery: [],
            tags:[]
        }
        
    }
    componentDidMount() {
        const projectIdMap = JSON.parse(sessionStorage.getItem("projectIdMap"));
        axios.get(`${PATHS.BASE_URL}`+`${PATHS.PROJECT_DETAIL_URL}` + projectIdMap[this.props.match.params.projectTitle])
             .then(res => {
                 console.log(res.data);
                const project = res.data[0];
                this.setState({ project: project});
                this.setState({ tags : project.categories.map( category =>  category.name).join(",")}) 
                this.setState({ gallery: project.gallery});
             })
             .catch(function (error) {
                console.log(error);
             });
             window.scrollTo(0, 0)
    }
    render() {
        const images = this.state.gallery.map((item) =>
                <div key={item.id} className={"col-md-" + item.grid + " mb-30"}>
                      <div class="reveal-holder" data-aos="reveal-item">
          <div class="reveal-block right" data-aos="reveal-right"></div> 
                    <img src={item.cloudurl} alt={item.image_name} />
                    </div>
                    </div>
        );
       return (
            <div>
                <div className="ES-section about subpage">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="text-uppercase mb-0">{this.state.project.title}</h1>
                                <p className="mb-0">{ this.state.tags }</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ES-section _projectD pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-30">
                            <p>{this.state.project.description}</p>
                        </div>
                        {images}
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
