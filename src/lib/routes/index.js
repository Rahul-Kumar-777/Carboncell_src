import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { CONSOLE_MODE } from "../constants/constants";

export const RouteList = () => {
    if(CONSOLE_MODE.mode === 'production'){
        console.log = ()=>{}
    }
  return (
    /* Application Routes to access pages */
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/organisation" element={<Home />} />
    </Routes>
  );
};
