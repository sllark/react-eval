import React from "react";
import {Link} from "react-router-dom"

import '@splidejs/splide/dist/css/splide.min.css';


import logo from '../../assets/img/logo.svg'
import videoBtn from '../../assets/img/videoBtn.svg'


const Hero = (props) => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__top">
          <img src={logo} alt="logo"/>
          <Link to='/signup' className="btn btn--primary">Signup</Link>
        </div>
        <div className="hero__body">

          <h1 className="hero__body__headline">
            Find Profitable Crypto Opportunities before Anyone Else!
          </h1>
          <p className="hero__body__text text">
            See how with my brand new blockchain analytics platform, Blocksight.
          </p>

          <div className="hero__body__videoCont">

            <div className="hero__body__videoCont__topVideo video"/>
            <img src={videoBtn} alt="playBtn" className="hero__body__videoCont__videoBtn"/>
            <div className="hero__body__videoCont__bottomVideo video"/>


          </div>

        </div>
      </div>

    </section>
  );
}

export default Hero;