import React from "react";
import LocationCard from "../card/LocationCard";
import { useSelector } from "react-redux";

const LocationGrid = () => {
  const { loading, locations } = useSelector((state) => state.locations);

  return (
    <section className="snap-center" id="location-grid">
      <div>
        {loading === "pending" ? (
          "loading"
        ) : (
          <div>
            <LocationCard locations={locations} />
          </div>
        )}
      </div>
    </section>
  );
};

export default LocationGrid;
