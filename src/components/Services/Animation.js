import React, { Component } from 'react'
import { NavLink }  from 'react-router-dom'
export default class Animation extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                <div class="ES-section about subpage smPadd">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-5 col-md-6 order-md-1 order-2">
                                <div class="subH-img"><img src="../images/3d-animation-img.png" alt="" /></div>
                            </div>
                            <div class="col-lg-7 col-md-6 order-md-2 order-1">
                                <div class="middleDiv">
                                    <div class="subH-cont">
                                        <h1 class="text-uppercase">3d & aNIMATION</h1>
                                        <p class="mb-0">3D visualization of your products and spaces will level up your game by a long way. We utilize 3D tools to blow a soul into the products. The spaces, too, come to life in animations and we are able to visualize each aspect efficiently. The formats we provide can be used on web, social media or even TVCs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ES-section p-0">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-12">
                                <div class="conBox W800bg">
                                    <h2 class="text-uppercase">3D FOR MARKETING</h2>
                                    <p>Let’s incorporate 3D into your simpler flat advertisements. We would design creative 3D con tent for your marketing mediums both for graphic ads and videos. Our wide range of 3D solutions would cover commercials, social media and the web.</p>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-12">
                                <div class="conBox shadow R800bg">
                                    <h2 class="text-uppercase">3D FOR ENTERTAINMENT</h2>
                                    <p>We offer a range of services in 3D domain for your VFX including 3D props, characters, environments, props that would eventually be used in movies, videos, commercials and TV. Integrating real footage with 3D content gives a whole new arena to play in. It also offers new creative ventures for your marketing material. We can place your product in almost every scenario you can image.</p>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-12">
                                <div class="conBox shadow W800bg">
                                    <h2 class="text-uppercase">3D FOR industries</h2>
                                    <p>It is always favorable to showcase your process such as an assembly line in 3D animations with step by step visuals. This is often done by industries who want to display their modern machinery or state of the art manufacturing processes.</p>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-12">
                                <div class="conBox R800bg">
                                    <h2 class="text-uppercase">3D FOR retail</h2>
                                    <p>An animation which showcases a product’s working mechanism or its features in open views would sell your product far better than just plain pictures. We would animate your products covering all angles, features, exploded views along with explanations.</p>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-12">
                                <div class="conBox W800bg">
                                    <h2 class="text-uppercase">3D FOR Manufacturing</h2>
                                    <p>We provide 3D modeling services for your products so they could be 3D printed. We also provide formats for Styrofoam cuttings machines both 2D and 3D. </p>
                                </div>
                            </div>
                            <div class="col-md-12 text-center"><NavLink class="button" to="/projects">SEE PROJECTS</NavLink></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
