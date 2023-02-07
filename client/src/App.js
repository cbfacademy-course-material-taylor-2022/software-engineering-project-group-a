import React, { useState } from "react";
import Dashboard from "./pages/Dashboard";
import FinanceChart from "./pages/FinanceChart";
import RecentTransactions from "./pages/RecentTransactions";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomeScreen from "./pages/Homescreen";
import Footer from "./components/Footer";
import Registration from "./pages/Registration";
import { Outlet } from "react-router-dom";

import "./App.css";
import LoginForm from "./components/LoginForm";

const SidebarLayout = () => (
  <>
    <Sidebar />
    <Outlet />
  </>
);

function App() {
  const [userToken, setUserToken] = useState(false);
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
    balance: "",
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
          <Route
            path="/Register"
            element={
              <Registration
                userToken={userToken}
                setUserToken={setUserToken}
                userDetails={userDetails}
                setUserDetails={setUserDetails}
              />
            }
          />
          <Route
            path="/Login"
            element={
              <LoginForm
                userToken={userToken}
                setUserToken={setUserToken}
                userDetails={userDetails}
                setUserDetails={setUserDetails}
              />
            }
          />
        </Routes>
      </Sidebar>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
