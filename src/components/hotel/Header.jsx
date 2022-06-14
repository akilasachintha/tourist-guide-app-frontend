import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faBed, faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/hotels/header.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState("");


  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection"
    }
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1


      })
      const navigate = useNavigate()
      const handleOption = (name, operation) =>{
          setOptions(prev=>{return {
              ...prev, [name]: operation==="i" ? options[name] +1 : options[name] -1,
          }})
      }
      const handleSearch = () =>{
          navigate("/hotels/list",{state:{destination,date,options}})

      }
  return (
    <div className="header">
        <div className="headerContainer">

        <h1 className="headerTitle">Enjoyy trvelmate Hotel Booking </h1>
        <p className="headerDiscription">Looking For Best Place</p>

        </div>
    </div>
  )
}

export default Header