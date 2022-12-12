import React from "react";
import Dashboard from "./pages/Dashboard";
import HomeScreen from "./pages/Homescreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header></Header> */}
        <div>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
        {/* <Footer></Footer> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
