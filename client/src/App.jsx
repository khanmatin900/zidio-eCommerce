// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold">Welcome to Shop.com</h1>
      </div>
    </div>
  );
}

export default App;
