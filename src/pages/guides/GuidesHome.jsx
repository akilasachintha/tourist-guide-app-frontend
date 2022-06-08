import { Link } from "react-router-dom";
import { useState } from "react";
import HeroVehicle from "../../components/hero/HeroVehicle";
import { useSelector } from "react-redux";


function GuidesHome() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2 mt-24">
      <div className="w-full px-4 lg:px-0">
        <div className="p-3 bg-white rounded shadow-md">
          <div>
            <div className="relative w-full mb-3 h-62 lg:mb-0">
              <img src="https://cdn.pixabay.com/photo/2018/02/25/07/15/food-3179853__340.jpg" alt="Just a flower" className="object-fill w-full h-full rounded" />
            </div>
            <div className="flex-auto p-2 justify-evenly">
              <div className="flex flex-wrap ">
                <div className="flex items-center justify-between w-full min-w-0 ">
                  <h2 className="mr-auto text-lg cursor-pointer hover:text-gray-900 ">
                    Fresh butter 100Kg
                  </h2>
                </div>
              </div>
              <div className="mt-1 text-xl font-semibold">$3.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default GuidesHome;
