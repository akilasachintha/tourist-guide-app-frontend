import "../../styles/hotels/searchitemh.css";
import img1 from "../../assets/images/cards/img-1.jpg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const SearchItemH = () => {
  const { hotels } = useSelector((state) => state.hotels);

  return (
    <div>
      {hotels.length !== 0 && hotels.map((hotel) => (
        <div className="searchItem" key={hotel.hotelId}>

          <img src={hotel.hotelImages[0]?.url ? hotel.hotelImages[0]?.url : img1} alt="" className="searchItemImg" />
          <div className="siDescrption">
            <h1 className="siTitle">{hotel.name}</h1>
            <span className="siDistence">{hotel.town}</span>
            <span className="siTaxiOp">free airport taxi</span>
            <span className="siSubtitle">
                   {hotel.district}
                </span>
            <span className="siFeatures">
                    Entire studio . 1 bathroom . full bed
                </span>
            <span className="siCancleOp">{hotel.description}</span>
            <span className="cancleOpSubtitle">
                    you can cancle later so lock in this great price today
                </span>


          </div>
          <div className="siDetails">
            <div className="searchItemRating">
              <span>Excellent</span>
              <button>8.9</button>
            </div>
            <div className="searchitemdetailText">
              <span className="price">120 LKR</span>
              <span className="taxOption">taxes and pees</span>
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

export default SearchItemH;