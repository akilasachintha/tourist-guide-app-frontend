import React from "react";
import CardItem from "./cardItem/CardItem";
import "./CardComponent.css"

const CardComponent = () => {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Sinharaja Jungle"
              label="Adventure"
              path="/services"
              alt="services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Travel through the Pasikuda to Luxury Journy"
              label="Luxury"
              path="/services"
              alt="services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Set Sail in the Galle Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
              alt="services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Experience of Sigiriya Lion Rock"
              label="Ancient"
              path="/products"
              alt="services"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Ride through the Port City"
              label="Adrenaline"
              path="/sign-up"
              alt="services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
