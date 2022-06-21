import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchGuides } from "../../redux/store/guidesSlice";
import img from "../../assets/images/guide.jpg";
import { fetchAvailableGuides } from "../../redux/store/availableGuideSlice";
import { fetchAvailableDrivers } from "../../redux/store/availableDriverSlice";
import { fetchPayment } from "../../redux/store/paymentSlice";
import touristGuideAppAPI from "../../apis/touristGuideAppAPI";
import Swal from "sweetalert2";

const MainDetails = () => {

  const { payment } = useSelector((state) => state.payment);
  const dispatch = useDispatch();

  console.log("payment",payment)
  const [advance , setAdvance] = useState(payment * 0.2)

  useEffect(() => {
    dispatch(fetchPayment());
  }, [dispatch]);

  function onclick(){
    const d = new Date();
    let day = d.getDate();
    let month = d.getMonth()+1
    let year = d.getFullYear()-2000;
    let hour = d.getHours();
    let hourCount = day*24+month*24*30+year*24*30*12+hour+2
    let endTime = hourCount.toString();
    console.log(endTime)
    let user = localStorage.getItem("user");
    let driver = localStorage.getItem("driver");
    let guide = localStorage.getItem("guide");
    let hotel = localStorage.getItem("hotel");
    let amount = localStorage.getItem("amount");
    let type = localStorage.getItem("type");
    let vehicle = localStorage.getItem("vehicle");
    let startDay = localStorage.getItem("startDate")
    let startMonth =localStorage.getItem("startMonth")
    let startYear = localStorage.getItem("startYear")
    let endDay = localStorage.getItem("endDate")
    let endMonth =localStorage.getItem("endMonth")
    let endYear = localStorage.getItem("endYear")
    let dayCount = localStorage.getItem("dayCount")
    localStorage.removeItem("driver")
    localStorage.removeItem("vehicle")
    localStorage.removeItem("hotel")
    localStorage.removeItem("guide")
    localStorage.removeItem("amount")
    localStorage.removeItem("type")
    localStorage.removeItem("startDate")
    localStorage.removeItem("startMonth")
    localStorage.removeItem("startYear")
    localStorage.removeItem("endDate")
    localStorage.removeItem("endMonth")
    localStorage.removeItem("endYear")
    localStorage.removeItem("dayCount")
    localStorage.removeItem("location")

    let user2 = user? parseInt(user):null
    let driver2 = driver? parseInt(driver):null
    let guide2 =guide? parseInt(guide):null
    let hotel2 = hotel? parseInt(hotel):null
    let amount2 = amount? parseInt(amount):null
    let type2 =type? type.toString:null
    let vehicle2 = vehicle? parseInt(vehicle):null
    let startDay2 = startDay? parseInt(startDay):null
    let startMonth2 = startMonth? parseInt(startMonth):null
    let startYear2 = startYear? parseInt(startYear):null
    let endDay2 = endDay? parseInt(endDay):null
    let endMonth2 = endMonth? parseInt(endMonth):null
    let endYear2 = endYear? parseInt(endYear):null
    let dayCount2 =dayCount? parseInt(dayCount):null



    let checkIn = startDay2*24+startMonth2*24*30+startYear2*24*30*12
    let checkOut = endDay2*24+endMonth2*24*30+endYear2*24*30*12
    let driverState = "pending"
    let guideState = "pending"
    let hotelState = "pending"
    if (driver2===null){
       driverState = "notSelect"
    }
    if (guide2===null){
      guideState = "notSelect"
    }
    if (hotel2===null){
      hotelState = "notSelect"
    }
    touristGuideAppAPI.post("/booking/add",{
      user : 1,
      booking:{
        hotelId : 1,
        driverId : driver2,
        guideId : guide2,
        vehicleId : vehicle2,
        checkInDate : checkIn.toString(),
        checkOutDate : checkOut.toString(),
        fullPayment : payment,
        paidAmount : payment*0.2,

        temporaryBookings:[
          {
            hotelEndTime :  endTime,
            guideEndTime :endTime,
            driverEndTime : endTime,
            driverStatus : driverState,
            guideStatus : guideState,
            hotelStatus : hotelState,
            pendingHotel : hotel,
            pendingDriver : driver,
            pendingGuide : guide
          }
        ]
      },
      roomCount : amount2,
      categoryType : type2,
      dayCount : dayCount2
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function cancle(){
    localStorage.removeItem("driver")
    localStorage.removeItem("vehicle")
    localStorage.removeItem("hotel")
    localStorage.removeItem("guide")
    localStorage.removeItem("amount")
    localStorage.removeItem("type")
    localStorage.removeItem("startDate")
    localStorage.removeItem("startMonth")
    localStorage.removeItem("startYear")
    localStorage.removeItem("endDate")
    localStorage.removeItem("endMonth")
    localStorage.removeItem("endYear")
    localStorage.removeItem("dayCount")
    localStorage.removeItem("location")
  }
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="text-center pb-12">
        </div>
        <div>
          {payment?.length !== 0 &&(
              <div>
                {/*<div className="border-double border-4 border-sky-500 ...">*/}
                {/*<p>Your Full Payment : {payment}</p>*/}
                {/*</div>*/}
                {/*<div className="border-double border-4 border-sky-500 ...">*/}
                {/*<p>Advance Payment  : {payment * 0.2}</p>*/}
                {/*</div>*/}
                <div>
                  <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img src="https://www.pentravel.co.za/thank-you"/>
                      <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Thank You!</div>
                        <p className="text-gray-700 text-base">
                          <div className="border-double border-4 border-sky-500 ...">
                            <p>Your Full Payment : {payment}</p>
                          </div>
                          <div className="border-double border-4 border-sky-500 ...">
                            <p>Advance Payment  : {payment * 0.2}</p>
                          </div>

                        </p>
                      </div>
                      <div>
                          <div className="inline-flex">
                        <div className="px-6 pt-4 pb-2">
                          <div className="px-6 pt-4 pb-2">
                          <button
                            className="flex rounded-md bg-black py-2 px-4 text-white transition-all duration-150 ease-in-out hover:bg-blue-600"
                            onClick={onclick}
                          >
                            SUBMIT
                          </button>
                          <Link to="/locations">
                            <button
                              className="flex rounded-md bg-black py-2 px-4 text-white transition-all duration-150 ease-in-out hover:bg-blue-600"
                            onClick={cancle}
                            >
                              CANCLE
                            </button>
                          </Link>
                          </div>
                        </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>

            )}
        </div>
          {/*<button*/}
          {/*  className="flex rounded-md bg-blue-500 py-2 px-4 text-white transition-all duration-150 ease-in-out hover:bg-blue-600"*/}
          {/*onClick={onclick}*/}
          {/*>*/}
          {/*  SUBMIT*/}
          {/*</button>*/}
        {/*<Link to="/availablehotels">*/}
        {/*  <button*/}

        {/*    className="flex rounded-md bg-blue-500 py-2 px-4 text-white transition-all duration-150 ease-in-out hover:bg-blue-600"*/}
        {/*  >*/}
        {/*    CANCLE*/}
        {/*  </button>*/}
        {/*</Link>*/}
      </div>
    </div>
  );
};

export default MainDetails;
