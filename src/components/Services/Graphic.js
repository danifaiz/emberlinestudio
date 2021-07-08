import React, { Component } from 'react'
import { NavLink }  from 'react-router-dom'
export default class Graphic extends Component {
    
    state={
        startups : ["Brand Discovery","Competitive Analysis","Brand Direction","Logo Design","Styles and Patterns","Logo Lockups","Mockups","Brand Book","3 Rounds of Revision","Brand Naming  +$300","Website Design +$2500"],
        redescover : ["Brand Discovery","Competitive Analysis","Brand Direction","Brand Messaging","Brand Voice","Logo Redesign","Styles and Patterns","Logo Lockups","Mockups","Brand Book","3 Rounds of Revision","Website Redesign +$3500"]
    }
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
                                <div class="subH-img"><img src="../images/branding.png" alt="" /></div>
                            </div>
                            <div class="col-lg-7 col-md-6 order-md-2 order-1">
                                <div class="middleDiv">
                                    <div class="subH-cont">
                                        <h1 class="text-uppercase">BRANDING &amp; strategy</h1>
                                        <p>We are creative agency and we build brands from ground up. We create unique logo, identities and visual design system that goes well with the brand. </p>
                                        <p class="mb-0">We deliver a lasting impression for your company so you don’t have to look back at your logo to change it for a long time. Whether you are a startup or a company that wants to grow this is where you should start.</p>
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
                                    <h2 class="text-uppercase">WHAT IS BRANDING?</h2>
                                    <p class="mb-15">What is branding and do you need it? Answer is simple: Yes. Branding is what your customers/audience perceive of you. If you as a company can delight your buyers you will become a brand over time and will sell more for higher prices.</p>
                                    <p>You need a branding agency at your back that understands your audience and creates a compelling visual story that communicates your purpose.</p>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-12">
                                <img className="alivio_image" src="../images/Alivio_Branding.png"></img>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <div className="conBox">
                                    <h2>We foster relation between you and your clients with branding and strategy</h2>
                                    <p>The first and very important aspect of our approach is understanding your audience, who you are speaking to and how you should address them. For these and many more questions we sit with you for our discovery session where we discuss the needs,likes and wants of your customers.</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">

                            <div class="col-lg-6 col-md-12 order-lg-1 order-2">
                                <div class="conBox">
                                    <h2 class="text-uppercase">OUR PROCESS</h2>
                                    <p class="mb-15">It all starts with us talking to each other about the brand. Then we plan how brand is going to talk with whom and in what tone.</p>
                                    <p>Brand strategy is the important part to make a brand successful. From what we gather from you helps us transform your business into a rich visual ident ity that makes your brand sound unique, authentic and memorable.</p>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-12 order-lg-2 order-1">
                                <div class="conBox shadow R800bg GS-sec">
                                    <div class="row">
                                        <div class="col BR-bottom BR-right">Brand 
                                            <br/>Discovery</div>
                                        <div class="col BR-bottom BR-right">Brand
                                            <br/>Strategy</div>
                                        <div class="col BR-bottom">Logo
                                            <br/>Design</div>
                                    </div>
                                    <div class="row">
                                        <div class="col BR-right">Design
                                            <br/>System</div>
                                        <div class="col BR-right">Visual
                                            <br/>Identity</div>
                                        <div class="col">Digital
                                            <br/>Marketing</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="pricing-detail-head">
                                <div className="pricing-heading">
                                    <h2 className="text-uppercase">PRICING DETAILS</h2>
                                    <p className="pricing-text">We offer premium branding services in affordable prices.</p>
                                    <p>Let’s connect with us on your preffered plan or custom requirement.</p>
                                </div> 
                            </div>
                        </div>
                        <div className="row">
                                <div className="col-lg-6 col-md-12 mt-4">
                                    <div className="card1 pricing-heading">
                                        <p className="pricing-text"><strong>For start-ups</strong></p>
                                        <h2>$1500</h2>
                                        {this.state?.startups.map(startup =>
                                        startup === "3 Rounds of Revision" 
                                        ? <p><strong>{startup}</strong></p>
                                        : <p>{startup}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 mt-4">
                                    <div className="card1 pricing-heading">
                                        <p className="pricing-text"><strong>Rediscover & Grow</strong></p>
                                        <h2>$3500</h2>
                                        {this.state?.redescover.map(redescover =>
                                        redescover === "3 Rounds of Revision" 
                                        ? <p><strong>{redescover}</strong></p>
                                        : <p>{redescover}</p>
                                        )}
                                    </div>
                               </div>
                        </div>
                        <div className="row mt-5">
                            <div className = "pricing-detail-head">
                                <h2>CLIENTS WE WORKED WITH</h2>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-3 col-md-6">
                                <img src="../images/Schaf.png" className="clients-logos "></img>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <img src="../images/Keyki.png" className="clients-logos "></img>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <img src="../images/Uzham.png" className="clients-logos"></img>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <img src="../images/Panel.png" className="clients-logos"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
