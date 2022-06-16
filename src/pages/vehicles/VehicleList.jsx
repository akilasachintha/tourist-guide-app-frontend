import { Link } from "react-router-dom";
import VehicleH from "./VehicleH";
import { useState } from "react";
import HeroVehicle from "../../components/hero/HeroVehicle";
import { useSelector } from "react-redux";

const categories = ["All Vehicles", "Cars", "Vans", "Jeeps", "Buses"];
const brands = ["Toyota", "Honda", "Benz", "BMW"];

function FilterMenuLeft() {
  return (
    <ul className="list-group list-group-flush rounded">
      <li className="list-group-item d-none d-lg-block">
        <h5 className="mt-1 mb-2">Browse</h5>
        <div className="d-flex my-2 flex-wrap">
          {categories.map((v, i) => {
            return (
              <Link
                key={i}
                to="/products"
                className="btn btn-sm btn-dark rounded-pill me-2 mb-2"
                replace
              >
                {v}
              </Link>
            );
          })}
        </div>
      </li>
      <li className="list-group-item">
        <h5 className="mt-1 mb-1">Brands</h5>
        <div className="d-flex flex-column">
          {brands.map((v, i) => {
            return (
              <div key={i} className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  {v}
                </label>
              </div>
            );
          })}
        </div>
      </li>

      <li className="list-group-item">
        <h5 className="mt-1 mb-2">Price Range</h5>
        <div className="d-grid d-block mb-3">
          <div className="form-floating mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Min"
              defaultValue="100000"
            />
            <label htmlFor="floatingInput">Min Price</label>
          </div>
          <div className="form-floating mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Max"
              defaultValue="500000"
            />
            <label htmlFor="floatingInput">Max Price</label>
          </div>
          <button className="btn btn-dark">Apply</button>
        </div>
      </li>
    </ul>
  );
}

function VehicleList() {
  const [viewType, setViewType] = useState({ grid: true });
  const { vehicles } = useSelector((state) => state.vehicles);

  const filteredVehicles = vehicles.filter(({ vehicleStatus }) => {
    return vehicleStatus !== "pending";
  });


  function changeViewType() {
    setViewType({
      grid: !viewType.grid
    });
  }

  return (
    <div>
      <HeroVehicle />
      <div className="px-xl-5 container mt-4">
        <nav aria-label="breadcrumb" className="bg-custom-light rounded">
          <ol className="breadcrumb mb-0 py-3">
            <li className="breadcrumb-item">
              <Link
                className="text-decoration-none link-secondary"
                to="/products"
                replace
              >
                Vehicles
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              All Vehicles
            </li>
          </ol>
        </nav>

        <div className="h-scroller d-block d-lg-none">
          <nav className="nav h-underline">
            {categories.map((v, i) => {
              return (
                <div key={i} className="h-link me-2">
                  <Link
                    to="/vehicles"
                    className="btn btn-sm btn-outline-dark rounded-pill"
                    replace
                  >
                    {v}
                  </Link>
                </div>
              );
            })}
          </nav>
        </div>

        <div className="row d-block d-lg-none mb-3">
          <div className="col-12">
            <div id="accordionFilter" className="accordion shadow-sm">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button fw-bold collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFilter"
                    aria-expanded="false"
                    aria-controls="collapseFilter"
                  >
                    Filter Vehicles
                  </button>
                </h2>
              </div>
              <div
                id="collapseFilter"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFilter"
              >
                <div className="accordion-body p-0">
                  <FilterMenuLeft />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-lg-3 mb-4">
          <div className="d-none d-lg-block col-lg-3">
            <div className="rounded border shadow-sm">
              <FilterMenuLeft />
            </div>
          </div>
          <div className="col-lg-9">
            <div className="d-flex flex-column h-100">
              <div className="row mb-3">
                <div className="col-lg-3 d-none d-lg-block">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    defaultValue=""
                  >
                    {categories.map((categoty, index) => (
                      <option value="" key={index}>
                        {categoty}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-lg-9 col-xl-5 offset-xl-4 d-flex flex-row">
                  <div className="input-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Search Vehicles..."
                      aria-label="search input"
                    />
                    <button className="btn btn-dark"><i className="bi bi-search"></i></button>
                  </div>
                  <button
                    className="btn btn-dark ms-2 d-none d-lg-inline"
                    onClick={changeViewType}
                  >
                    <i className="bi bi-arrow-down-square"></i>
                  </button>
                </div>
              </div>
              <div
                className={
                  "row row-cols-1 row-cols-md-2 row-cols-lg-2 g-3 mb-4 flex-shrink-0 " +
                  (viewType.grid ? "row-cols-xl-3" : "row-cols-xl-2")
                }
              >

                {filteredVehicles.map((vehicle) => {
                  if (viewType.grid) {
                    return (
                      <div className="col" key={vehicle.vehicleNo}>
                        <div className="card shadow-sm">
                          <Link to={`/vehicles/${vehicle.vehicleId}`}>
                            <img
                              className="card-img-top bg-dark cover h-[300px] overflow-auto"
                              alt={vehicle.vehicleName}
                              src={vehicle.vehiclePhotoUrl}
                            />
                          </Link>
                          <div className="card-body">
                            <h5 className="card-title text-center text-dark text-truncate">
                              {vehicle.vehicleName}
                            </h5>
                            <p className="card-text text-center text-muted mb-0">{vehicle.priceForKm}</p>
                            <div className="d-grid d-block">
                              <Link to={`/vehicles/${vehicle.vehicleId}`} className="btn btn-outline-dark mt-3">
                                <button>
                                  View Details
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  else{
                    return (
                      <VehicleH key={vehicle.vehicleNo}/>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehicleList;
