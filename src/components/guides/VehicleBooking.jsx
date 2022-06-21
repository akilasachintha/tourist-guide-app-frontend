import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchVehiclesByDriver } from "../../redux/store/vehicleByDriverSlice";
import img from "../../assets/images/guide.jpg";


const DriverVehicleList = () => {
  const { vehiclesByDriver } = useSelector((state) => state.vehiclesByDriver);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(fetchVehiclesByDriver);
    };
  }, [dispatch]);

  function onclick(event , data){
    console.log(data)
    localStorage.setItem("vehicle",data)
  }

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="text-center pb-12">
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehiclesByDriver?.length !== 0 && (
            vehiclesByDriver?.map((vehicle) => (
              <div className="no-underline cursor-pointer" key={vehicle.vehicleId}>
                <div
                  className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                  <div>
                    <img
                      className="h-10 w-10 rounded"
                      src={vehicle.vehiclePhotoUrl}
                      alt="Default avatar"
                    />
                  </div>
                  <div className="text-center py-8 sm:py-6">
                    <p className="text-xl text-gray-700 font-bold mb-2">Name - {vehicle.vehicleName}</p>
                    <p className="text-base text-gray-400 font-normal">Email - {vehicle.vehicleType}</p>
                    <p className="text-base text-gray-400 font-normal">Rating - {vehicle.vehicleCondition}</p>
                  </div>
                  <Link to={`/booking/main`}>
                    <button
                      className="flex rounded-md bg-blue-500 py-2 px-4 text-white transition-all duration-150 ease-in-out hover:bg-blue-600"
                      onClick={event => onclick(event,vehicle.vehicleId)}>
                      SELECT
                    </button>
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default DriverVehicleList;
