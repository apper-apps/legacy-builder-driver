import React from "react";
import { Routes, Route } from "react-router-dom";
import CheckoutPage from "@/components/pages/CheckoutPage";
import { ToastContainer } from "react-toastify";
import LandingPage from "@/components/pages/LandingPage";

function App() {
  return (
    <>
      <Routes>
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
    </>
  );
}

export default App;