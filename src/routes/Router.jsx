import React, { useEffect, useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import UserFeed from "../pages/userFeed/UserFeed";
import LandingPage from "../pages/landingPage/LandingPage";
import ClientRoutes from "./PrivateRoutes/ClientRoutes";
import PublicRoute from "./PublicRoutes/PublicRoute";
import Content from "../pages/Content/Content";

const Router = () => {
  const  userRole  = false;


  return (
    <BrowserRouter>
      <Routes>
        <Route  element={<PublicRoute userRole={userRole} />}>
          <Route index path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Route>
        <Route element={<ClientRoutes userRole={userRole} />}>
          <Route path="/user" element={<UserFeed />} />
          <Route path="/content" element={<Content />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
