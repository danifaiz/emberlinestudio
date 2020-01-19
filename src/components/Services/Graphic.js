import React, { Component } from 'react'
import { NavLink }  from 'react-router-dom'
export default class Graphic extends Component {
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
                                <div class="subH-img"><img src="../images/graphic-subpage.png" alt="" /></div>
                            </div>
                            <div class="col-lg-7 col-md-6 order-md-2 order-1">
                                <div class="middleDiv">
                                    <div class="subH-cont">
                                        <h1 class="text-uppercase">BRANDING &amp; graphics</h1>
                                        <p class="mb-0">Audience, Exclusiveness, Interesting, Organization &amp; Unique are our vowels of branding language. We aim for the supreme brand stature which stand out through unique value propositions and branding strategies.</p>
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
                                    <h2 class="text-uppercase">BRAND IDENTITY</h2>
                                    <p class="mb-15">Brand strategy is the starting point to make a brand successful. Finding a unique part of a business is where we start developing strategic foundation covering each part of brand process.</p>
                                    <p>We translate our strategic foundation into a rich visual identity that makes your brand sound, unique, authentic, and memorable. By covering complete range, we make brands that other brands want to be.</p>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-12">
                                <div class="conBox shadow R800bg GS-sec">
                                    <div class="row">
                                        <div class="col BR-bottom BR-right">Brand
                                            <br/>Strategy</div>
                                        <div class="col BR-bottom BR-right">Brand
                                            <br/>Guidleines</div>
                                        <div class="col BR-bottom">Corporate
                                            <br/>Identity</div>
                                    </div>
                                    <div class="row">
                                        <div class="col BR-right">Logo
                                            <br/>Design</div>
                                        <div class="col BR-right">Business
                                            <br/>Card</div>
                                        <div class="col">Stationery
                                            <br/>Design</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="row">

                            <div class="col-lg-6 col-md-12 order-lg-1 order-2">
                                <div class="conBox shadow R800bg GS-sec">
                                    <div class="row">
                                        <div class="col BR-bottom BR-right">Print
                                            <br/>Media</div>
                                        <div class="col BR-bottom BR-right">Digital
                                            <br/>Campaigns</div>
                                        <div class="col BR-bottom">Advertising
                                            <br/>Campaigns</div>
                                    </div>
                                    <div class="row">
                                        <div class="col BR-right">Illustration
                                            <br/>Design</div>
                                        <div class="col BR-right">Banner, Brochure
                                            <br/>Flyers &amp; Ads</div>
                                        <div class="col">Packaging
                                            <br/>Design</div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-12 order-lg-2 order-1">
                                <div class="conBox">
                                    <h2 class="text-uppercase">GRAPHIC DESIGN</h2>
                                    <p class="mb-15">In this digital age, brands need to communicate their message by using creative ways. We believe graphic designing isn’t just looking pretty! It could be used as a foundation to build strong relations between brands & its customers.</p>
                                    <p>Keeping this in mind, we create simple yet powerful images to communicate ideas. We fill the gap between brand and its customers using Visual Communication to sell the product or service in a creative way. We cover vast range including:</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">

                            <div class="col-lg-6 col-md-12">
                                <div class="conBox W800bg">
                                    <h2 class="text-uppercase">SOCIAL MEDIA CONTENT</h2>
                                    <p class="mb-15">Social media has changed the game in terms of interaction between brand and its users. Brands now have to come up with social media content to sustain its presence & engage its audience.</p>
                                    <p>We ensure businesses achieve online success by producing content that people want to engage with including:</p>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-12">
                                <div class="conBox shadow R800bg GS-sec">
                                    <div class="row">
                                        <div class="col BR-bottom BR-right">Campaigns</div>
                                        <div class="col BR-bottom BR-right">Illustrations</div>
                                        <div class="col BR-bottom">Photography</div>
                                    </div>
                                    <div class="row">
                                        <div class="col BR-right">Videos</div>
                                        <div class="col BR-right">Animations</div>
                                        <div class="col">Gifs</div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-12 text-center mt-30"><NavLink class="button" to="/projects">SEE PROJECTS</NavLink></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
