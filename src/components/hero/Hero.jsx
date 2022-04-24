import React from "react";
import Button from "../button/Button";
import "../../styles/Hero.css";
import heroVideo from "../../assets/videos/video-2.mp4";

const Hero = () => {
  return (
    <div className="hero-container">
      <video src={heroVideo} autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          path="/location"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          path="/sign-up"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
