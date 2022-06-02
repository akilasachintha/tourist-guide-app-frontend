import React from "react";
import HeroLocation from "../../components/hero/HeroLocation";
import LocationGrid from "../../components/grid/LocationGrid";

const Location = () => {
  return (
    <main className="snap-y snap-mandatory flex-col-reverse justify-end scroll-smooth">
      <HeroLocation />
      <LocationGrid />
    </main>
  );
};

export default Location;
