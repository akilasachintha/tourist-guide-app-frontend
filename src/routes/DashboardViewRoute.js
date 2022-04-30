import React from 'react';
import {Outlet} from "react-router-dom";

const DashboardViewRoute = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default DashboardViewRoute;
