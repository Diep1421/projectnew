import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import DefaultLayout from "../layout/DefaultLayout.jsx";

export default function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  );
}
