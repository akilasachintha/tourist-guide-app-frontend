import React from "react";
import "../../styles/hotels/list.css";
import SearchItemH from "../../components/hotel/SearchItemH";





const List = () => {
  // const location = useLocation()
  // const [destination,setDestination] = useState(location.state.destination)
  // const [date,setDate] = useState(location.state.date)
  // const [options,setOpenOptions] = useState(location.state.options)
  // const [openDate,setOpenDate] = useState(false)





  return (
    <div>
      <div className="navlist">

      </div>
      <div className="listContainer">

        <div className="listWrapper">
          <div className="listSearch">
            {/*<h1 className="lsTitle">Search</h1>*/}
            <div className="isItem">
              <label>Destination</label>
              <input placeholder="" type="text" />
            </div>
            <div className="isItem">
              <label>Check-IN  Date</label>
              <span></span>



            </div>
            <div className="isitem">
              {/*<label>Options</label>*/}
              {/*<div className="isOptions">*/}
              {/*  /!*<div className="isOptionitem">*!/*/}
              {/*  /!*  <span className="listoptionText">Min price <small>per night</small></span>*!/*/}
              {/*  /!*  <input type="number"  className="isOptionInput" />*!/*/}
              {/*  /!*</div>*!/*/}
              {/*  /!*<div className="isOptionitem">*!/*/}
              {/*  /!*  <span className="listoptionText">Max price <small>per night</small></span>*!/*/}
              {/*  /!*  <input type="number" className="isOptionInput" />*!/*/}
              {/*  /!*</div>*!/*/}
              {/*  /!*<div className="isOptionitem">*!/*/}
              {/*  /!*  <span className="listoptionText">Adult</span>*!/*/}
              {/*  /!*  <input type="number" min={1} className="isOptionInput" placeholder="" />*!/*/}
              {/*  /!*</div>*!/*/}
              {/*  /!*<div className="isOptionitem">*!/*/}
              {/*  /!*  <span className="listoptionText">Children</span>*!/*/}
              {/*  /!*  <input type="number" min={0} className="isOptionInput" placeholder="" />*!/*/}
              {/*  /!*</div>*!/*/}
              {/*  /!*<div className="isOptionitem">*!/*/}
              {/*  /!*  <span className="listoptionText">Room</span>*!/*/}
              {/*  /!*  <input type="number" min={1} className="isOptionInput" placeholder="" />*!/*/}
              {/*  /!*</div>*!/*/}

              {/*</div>*/}

            </div>
            {/*<button>Search</button>*/}

          </div>

          <div className="listResult">
           <SearchItemH />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;