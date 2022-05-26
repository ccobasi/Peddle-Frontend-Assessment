import React from 'react'
import './index.scss';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
// import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"
import ArrowRightAlt from '@mui/icons-material/ArrowRightAlt';
// import useNavigate from 'react-router-dom';

const Contact = () => {

  const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0%;
    bottom: 0;
    right: 48%;
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
` 
// let navigate = useNavigate(); 
// const routeChange = () =>{ 
//   let path = `/comingsoon`; 
//   navigate(path);
// }



  return (
    <>
        <div className="container contact">
        <Arrow direction="right" >
            <ArrowRightAlt/>
        </Arrow>
          <div className="wrapper">
            
            <div className="left"></div>
            <div className="right">
              <h3>Hey, we are still in the 
                works, but you can send us a message!</h3>


            <form>
                  <ul>
                      <li className="half">
                        <label>First name
                          <input type="text" className="list" name="name" placeholder="Enter your first name" required/>
                        </label>
                      </li>
                      <li className="half">
                        <label>Last name
                          <input type="text" className="list" name="name" placeholder="Enter your last name" required/>
                        </label>
                      </li>
                      <li className="half">
                        <label>Email
                          <input type="text" className="list" name="email" placeholder="Enter your email address" required/>
                        </label>
                      </li>
                      <li>
                      <input type="submit" className="flat-button" value="SEND"/>
                          <p><label>Tell us what you need help for:</label></p>
                          
                      </li>

                      

                  </ul>
              </form>

            </div>
          </div>
        </div>
    </>
  )
}

export default Contact
