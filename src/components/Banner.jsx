import React from "react";
import "./banner.css";
import Carousel from "./Carousel";

export default function Banner() {
  return (
    <div className="banner">
        <div className="banner-container">
      <h1 className="banner-heading">Unlimited movies, TV shows and more.</h1>
      <h3 className="banner-subheading">Watch anywhere. Cancel anytime.</h3>
      <p className="banner-email-action">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="banner-input">
          <input type="text" className="banner-input-textfield" placeholder="EMAIL ADDRESS" />
          <button className="banner-input-btn">Get Started </button>
      </div>
      </div>
    </div>
  );
}
