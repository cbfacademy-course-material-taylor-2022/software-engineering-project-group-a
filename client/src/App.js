import React, { useState } from "react";
import Dashboard from "./pages/Dashboard";
import FinanceChart from "./pages/FinanceChart";
import RecentTransactions from "./pages/RecentTransactions";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomeScreen from "./pages/Homescreen";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [userToken, setUserToken] = useState(false);
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
    money: "",
    id: "",
  });

  return (
    <BrowserRouter>
      <Sidebar userToken={userToken} setUserToken={setUserToken}>
        <Routes>
          <Route
            path="/"
            element={
              <HomeScreen
                userToken={userToken}
                setUserToken={setUserToken}
                userDetails={userDetails}
                setUserDetails={setUserDetails}
              />
            }
          />
          <Route
            path="/Dashboard"
            element={
              <Dashboard
                userToken={userToken}
                setUserToken={setUserToken}
                userDetails={userDetails}
              />
            }
          />
          <Route
            path="/FinanceChart"
            element={
              <FinanceChart userToken={userToken} setUserToken={setUserToken} />
            }
          />
          <Route
            path="/RecentTransactions"
            element={
              <RecentTransactions
                userToken={userToken}
                setUserToken={setUserToken}
              />
            }
          />
          <Route path="/About" element={<About />} />
        </Routes>
      </Sidebar>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
