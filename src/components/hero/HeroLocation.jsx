import React, { useState } from "react";
import { AiOutlineDown, AiOutlineSearch } from "react-icons/ai";
import beachVideo2 from "../../assets/videos/beachVideo2.mp4";
import { useSelector } from "react-redux";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

const HeroLocation = () => {
  const { locations } = useSelector((state) => state.locations);
  const [filteredLocations, setFilteredLocations] = useState([]);
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

  return (
    <section className="relative h-screen w-full snap-center">
      <video
        className="h-full w-full object-cover"
        src={beachVideo2}
        autoPlay={true}
        loop={true}
        muted={true}
      />
      <div className="absolute top-0 left-0 h-full w-full bg-gray-900/30"></div>
      <div className="absolute top-0 flex h-full w-full flex-col justify-center p-4 text-center text-white">
        <div className="mt-32">
          {filteredLocations.length === 0 && (
            <div>
              <h1 className="text-7xl sm:text-6xl">First Class Travel</h1>
              <h1 className="py-6 text-2xl">Top 1% Locations Worldwide</h1>
            </div>
          )}
          <div className="mx-auto my-6 flex w-full max-w-[700px]  items-center justify-between rounded-lg bg-gray-50 p-5 text-black">
            <input
              className="font-light focus:outline-none sm:w-[400px]"
              type="text"
              value={searchValue}
              placeholder="Search Destinations"
              onChange={handleFilter}
            />
            {filteredLocations.length === 0 ? (
              <AiOutlineSearch size={20} className="icon text-black" />
            ) : (
              <GrClose
                className="cursor-pointer hover:rotate-45"
                onClick={clearInput}
              />
            )}
          </div>
          {filteredLocations.length !== 0 && (
            <div className="search-filter mx-auto my-6 flex max-h-56 w-full max-w-[700px] flex-col overflow-hidden overflow-y-auto rounded-lg bg-transparent text-black">
              {filteredLocations.map(({ locationName, urls, locationId }) => (
                <Link to={`${locationId}`} key={locationId}>
                  <div className="bg-blue-200/10 py-3 px-5 text-white hover:bg-blue-200/30">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          alt={locationName}
                          src={urls[0]}
                          className="h-12 rounded-lg object-cover"
                        />
                        <p className="mx-4">{locationName}</p>
                      </div>
                      <FiChevronRight className="" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
        <div>
          {filteredLocations.length === 0 && (
            <div>
              <p className="text-gray h- mt-10">Scroll Down to Find more...</p>
              <Link to="#location-grid">
                <div className="mt-14 flex w-full cursor-pointer flex-col items-center">
                  <div className="animate-bounce rounded-full border-2 text-center">
                    <AiOutlineDown
                      className="m-1.5 h-10 text-white"
                      size={15}
                    />
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroLocation;
