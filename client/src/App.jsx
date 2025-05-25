// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/hero/HeroSection";
import CategoryLinks from "./components/hero/CategoryLinks";
import FeaturedProducts from "./components/hero/FeaturedProducts";
import ProductListingPage from "./pages/ProductListingPage";
import ProductDetailPage from "./pages/ProductDetailPage";

const App = () => {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <HeroSection />
                <CategoryLinks />
                <FeaturedProducts />
              </main>
            }
          />
          <Route path="/products" element={<ProductListingPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
