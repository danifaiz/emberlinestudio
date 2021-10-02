import React from 'react'
import { NavLink } from 'react-router-dom'

function MainServices({heading,paraHeading,paraOne,paraTwo,linkText,linkTo,imageUrl,bgColor}) {
  return (
    <div className="container-fluid border border-dark rounded">
      <div className="row">
        <div className="col-md-8 col-sm-12 col-12 ">
          <div className="services-heading-landing ">
            <h4>{heading && heading}</h4>
          </div>
          <div className="services-landing-paragraph">
          <h3>{paraHeading && paraHeading}</h3>
            <div className="services-landing-paragraph-text">
              <p>{paraOne && paraOne}<br /><br />{paraTwo && paraTwo}</p>
            </div>
            <div className="nav-link-landing">
              <NavLink to={linkTo ? linkTo : "#"} 
                activeStyle={{
                  fontWeight: "bold",
                  color: "black"
                  }}>{linkText && linkText}</NavLink>  
            </div>
          </div>
        </div>
        <div className={`col-md-4 col-sm-12 col-12 ${bgColor && bgColor}`}>
          <div className="image-services-landing">
            <img src={imageUrl && imageUrl} className="img-landing" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainServices
