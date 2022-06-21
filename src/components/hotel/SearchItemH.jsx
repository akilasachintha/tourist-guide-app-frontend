import "../../styles/hotels/searchitemh.css";
import img1 from "../../assets/images/cards/img-1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { fetchHotelsById } from "../../redux/store/hotelsByIdSlice";
import Swal from "sweetalert2";


const SearchItemH = () => {
  const { availableHotels } = useSelector((state) => state.availableHotels);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      dispatch(fetchHotelsById());
    };
  }, [dispatch]);

  function onclick(event, data) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm Booking!"
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(data);
        localStorage.setItem("hotel", data);
        navigate("/booking/guide");
      }
    });
  }

  useEffect(() => {
    return () => {
      dispatch(fetchHotelsById());
    };
  }, [dispatch]);


  return (
    <div>
      {availableHotels?.length !== 0 && availableHotels.map((hotelRoom) => (
        <div className="searchItem" key={hotelRoom.hotelId}>
          <img src={hotelRoom.hotel.hotelImages[0]?.url ? hotelRoom.hotel.hotelImages[0]?.url : img1} alt=""
               className="searchItemImg" />
          <div className="siDescrption">
            <h1 className="text-5xl font-bold text-indigo-600">{hotelRoom.hotel.name}</h1>
            <h2 className="text-2xl">{hotelRoom.hotel.town}</h2>

            <span className="text-1xl">
                   {hotelRoom.hotel.district}
                </span>
            <span className="siCancleOp">{hotelRoom.hotel.description}</span>
          </div>
          <div className="siDetails">
            <div className="searchItemRating">
              <span></span>
              <button>8.9</button>
            </div>
            <div className="searchitemdetailText">
              <span className="price">{hotelRoom.price}</span>
              <span className="taxOption"></span>
              <div className="flex mb-4 justify-between">
                <div className="w-1/2 h-12 w-[280px] ">
                  <Link to={`/hotels/list/${hotelRoom.hotel.hotelId}`}>
                    <button
                      className="flex rounded-md bg-blue-500 py-2 px-4 text-white transition-all duration-150 ease-in-out hover:bg-blue-600">Look
                      More
                    </button>
                  </Link>
                </div>
                <div className="w-1/2 h-12 w-[280px]"><div>
                  <button
                    className="flex rounded-md bg-blue-500 py-2 px-4 text-white transition-all duration-150 ease-in-out hover:bg-blue-600"
                    onClick={event => onclick(event, hotelRoom.hotel.hotelId)}>
                    Book Hotel
                  </button>
                </div></div>
              </div>

            </div>
          </div>

        </div>
      ))}

    </div>
  );
};

export default SearchItemH;