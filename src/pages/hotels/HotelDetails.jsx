import "../../styles/hotels/hoteldetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from "../../assets/images/cards/img-2.jpg";


import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const HotelDetails = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const { hotels } = useSelector((state) => state.hotels);
  const { id } = useParams();



  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  const hotel = hotels.filter(({ hotelId }) => {
    return hotelId.toString() === id;
  });



  return (
    <div>
      {hotels.length !== 0 && (<div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={hotel[0]?.hotelImages[slideNumber]?.url ? hotel[0]?.hotelImages[slideNumber]?.url : img1 } alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button type="submit" className="bookNow" onClick={localStorage.setItem('hotel',id) }></button>


          <h1 className="hotelTitle">{hotel[0].name}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{hotel[0].no},{hotel[0].town},{hotel[0].district}</span>
          </div>
          <span className="hotelDistance">

            </span>
          <span className="hotelPriceHighlight">

            </span>
          <div className="hotelImages">
            {hotel[0]?.hotelImages.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo?.url ? photo.url : img1}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">{hotel[0].description}</h1>
              <p className="hotelDesc">
                {hotel[0].description}
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1></h1>
              <span>
                  Welcome to travelmate Hotel Booking
                </span>
              <h2>
                <b></b>
              </h2>
              <Link to="./bookingform">
                <button>Book This Hotel</button>
              </Link>

            </div>
          </div>
        </div>

      </div>)}
    </div>
  );

};

export default HotelDetails;