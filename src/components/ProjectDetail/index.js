import React, { Component } from 'react'
import loadjs from 'loadjs'
import $ from 'jquery'
export default class ProjectDetail extends Component {

    componentDidMount() {
        
    }
    render() {
        return (
            <div>
                <div className="ES-section about subpage">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="text-uppercase mb-0">ADVENTURE WORLD</h1>
                                <p className="mb-0">Amusement Design, Interior Design, Graphic Design</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ES-section _projectD pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-30">
                            <p>The chronicle of Emberline is a story of three inventors who wanted to serve people and make their lives easier. Fueled by a single dream, these fellow men started working together which did the magic and they were able to put a smile on every face they worked with.</p>
                        </div>
                        <div className="col-md-12 mb-30"><img src="/images/project-detail-001.jpg" alt="" /></div>
                        <div className="col-md-6 mb-30"><img src="/images/project-detail-sm-002.jpg" alt="" /></div>
                        <div className="col-md-6 mb-30"><img src="/images/project-detail-sm-003.jpg" alt="" /></div>
                        <div className="col-md-12 mb-30"><img src="/images/project-detail-002.jpg" alt="" /></div>

                        <div className="col-md-12 mb-30 mt-30">
                            <h1 className="text-uppercase mb-30">ADVENTURE STARTS HERE!</h1>
                            <p className="mb-30">The chronicle of Emberline is a story of three inventors who wanted to serve people and make their lives easier. Fueled by a single dream, these fellow men started working together.</p>
                        </div>
                        <div className="col-md-12 mb-30"><img src="/images/project-detail-003.jpg" alt="" /></div>
                        <div className="col-md-6 mb-30"><img src="/images/project-detail-sm-004.jpg" alt="" /></div>
                        <div className="col-md-6 mb-30"><img src="/images/project-detail-sm-005.jpg" alt="" /></div>
                        <div className="col-md-6 mb-30"><img src="/images/project-detail-sm-006.jpg" alt="" /></div>
                        <div className="col-md-6 mb-30"><img src="/images/project-detail-sm-007.jpg" alt="" /></div>
                        <div className="col-md-12"><img src="/images/project-detail-004.jpg" alt="" /></div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}