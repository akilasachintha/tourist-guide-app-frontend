import React from "react";
import CardItem from "../../components/cardItem/CardItem";
import "../../styles/CardComponent.css";
import img9 from "../../assets/images/cards/img-9.jpg";
import img2 from "../../assets/images/cards/img-2.jpg";
import img3 from "../../assets/images/cards/img-3.jpg";
import img4 from "../../assets/images/cards/img-4.jpg";
import img8 from "../../assets/images/cards/img-8.jpg";

const CardComponent = () => {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={img9}
              text="Explore the hidden waterfall deep inside the Sinharaja Jungle"
              label="Adventure"
              path="/services"
              alt="services"
            />
            <CardItem
              src={img2}
              text="Travel through the Pasikuda to Luxury Journy"
              label="Luxury"
              path="/services"
              alt="services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={img3}
              text="Set Sail in the Galle Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
              alt="services"
            />
            <CardItem
              src={img4}
              text="Experience of Sigiriya Lion Rock"
              label="Ancient"
              path="/products"
              alt="services"
            />
            <CardItem
              src={img8}
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
