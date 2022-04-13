import React, { useEffect, useRef, useState } from "react";
import "../../css/ebook.css";
import Header from "../Header";
import emberLinesLogo from "../../images/emberline-studios-w.svg";
import eBookImage from "../../images/e-book-img.png";
import SendBook from "./sendbook";

export default function BrandingBook({ ...props }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <div className="e-book-header">
        <div className="container">
          <div className="row">
            <div className="col-md-6 align-self-center hidden-767">
              <img className="e-book-img" src={eBookImage} alt="" />
            </div>
            <div className="col-md-6 align-self-center right-side-sec">
              <img
                className="emberline-logo"
                src={emberLinesLogo}
                alt="emberlinestudios"
              />
              <p>At last! How to create an</p>
              <h2>Impactful Brand</h2>
              <p>
                identity <u>from scratch</u> without burning your savings in
                just 1 week, Guaranteed.
              </p>
              <img className="e-book-img-sm" src={eBookImage} alt="" />
              <span>
                SAY GOODBYE TO EXPENSIVE EXPERTS WHO WILL DO EXACTLY WHAT THIS
                BOOK TELLS YOU TO DO!
              </span>
              <SendBook btnGreenClass={"button-gr"} />
            </div>
          </div>
        </div>
      </div>
      <div className="sec-2 pt-0">
        <div className="container">
          <div className="row row-reverse">
            <div className="col-md-6 align-self-center pr-60">
              <h3>
                Impart on a journey so immersive,you will read the book like a
                story.
              </h3>
              <ul>
                <li>How to brand your business without hurting your pocket?</li>
                <li>An attractive logo brings more customers, right? WRONG!</li>
                <li>
                  4000+ years of useful Branding History compressed in this TINY
                  and FREE PDF
                </li>
              </ul>
              <SendBook />
            </div>
            <div className="col-md-6 align-self-center">
              <img
                className="e-book-img2"
                src="images/e-book-img2.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="sec-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 align-self-center">
              <p>This book contains the</p>
              <h2>Deepest Secrets</h2>
              <p>of Branding! [#4 will blow your mind]</p>
              <p>GET YOUR FREE COPY VIA EMAIL.</p>
              <SendBook btnGreenClass={"button-gr"} />
            </div>
          </div>
        </div>
      </div>
      <div className="sec-2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 align-self-center">
              <img
                className="e-book-img2"
                src="images/e-book-img3.jpg"
                alt=""
              />
            </div>
            <div className="col-md-6 align-self-center pl-60">
              <h3>
                Build a Giant Brand using our small but Incredible booklet
              </h3>
              <ul>
                <li>
                  Experiments you should never do with your Brand Identity!
                </li>
                <li>
                  How to convert people into customers and customers into
                  permanent clients?
                </li>
                <li>How on Earth people have built Giant Brands? Answered!</li>
                <li>
                  That expensive graphic designer will get your job done?! Think
                  again!
                </li>
              </ul>
              <SendBook />
            </div>
          </div>
        </div>
      </div>
      <div className="sec-3 last-chance">
        <div className="container">
          <div className="row">
            <div className="col-md-12 align-self-center">
              <h3>
                New information with every sentence. It’s like Lightning packed
                in a AA battery.
              </h3>
              <div className="eb-form">
                <button type="submit" name="submit" className="button-sub">
                  LAST CHANCE TO GET IT!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="connect-us pb-30">
        <div className="container">
          <div className="row">
            <div className="col-md-12 align-self-center">
              <h3>Got your Copy?</h3>
              <h2>Connect with us</h2>
              <p>
                Be part of our family and get exclusive access to secret offers,
                free custom designs including 3D animations!
              </p>
              <div className="eb-form eb-form-sub">
                <SendBook gotYourCopySection={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
