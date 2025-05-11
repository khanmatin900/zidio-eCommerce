// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/hero/HeroSection";
import CategoryLinks from "./components/hero/CategoryLinks";
import FeaturedProducts from "./components/hero/FeaturedProducts";
import Sidebar from "./components/admin/Sidebar";

function App() {
  // const authToken = localStorage.getItem("authToken");
  // const userRole = localStorage.getItem("userRole");
  // const isAdmin = userRole === "admin";
  const authToken=true
  const isAdmin=true
  return (
    <BrowserRouter>
      <div className="bg-gray-900 min-h-screen">
        {isAdmin && authToken ? (
          <>
            <Sidebar />
            <Routes>
              {/* <Route path="/admin" element={<Sidebar />} />
              <Route path="/admin/dashboard" element={<Sidebar />} />
              <Route path="/admin/users" element={<Sidebar />} />
              <Route path="/admin/products" element={<Sidebar />} />
              <Route path="/admin/analytics" element={<Sidebar />} />
              <Route path="/admin/logout" element={<Sidebar />} /> */}
            </Routes>
          </>
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <HeroSection />
                    <CategoryLinks />
                    <FeaturedProducts />
                  </>
                }
              />
            </Routes>
          </>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
