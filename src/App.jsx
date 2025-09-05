import React, { createContext, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "@/index.css";
import ResetPassword from "@/components/pages/ResetPassword";
import PromptPassword from "@/components/pages/PromptPassword";
import Signup from "@/components/pages/Signup";
import LandingPage from "@/components/pages/LandingPage";
import ErrorPage from "@/components/pages/ErrorPage";
import Callback from "@/components/pages/Callback";
import CheckoutPage from "@/components/pages/CheckoutPage";
import { clearUser, setUser } from "@/store/userSlice";

const AuthContext = createContext();

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const authMethods = {
    user,
    setUser: (userData) => dispatch(setUser(userData)),
    clearUser: () => dispatch(clearUser()),
    navigate
  };

  return (
    <AuthContext.Provider value={authMethods}>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/prompt-password/:appId/:emailAddress/:provider" element={<PromptPassword />} />
        <Route path="/reset-password/:appId/:fields" element={<ResetPassword />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        className="mt-16"
      />
    </AuthContext.Provider>
  );
}

export default App;