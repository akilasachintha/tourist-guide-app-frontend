import React, { useState } from "react";
import DatePicker from "react-datepicker";

const Testing = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-10 mx-auto col-12 card shadow-lg border-0 p-4">
            <div>
              <h1 className="text-3xl text-black align-middle my-2 text-center">Vehicle Booking</h1>
            </div>
            <div className="row">
              <div className="col-md-6 col-12 my-auto">
                <img
                  src="https://education.github.com/assets/pack/opengraph-image-c6d692948bb5fbf237b8a72d6576b4dcc84586335b522a6036904fc16ec7eccd.png"
                  className="w-75" alt="selected room" />
              </div>
              <div className="col-md-6 col-12">
                <table className="table">
                  <thead className="thead-light">
                  <tr>
                    <th>Room Type</th>
                    <td>Room Type</td>
                  </tr>
                  <tr>
                    <th>Capacity</th>
                    <td>Capacity</td>
                  </tr>
                  <tr>
                    <th>Size</th>
                    <td>Size sqft.</td>
                  </tr>
                  <tr>
                    <th>Breakfast</th>
                    <td>Not Included</td>
                  </tr>
                  <tr>
                    <th>Pets</th>
                    <td>Allowed</td>
                  </tr>
                  </thead>
                </table>
              </div>
            </div>
            <div className="row my-3">
              <div className="col-md-6 col-12">
                <div className="form-group">
                  <label htmlFor="Fromdate" className="font-weight-bolder mr-3">From Date </label>
                  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="form-control" />
                  {/*<DatePicker selected={this.state.startDate} onChange={this.handleChangeStart}*/}
                  {/*            className="form-control" />*/}
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="form-group">
                  <label htmlFor="Todate" className="font-weight-bolder mr-3">To Date </label>
                  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="form-control" />
                  {/*<DatePicker selected={this.state.endDate} onChange={this.handleChangeEnd} className="form-control" />*/}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-12">
                <h6 className="font-weight-bolder my-2">Number of days : 0</h6>
                <mark>Please make sure Checkin time is from 9 am to 12 pm</mark>
              </div>
              <div className="col-md-6 col-12">
                <h6 className="font-weight-bold my-2">Price per day : <span className="badge badge-info">Rs 1000</span>
                </h6>
                <h6 className="font-weight-bold">Total Price to be paid : <span
                  className="text-primary">Rs 1400</span></h6>
              </div>
            </div>

            <button
              className="flex my-4 btn btn-block btn-outline-primary justify-center content-center items-center">Confirm
              Booking
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Testing;
