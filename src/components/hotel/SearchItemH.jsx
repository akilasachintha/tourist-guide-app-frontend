import "../../styles/hotels/searchitemh.css";
import img1 from "../../assets/images/cards/img-1.jpg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {fetchAvailableHotels} from "../../redux/store/avilableHotelSlice";


const SearchItemH = () => {
  const { hotels } = useSelector((state) => state.hotels);
  const { availableHotels } = useSelector((state) => state.availableHotels);
 // localStorage.setItem('type','B');
 // localStorage.setItem('amount','1');
 // let gettype = localStorage.getItem('type');
 // let getamount = localStorage.getItem('amount');
  function onclick(event, data) {
    console.log(data);
    localStorage.setItem("hotel", data);
  }

  return (
    <div>
      {availableHotels?.length !== 0 && availableHotels.map((hotelRoom) => (
        <div className="searchItem" key={hotelRoom.hotel.hotelId}>

          <img src={hotelRoom.hotel.hotelImages[0]?.url ? hotelRoom.hotel.hotelImages[0]?.url : img1} alt="" className="searchItemImg" />
          <div className="siDescrption">
            <h1 className="siTitle">{hotelRoom.hotel.name}</h1>
            <span className="siDistence">{hotelRoom.hotel.town}</span>
            <span className="siTaxiOp"></span>
            <span className="siSubtitle">
                   {hotelRoom.district}
                </span>
            <span className="siFeatures">

                </span>
            <span className="siCancleOp">{hotelRoom.hotel.description}</span>
            <span className="cancleOpSubtitle">
                    you can cancle later so lock in this great price today
                </span>


          </div>
          <div className="siDetails">
            <div className="searchItemRating">
              <span></span>
              <button>8.9</button>
            </div>
            <div className="searchitemdetailText">
              <span className="price">{hotelRoom.price}</span>
              <span className="taxOption"></span>
              <Link to={`/hotels/list/${hotelRoom.hotel.hotelId}`}>
                <button className="searchitemCheckButton">Look More</button>
              </Link>
              <Link to="/booking/guide/">
                <button
                  className="flex rounded-md bg-blue-500 py-2 px-4 text-white transition-all duration-150 ease-in-out hover:bg-blue-600"
                  onClick={event => onclick(event, hotelRoom.hotel.hotelId)}>
                  SELECT & Next
                </button>
              </Link>
            </div>
          </div>

        </div>
      ))}

    </div>
  );
};

export default SearchItemH;