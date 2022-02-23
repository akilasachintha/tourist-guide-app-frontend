import React from "react";
import ActionAreaCard from "./dashboardItem/ActionAreaCard";
import { Grid } from "@mui/material";

const DashboardComponent = () => {
  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 1 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        align="center"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={4} sm={4} md={4}>
          <ActionAreaCard name="Location" src="/images/img-home.jpg" path="/dashboard/location"/>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <ActionAreaCard name="Hotels" src="/images/img-6.jpg" path="/dashboard/hotel"/>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <ActionAreaCard name="Vehicles" src="/images/img-8.jpg"/>
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardComponent;
