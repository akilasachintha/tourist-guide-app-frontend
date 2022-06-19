import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAppUser } from "../../../redux/store/appUserSlice";
import { Link } from "react-router-dom";

const GuideProfile = () => {
  const { appUser } = useSelector((state) => state.appUser);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(fetchAppUser());
    };
  }, [dispatch]);


  return (
    <div>
      <div>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-md">
          <div className="md:flex">
            <div className="w-full p-2 py-10">
              <div className="flex justify-center">
                <div className="relative">
                  <img
                    src={appUser?.userPhotoUrl}
                    className="rounded-full"
                    width={80}
                    alt="Img"
                  />
                  <span className="absolute border-white border-4 h-5 w-5 top-12 left-16 bg-green-700 rounded-full" />
                </div>
              </div>
              <div className="flex flex-col text-center mt-3 mb-4">
                <span className="text-2xl font-medium">{appUser?.name}</span>
                <span className="text-md text-gray-400">{appUser?.email}</span>
              </div>
              <div className="px-16 mt-3 text-center">
                <div className="h-5 my-2 py-2 px-3 rounded text-center cursor-pointer hover:shadow hover:bg-gray-200">
                  Phone No : {appUser?.phoneNo}
                </div>
                <div className="h-5 py-2 px-3 rounded cursor-pointer hover:shadow hover:bg-gray-200">
                  Availability : {appUser?.availability}
                </div>
                <div className="h-5 py-3 px-3 rounded cursor-pointer hover:shadow hover:bg-gray-200">
                  Price Range : {appUser?.priceRange}
                </div>
              </div>
              <div className="px-14 mt-5">
                <Link to="/dashboard/guides/profile">
                  <button
                    type="button"
                    className="h-12 bg-gray-200 w-full text-black text-md rounded hover:shadow hover:bg-gray-300 mb-2">
                    Edit Profile
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default GuideProfile;
