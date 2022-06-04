import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

import "../../styles/hotels/list.css"

import {format} from "date-fns"
import { DateRange } from 'react-date-range';
import SearchItemH from '../../components/hotel/SearchItemH';


const List = () => {
  const location = useLocation()
  const [destination,setDestination] = useState(location.state.destination)
  const [date,setDate] = useState(location.state.date)
  const [options,setOpenOptions] = useState(location.state.options)
  const [openDate,setOpenDate] = useState(false)

  

  return (
    <div>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="isItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="isItem">
              <label>Check-IN  Date</label>
              <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
              {openDate &&( <DateRange>
                onChange={(item)=>setDate([item.selection])} minDate={new Date()} ranges={date}
              </DateRange>)
              }

        
            </div>
            <div className="isitem">
              <label>Options</label>
              <div className="isOptions">
              <div className="isOptionitem">
                <span className="listoptionText">Min price <small>per night</small></span>
                 <input type="number"  className="isOptionInput" />
              </div>
              <div className="isOptionitem">
                <span className="listoptionText">Max price <small>per night</small></span>
                 <input type="number" className="isOptionInput" />
              </div>
              <div className="isOptionitem">
                <span className="listoptionText">Adult</span>
                 <input type="number" min={1} className="isOptionInput" placeholder={options.adult} />
              </div>
              <div className="isOptionitem">
                <span className="listoptionText">Children</span>
                 <input type="number" min={0} className="isOptionInput" placeholder={options.children} />
              </div>
              <div className="isOptionitem">
                <span className="listoptionText">Room</span>
                 <input type="number" min={1} className="isOptionInput" placeholder={options.room} />
              </div>
              
             </div>
            
            </div>
            <button>Search</button>

          </div>
          <div className="listResult">
           <SearchItemH />
           <SearchItemH />
           <SearchItemH />
           <SearchItemH />
           <SearchItemH />
           <SearchItemH />
           <SearchItemH />
           <SearchItemH />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;