import React from "react";
import "../../styles/hotels/list.css";
import SearchItemAll from "../../components/hotel/SearchItemAll";


const AllHotelList = () => {
  return (
    <div>
      <div className="navlist">
      </div>
      <div className="listContainer">

        <div className="listWrapper">

          <div className="listResult">
            <SearchItemAll/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllHotelList;