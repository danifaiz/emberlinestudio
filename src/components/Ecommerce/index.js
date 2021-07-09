import React from 'react'
import { NavLink } from 'react-router-dom'

const Ecommerce = () => {
  return (
    <div>
    <div class="ES-section about subpage smPadd">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-5 col-md-6 order-md-1 order-2">
                    <div class="subH-img"><img src="../images/ECommerce.png" alt="" /></div>
                </div>
                <div class="col-lg-7 col-md-6 order-md-2 order-1">
                    <div class="middleDiv">
                        <div class="subH-cont">
                            <h1 class="text-uppercase">NOT JUST WEBSITES, WE DEVELOP JOURNEYS WHICH FINISH WITH A “CHECK-OUT”</h1>
                            <p>We help clients sell more and more... and more.We make sure your customers experience the same awe if they entered your dream design.We do this by starting off with a detailed research on your business niche,potential customers and their behaviors.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="ES-section p-0 UIUX">
        <div class="container">
            <div class="row">
                <div class="col-10 pricing-detail-head">
                    <h1 class="text-uppercase">ECOMMERCE & US</h1>
                    <p>Our vast experience in the Web & App Industry and eCommerce is powered by our expert eCommerce designers and developers.We cover both art and the science to create your online retail shop which means your eCommerce website will be a esthetic yet robust.</p>
                    <p className="mb-5">Selling online has never been so important.It doesn’t matter what device;we work in detail to create smooth experiences and user journeys that expand over almost all of the platforms.Simply put,our goal is always to design and develop an online shop which tells your story as well as sell your product.Let’s get you the exclusive eCommerce shop you deserve</p>
                    <h1 class="col-12 text-uppercase mb-2 mt-2 pricing-heading">HOW WE HELP BRANDS</h1>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-10 col-md-12 margin-minus">
                    <div class="ecommerece">
                      <span class="SN">01</span>
                        <div className="pricing-detail-head discover">
                        <h2 class="text-uppercase">CONVERSION RATE OPTIMIZATION</h2>
                        <ul className="ecom">
                          <li>Enhancing UI/UX.</li>
                          <li>Easy navigation up to “Check-out"</li>
                          <li>Consulting new features</li>
                          <li>Desigining Visual as per traffic</li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
              <div className="col-lg-5 hidden-md">

              </div>
            <div class="col-lg-7 col-md-12 margin-minus">
                    <div class="ecommerece">
                      <span class="SN">02</span>
                        <div className="pricing-detail-head revenue">
                        <h2 class="text-uppercase">REVENUE OPTIMIZATION</h2>
                        <ul className="ecom">
                          <li>Enhancing UI/UX.</li>
                          <li>Easy navigation up to “Check-out"</li>
                          <li>Consulting new features</li>
                          <li>Desigining Visual as per traffic</li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
              <div class="col-lg-12 col-md-12 margin-minus">
                      <div class="ecommerece">
                        <span class="SN">03</span>
                          <div className="pricing-detail-head discover">
                           <h2 class="text-uppercase">GETTING PEOPLE ACQUAINTED</h2>
                             <p className="ecom">We unite same minded customers with companies through shared beliefs and values.It is more likely that a person would buywhen the brand resonates with him.We empower businesses stay competitive through supporting people who become customers.Such customers automatically bring more like minded with them.</p>
                          </div>
                      </div>
                </div>
            </div>

            <div class="row">
              <div className="col-lg-5 hidden-md">

              </div>
              <div class="col-lg-7 col-md-12 margin-minus">
                    <div class="ecommerece">
                      <span class="SN">04</span>
                        <div className="pricing-detail-head revenue">
                        <h2 class="text-uppercase">STRATEGY CONSULTATION</h2>
                        <p className="ecom">Planning ahead of time and developing a roadmap is one of our keys to successful launches.Client need to see an estimate ROI and we help ourclient safely embrace risk by executive consultation of market expert</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
              <div className = "pricing-detail-head ">
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

export default Ecommerce
