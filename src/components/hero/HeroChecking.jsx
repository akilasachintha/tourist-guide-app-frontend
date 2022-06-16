import React, { useState } from "react";
import beachVideo2 from "../../assets/videos/beachVideo2.mp4";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { useNavigate } from "react-router-dom";

const HeroChecking = () => {
  const { locations } = useSelector((state) => state.locations);
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const handleFilter = (event) => {
    const wordEntered = event.target.value;
    setSearchValue(wordEntered);
    const newFilter = locations.filter(({ locationName }) => {
      return locationName.toLowerCase().includes(wordEntered.toLowerCase());
    });
    if (wordEntered === "") {
      setFilteredLocations([]);
    } else {
      setFilteredLocations(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredLocations([]);
    setSearchValue("");
  };


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


  });
  const navigate = useNavigate();
  const handleOption = (name, operation) => {
    setOptions(prev => {
      return {
        ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1
      };
    });
  };
  const handleSearch = () => {
    navigate("/hotels/list", { state: { destination, date, options } });

  };

  return (
    <section className="relative h-screen w-full snap-center">
      <video
        className="h-full w-full object-cover"
        src={beachVideo2}
        autoPlay={true}
        loop={true}
        muted={true}
      />
      <div className="absolute top-0 flex h-full w-full flex-col justify-center text-center text-white">
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
            {openDate && <DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              minDate={new Date()}
              ranges={date}
              className="date"
            />}
          </div>

          <div className="headerSearchItem">
            <button className="headerBtn" onClick={handleSearch}>Search</button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroChecking;
