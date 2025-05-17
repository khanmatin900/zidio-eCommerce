// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/hero/HeroSection";
import CategoryLinks from "./components/hero/CategoryLinks";
import FeaturedProducts from "./components/hero/FeaturedProducts";
import Sidebar from "./components/admin/Sidebar";
import { RiMenuFold2Fill } from "react-icons/ri";
import AdminTopbar from "./components/admin/Topbar";
import Dashboard from "./components/admin/Dashboard";
import Analytics from "./components/admin/Analytics";
import Footer from "./components/admin/Footer";
import Customers from "./components/admin/Customers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import OTPVerificationPage from "./pages/OTPVerificationPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import "./App.css";


function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-lg bg-gray-800">
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/otp-verification" element={<OTPVerificationPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}


function App() {
	// const authToken = localStorage.getItem("authToken");
	// const userRole = localStorage.getItem("userRole");
	// const isAdmin = userRole === "admin";
	const [isOpen, setIsOpen] = useState(true);
	const authToken = true;
	const isAdmin = true;

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};
	return (
		<BrowserRouter>
			<div className="bg-gray-900 min-h-screen">
				{isAdmin && authToken ? (
					<div className="flex bg-gray-900 text-white">
						<Sidebar
							isOpen={isOpen}
							setIsOpen={setIsOpen}
							toggleSidebar={toggleSidebar}
						/>

						{/* Main Content */}
						<div className="flex-1 p-4  md:ml-0">
							<AdminTopbar toggleSidebar={toggleSidebar} />
							<Routes>
								<Route path="/" element={<Dashboard />} />
								<Route
									path="/admin/dashboard"
									element={<Sidebar />}
								/>
								<Route
									path="/admin/users"
									element={<Sidebar />}
								/>
								<Route
									path="/customers"
									element={<Customers />}
								/>
								<Route
									path="/analytics"
									element={<Analytics />}
								/>
								<Route
									path="/admin/logout"
									element={<Sidebar />}
								/>
							</Routes>
							<Footer/>
						</div>
					</div>
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
