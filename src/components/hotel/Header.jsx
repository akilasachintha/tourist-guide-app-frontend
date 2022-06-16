import { faCalendarDays } from "@fortawesome/free-regular-svg-icons"
import { faBed, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../../styles/hotels/header.css"
import { DateRange } from 'react-date-range';
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
    const [openDate, setOpenDate] = useState(false)
    const [destination,setDestination] = useState("");


    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      // const [openOptions, setOpenOptions] = useState(false)
      // const[options,setOptions]=useState({
      //     adult:1,
      //     children:0,
      //     room:1,
      //
      //
      // })
      // const navigate = useNavigate()
      // const handleOption = (name, operation) =>{
      //     setOptions(prev=>{return {
      //         ...prev, [name]: operation==="i" ? options[name] +1 : options[name] -1,
      //     }})
      // }
      // const handleSearch = () =>{
      //     navigate("/hotels/list",{state:{destination,date,options}})
      //
      // }
  return (
    <div className="header">
        <div className="headerContainer">

        <h1 className="headerTitle">Enjoyy trvelmate Hotel Booking </h1>
        <p className="headerDiscription">Looking For Best Place</p>
          <div className="mx-auto my-2 flex w-full max-w-[700px]  items-center justify-between rounded-lg bg-gray-50 p-3 text-black">
            <input
              className="font-light focus:outline-none sm:w-[400px]"
              type="text"

              placeholder="Search Hotels"

            />
            <AiOutlineSearch size={20} className="icon text-black" />

          </div>
        
        {/*<div className="headerSearch">*/}
        {/*<div className="headerSearchItem">*/}
        {/*    <FontAwesomeIcon icon={faBed} className="headerIcon" />*/}
        {/*     <input type="text" placeholder="Where are going?" className="headerInput" onChange={e=>setDestination(e.target.value)} />*/}
        {/*    </div>*/}
        {/*    */}
        {/*    <div className="headerSearchItem">*/}
        {/*    <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />*/}
        {/*    <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>*/}
        {/*    {openDate && <DateRange*/}
        {/*      editableDateInputs={true}*/}
        {/*      onChange={item => setDate([item.selection])}*/}
        {/*      moveRangeOnFirstSelection={false}*/}
        {/*      minDate={new Date()}*/}
        {/*      ranges={date}*/}
        {/*      className="date"*/}
        {/*     />}*/}
        {/*    </div>*/}
        {/*    <div className="headerSearchItem">*/}
        {/*    <FontAwesomeIcon icon={faPerson} className="headerIcon" />*/}
        {/*    <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult.${options.children} children.${options.room} room`}</span>*/}
        {/*    {openOptions && <div  className="options">*/}
        {/*        <div className="optionItem">*/}
        {/*            <span className="optionText">Adult</span>*/}
        {/*            <div className="optionCounter">*/}
        {/*             <button disabled={options.adult <= 1} className="optionCounterButton" onClick={()=>handleOption("adult","d")}>-</button>*/}
        {/*             <span className="optioncounterNumber">{options.adult}</span>*/}
        {/*             <button className="optionCounterButton" onClick={()=>handleOption("adult","i")}>+</button>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*        <div className="optionItem">*/}
        {/*            <span className="optionText">Children</span>*/}
        {/*            <div className="optionCounter">*/}
        {/*             <button disabled={options.children <= 0} className="optionCounterButton" onClick={()=>handleOption("children","d")}>-</button>*/}
        {/*             <span className="optioncounterNumber">{options.children}</span>*/}
        {/*             <button className="optionCounterButton" onClick={()=>handleOption("children","i")}>+</button>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*        <div className="optionItem">*/}
        {/*            <span className="optionText">Room</span>*/}
        {/*            <div className="optionCounter">*/}
        {/*             <button disabled={options.room <= 1} className="optionCounterButton" onClick={()=>handleOption("room","d")}>-</button>*/}
        {/*             <span className="optioncounterNumber">{options.room}</span>*/}
        {/*             <button className="optionCounterButton" onClick={()=>handleOption("room","i")}>+</button>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </div>}*/}
        {/*    </div>*/}
        {/*    <div className="headerSearchItem">*/}
        {/*  <button className="headerBtn" onClick={handleSearch}>Search</button>*/}
        {/*    </div>*/}

        {/*</div>*/}
        </div>
    </div>
  )
}

export default Header