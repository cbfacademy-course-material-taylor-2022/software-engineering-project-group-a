import React, { createContext, useState } from "react";
import Dashboard from "./pages/Dashboard";
import FinanceChart from "./pages/FinanceChart";
import RecentTransactions from "./pages/RecentTransactions";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./App.css";
import HomeScreen from "./pages/Homescreen";

export const UserContext = createContext(null);

function App() {
  const [userToken, setUserToken] = useState(false);

  return (
    <BrowserRouter>
      {/* <Header></Header> */}
      <Sidebar>
        <Routes>
          <Route
            path="/"
            element={
              <HomeScreen userToken={userToken} setUserToken={setUserToken} />
            }
          />
          <Route
            path="/Dashboard"
            element={
              <Dashboard userToken={userToken} setUserToken={setUserToken} />
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
      {/* <Footer></Footer> */}
    </BrowserRouter>
  );
}

export default App;
