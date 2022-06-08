import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function VehicleH() {
  const { vehicles } = useSelector((state) => state.vehicles);

  return (
    <div className="col">
      {vehicles.map((vehicle) => (
        <div className="card shadow-sm" key={vehicle.vehicleNo}>
          <div className="row g-0">
            <div className="col-4">
              <Link to={`/vehicles/${vehicle.vehicleId}`}>
                <img
                  className="rounded-start bg-dark cover w-100 h-100"
                  alt=""
                  src={vehicle.vehiclePhotoUrl}
                />
              </Link>
            </div>
            <div className="col-8">
              <div className="card-body h-100">
                <div className="d-flex flex-column h-100">
                  <h5 className="card-title text-dark text-truncate mb-1">
                    {vehicle.vehicleName}
                  </h5>
                  <span className="card-text text-muted mb-2 flex-shrink-0">
                  {vehicle.vehicleType}
                </span>
                  <div className="mt-auto d-flex">
                    <Link to={`/vehicles/${vehicle.vehicleId}`} className={"btn btn-outline-dark ms-auto"}>
                      <button>
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VehicleH;
