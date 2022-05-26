import React from 'react'
import Layout from '../Layout'
import './index.scss';

const About = () => {
  return (
    <>
        <div className="container about">
        <Layout />
          <div className="wrapper">
            <div className="box">
              <div className="text">
              <div className="line-container">
                    <hr className="line"/>
              </div>
              <div className="title">
                    <h4>About Us</h4>
                    </div>
                
              </div>
              
            </div>
            <div className="h-container">
            <h1 className="h-text">Built for Saas and E-commerce</h1>
            <p className="p-text">Our tools are easy to set up and use with a user friendly
              dashboard that enables you set up launch, automate and manage
              multi-affiliate campaigns in 5 minutes.
            </p>
            </div>
          </div>
        </div>
    </>
  )
}

export default About
