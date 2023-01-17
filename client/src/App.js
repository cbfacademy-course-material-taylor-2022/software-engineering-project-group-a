import React from "react";
import Dashboard from "./pages/Dashboard";
import FinanceChart from "./pages/FinanceChart";
import RecentTransactions from "./pages/RecentTransactions";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./App.css";
// import HomeScreen from "./pages/HomeScreen";

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/FinanceChart" element={<FinanceChart />} />
          <Route path="/RecentTransactions" element={<RecentTransactions />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Sidebar>
      {/* <Footer></Footer> */}
    </BrowserRouter>
  );
}

export default App;
