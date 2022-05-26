import React, {useEffect, useRef, useState} from 'react';
import './index.scss';
import TextField  from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CountdownTimer from '../Countdown Timer/CountdownTimer';
import Layout from '../Layout';


const Home = () => {

  return (
    <>
      <div className="container home-page">
      <Layout />
        <div className="text-area">
          <h1>SOMETHING AWESOME IS COMING SOON</h1>
          <p>Your all-in-one affiliate marketing tracking software 
            track, automate and optimize your campaigns.</p>
        </div>

        <div className="timer">
              <CountdownTimer
          countdownTimestampMs={1659983662000}/>
        </div>

        <form className="input" noValidate autoComplete="off"> 
            <div className="name">
              <TextField color="secondary" className="inputStandard" id="standard-basic" label="First Name" InputLabelProps={{
                  style: { color: '#fff' }
                }}  focused />
                      <TextField color="secondary" className="inputStandard" id="standard-basic" label="Last Name" InputLabelProps={{
                  style: { color: '#fff' }
                }}  focused/>
                      </div>
                <div className="search">
              <TextField color="secondary" className="inputRounded" id="outlined-basic" variant="outlined" 
                label="Enter your email address.." style={{width:'60%'}} InputLabelProps={{
                  style: { color: '#000', paddingTop:'20px' }}}/>
              <Button className="buttonRounded" style={{ borderRadius: 50 , marginTop: 19, fontSize: '10px', background: '#0411c2', height: '55px'}} variant="contained" color="primary">
                JOIN OUR WAITING LIST
              </Button>
            </div>
              
              
            </form>

        
        
       
      </div>
      <div className="form">
        <div className="wrapper">

            </div>
      </div>
    </>
  )
}

export default Home
