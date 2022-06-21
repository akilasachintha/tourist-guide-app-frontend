import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetUserRatingSlice } from "../../../redux/store/getUserRatingSlice";
import ReactStars from "react-stars/dist/react-stars";
import touristGuideAppAPI from "../../../apis/touristGuideAppAPI";

const Userprofile = () => {
  const [myModal, setMyModal] = useState(false);
  const { userRating } = useSelector((state) => state.guideRating);
  const [rateStarCount, setRateStarCount] = useState(null);
  const [count, setCount] = useState(0);
  let user = JSON.parse(localStorage.getItem("user"));
  const [rated, setRated] = useState(0);
  const [myUserId, setMyUserId] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(fetchGetUserRatingSlice());
      if (userRating.length !== 0) {
        setMyModal(true);
      }
    };
  }, [dispatch]);


  const ratingChanged = (newRating, e) => {
    console.log(newRating);
    setRateStarCount(newRating);

    touristGuideAppAPI.put("user/user/rate", {
      starCount: newRating,
      userId: myUserId
    }).then((res) => {
      setCount(count + 1);
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    });

    console.log(count);
    if (count >= userRating.length) {
      setMyModal(false);
      setCount(0);
    }
  };


  console.log(myUserId);

  const handleRate = (e) => {
    setMyUserId(e.target.id);
    console.log(myUserId);

  };


  return (
    <div className="container mx-auto my-5 p-5">
      <div className="md:flex no-wrap md:-mx-2 ">
        <div className="w-full md:w-3/12 md:mx-2">
          <div className="bg-white p-3 border-t-4 border-green-400">
            <div className="image overflow-hidden">
              <img className="h-auto w-full mx-auto"
                   src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                   alt="" />
            </div>
            <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">Pulini Tilanka</h1>
            <h3 className="text-gray-900 font-bold text-xl leading-8 my-1">Tourist</h3>
            <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
              Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>    
          </div>
          <div className="my-4" />
          <div className="bg-white p-3 hover:shadow">
            <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
            </div>
            
          </div>
        </div>
        <div className="w-full md:w-9/12 mx-2 h-64">
          <div className="bg-white p-3 shadow-sm rounded-sm">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
              <span clas="text-green-500">
                <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              <span className="tracking-wide">About</span>
            </div>
            <div className="text-gray-700">
              <div className="grid md:grid-cols-2 text-sm">
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Full Name</div>
                  <div className="px-4 py-2">Pulini Tilanka</div>
                </div> 
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Contact No.</div>
                  <div className="px-4 py-2">+94 705334841</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Email.</div>
                  <div className="px-4 py-2">
                    <a className="text-blue-800" href="mailto:jane@example.com">jane@example.com</a>
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Birthday</div>
                  <div className="px-4 py-2">Feb 06, 1998</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Role</div>
                  <div className="px-4 py-2">Tourist</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Country</div>
                  <div className="px-4 py-2">Australia</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Passport No</div>
                  <div className="px-4 py-2">123456789</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">NIC</div>
                  <div className="px-4 py-2">986291431v</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Driving License No</div>
                  <div className="px-4 py-2">xxxxxxxxx</div>
                </div>
              </div>
            </div>
            {/*<Link to="auth/register">*/}
            <button type="button"
                    onClick={() => setMyModal(true)}
                    className="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">Update
              My Account
            </button>
            {/*</Link>*/}
          </div>
          {myModal &&
            (
              <div>
                <div
                  className="py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
                  id="modal">
                  <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                    <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                      {userRating.map((user, index) => (
                        <div key={index} className="mt-2">
                          <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">{user}</h1>
                          <hr />
                          <div id={user.toString()} className="mx-auto w-full my-4"
                               onClick={(e) => setMyUserId(e.currentTarget.id)}>
                            <ReactStars
                              id={index.toString()}
                              count={5}
                              className="mx-auto text-center text-3xl"
                              onChange={ratingChanged}
                              size={50}
                              color2={"#ffd700"} />
                          </div>
                          <div
                            className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"
                            onClick={() => setMyModal(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close"
                                 className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24"
                                 strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round"
                                 strokeLinejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <line x1={18} y1={6} x2={6} y2={18} />
                              <line x1={6} y1={6} x2={18} y2={18} />
                            </svg>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-center py-12" id="button">
                  <button
                    className="focus:outline-none mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm">
                    Open Modal
                  </button>
                </div>
              </div>
            )}
        </div>
        </div>
      </div>

  );
};
  export default Userprofile;