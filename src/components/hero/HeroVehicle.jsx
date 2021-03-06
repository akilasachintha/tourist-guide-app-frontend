import React, { useState } from "react";
import { AiOutlineDown, AiOutlineSearch } from "react-icons/ai";
import vehicleVideo from "../../assets/videos/vehicleVideo.mp4";
import { useSelector } from "react-redux";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

const HeroVehicle = () => {
  const { vehicles } = useSelector((state) => state.vehicles);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const handleFilter = (event) => {
    const wordEntered = event.target.value;
    setSearchValue(wordEntered);
    const newFilter = vehicles.filter(({ vehicleName }) => {
      return vehicleName.toLowerCase().includes(wordEntered.toLowerCase());
    });
    if (wordEntered === "") {
      setFilteredVehicles([]);
    } else {
      setFilteredVehicles(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredVehicles([]);
    setSearchValue("");
  };

  return (
    <section className="relative h-screen w-full snap-center">
      <video
        className="h-full w-full object-cover"
        src={vehicleVideo}
        autoPlay={true}
        loop={true}
        muted={true}
      />
      <div className="absolute top-0 left-0 h-full w-full bg-gray-900/30"></div>
      <div className="absolute top-0 flex h-full w-full flex-col justify-center p-4 text-center text-white">
        <div className="mt-32">
          {filteredVehicles.length === 0 && (
            <div>
              <h1 className="text-7xl sm:text-6xl">
                Search Your Rental Vehicle
              </h1>
              <h1 className="py-6 text-2xl">Best Vehicles available for You</h1>
            </div>
          )}
          <div className="mx-auto my-2 flex w-full max-w-[700px]  items-center justify-between rounded-lg bg-gray-50 p-3 text-black">
            <input
              className="font-light focus:outline-none sm:w-[400px]"
              type="text"
              value={searchValue}
              placeholder="Search Rental Vehicles"
              onChange={handleFilter}
            />
            {filteredVehicles.length === 0 ? (
              <AiOutlineSearch size={20} className="icon text-black" />
            ) : (
              <GrClose
                className="cursor-pointer hover:rotate-45"
                onClick={clearInput}
              />
            )}
          </div>
          {filteredVehicles.length !== 0 && (
            <div className="search-filter mx-auto my-6 flex max-h-56 w-full max-w-[700px] flex-col overflow-hidden overflow-y-auto rounded-lg bg-transparent text-black">
              {filteredVehicles.map(({ vehicleName, vehiclePhotoUrl, vehicleId }) => (
                <Link to={`${vehicleId}`} key={vehicleId}>
                  <div className="bg-blue-200/10 py-3 px-5 text-white hover:bg-blue-200/30">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          alt={vehicleName}
                          src={vehiclePhotoUrl}
                          className="h-12 rounded-lg object-cover"
                        />
                        <p className="mx-4">{vehicleName}</p>
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
          {filteredVehicles.length === 0 && (
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

export default HeroVehicle;
