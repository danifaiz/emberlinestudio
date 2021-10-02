import React from 'react'
import { landingPageData } from '../Services/LandingPageServices'
import MainServices from './MainServices'

function LandingServices() {
  console.log(landingPageData, 'data')
  return (
    <>
    {landingPageData.map(data=>(
      <MainServices 
        heading={data.mainHeading}
        paraHeading={data.paraHeading}
        paraOne={data.paraOne}
        paraTwo={data.paraTwo}
        linkText={data.linkText}
        linkTo={data.linkTo}
        imageUrl={data.imageUrl}
        bgColor={data.bgColor}
        />
    ))
    }
    </>
  )
}

export default LandingServices
