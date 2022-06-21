import "../../styles/hotels/searchitemh.css";
import img1 from "../../assets/images/cards/img-1.jpg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {fetchAvailableHotels} from "../../redux/store/avilableHotelSlice";


const SearchItemAll = () => {
  const { hotels } = useSelector((state) => state.hotels);
  const { availableHotels } = useSelector((state) => state.availableHotels);

  function onClick(event , data){
    console.log(data);
  }

  return (
    <div>
      {hotels?.length !== 0 && hotels.map((hotel) => (
        <div className="searchItem" key={hotel.hotelId}>

          <img src={hotel.hotelImages[0]?.url ? hotel.hotelImages[0]?.url : img1} alt="" className="searchItemImg" />
          <div className="siDescrption">
            <h1 className="siTitle">{hotel.name}</h1>
            <span className="siDistence">{hotel.town}</span>
            <span className="siSubtitle">
                   {hotel.district}
                </span>
            <span className="siCancleOp">{hotel.description}</span>


          </div>
          <div className="siDetails">
            <div className="searchItemRating">
              <span></span>
              <button>{hotel.rating}</button>
            </div>
            <div className="searchitemdetailText">
              <span className="taxOption"></span>
              <Link to={`/hotels/list/${hotel.hotelId}`}>
                <button className="searchitemCheckButton">Look More</button>
              </Link>
            </div>
          </div>

        </div>
      ))}

    </div>
  );
};

export default SearchItemAll;