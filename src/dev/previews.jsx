import React from "react";
import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";
import App from "../App";
import Navbar from "../components/hero/Hero";
import Hero from "../components/hero/Hero";
import LocationGrid from "../components/grid/LocationGrid";
import LocationDetailsPage from "../pages/locations/LocationDetailPage";
import TestScreens from "../test/TestScreens";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/App">
        <App />
      </ComponentPreview>
      <ComponentPreview path="/App">
        <App />
      </ComponentPreview>
      <ComponentPreview path="/Navbar">
        <Navbar />
      </ComponentPreview>
      <ComponentPreview path="/Hero">
        <Hero />
      </ComponentPreview>
      <ComponentPreview path="/LocationGrid">
        <LocationGrid />
      </ComponentPreview>
      <ComponentPreview path="/LocationDetailsPage">
        <LocationDetailsPage />
      </ComponentPreview>
      <ComponentPreview path="/TestScreens">
        <TestScreens />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
