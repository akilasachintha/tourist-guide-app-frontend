import "../../styles/hotels/searchitemh.css";
import img1 from "../../assets/images/cards/img-1.jpg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {fetchAvailableHotels} from "../../redux/store/avilableHotelSlice";


const SearchItemH = () => {
  const { hotels } = useSelector((state) => state.hotels);
  const { availableHotels } = useSelector((state) => state.availableHotels);
 localStorage.setItem('type','B');
 localStorage.setItem('amount','1');
 let gettype = localStorage.getItem('type');
 let getamount = localStorage.getItem('amount');


  return (
    <div>
      {availableHotels?.length !== 0 && availableHotels.map((hotelRoom) => (
        <div className="searchItem" key={hotelRoom.hotelId}>

          <img src={hotelRoom.hotelImages[0]?.url ? hotelRoom.hotelImages[0]?.url : img1} alt="" className="searchItemImg" />
          <div className="siDescrption">
            <h1 className="siTitle">{hotelRoom.name}</h1>
            <span className="siDistence">{hotelRoom.town}</span>
            <span className="siTaxiOp"></span>
            <span className="siSubtitle">
                   {hotelRoom.district}
                </span>
            <span className="siFeatures">

                </span>
            <span className="siCancleOp">{hotelRoom.description}</span>
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
              <span className="price">120 LKR</span>
              <span className="taxOption"></span>
              <Link to={`/hotels/list/${hotelRoom.hotelId}`}>
                <button className="searchitemCheckButton">Look More</button>
              </Link>
            </div>
          </div>

        </div>
      ))}

    </div>
  );
};

export default SearchItemH;