import React, { Component } from 'react'
import { NavLink }  from 'react-router-dom'
export default class Kiosks extends Component {
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
                                <div class="subH-img"><img src="../images/kiosks-exhibitions.png" alt="" /></div>
                            </div>
                            <div class="col-lg-7 col-md-6 order-md-2 order-1">
                                <div class="middleDiv">
                                    <div class="subH-cont">
                                        <h1 class="text-uppercase">Kiosks & Exhibitions</h1>
                                        <p class="mb-0">Kiosks and exhibitions are a domain where our designers get the chance to perform wonders. It is an area of design which we believe is less restricted than the orthodox ﬁelds of design. We handle these projects with a “turn-key” approach and have executed numerous projects successfully.</p>
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
                                    <h2 class="text-uppercase">Retail kiosks</h2>
                                    <p class="mb-20">With our enormous industrial know-how and understanding of the brand guidelines, we are highly immersed in presenting a better solution for our honored customers regarding their retail kiosks.</p>
                                    <p class="mb-20">Each kiosk is conceptualized very professionally, keeping the business core objective as a priority at each step of process, the final output is rendered with precision.</p>
                                    <p>Considering aesthetics & maximum footfall with enough clearance space we provide 3D visualization, Detail Drawings and Material Specifications. Keeping in view the altering and increasing desires of our valuable clients, we are actively engaged in presenting highly distinguished design services.</p>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-12">
                                <div class="conBox shadow R800bg">
                                    <h2 class="text-uppercase">Trade Show Exhibitions</h2>
                                    <p class="mb-20">Exhibitions help companies to get their brand noticed. Every year lot of exhibitions are being organized and brands are participating at various exhibitions of their interest.</p>
                                    <p class="mb-20">We offer bespoke customized exhibition stalls as well as modular system stands and rental equipment to put a great impression of your brand. Our process of designing an exhibition stall starts from design brief and include construction, through to transport and take down, providing full project management.</p>
                                    <p>With 3D design facility, we help visualizing the whole design before getting into fabrication phase. In fabrication process our experienced project managers make sure to provide you a worthwhile and hassle-free exhibition show.</p>
                                </div>
                            </div>

                            <div class="col-md-12 text-center mt-50"><NavLink className="button" to="/projects">SEE PROJECTS</NavLink></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
