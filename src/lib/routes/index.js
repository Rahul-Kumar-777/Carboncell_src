import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { CONSOLE_MODE } from "../constants/constants";
import Page404 from "../pages/404Page";

export const RouteList = () => {
  if (CONSOLE_MODE.mode === "production") {
    console.log = () => {};
  }

  return (
    /* Application Routes to access pages */
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
