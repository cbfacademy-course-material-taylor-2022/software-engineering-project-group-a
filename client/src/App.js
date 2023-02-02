import React, { createContext, useState } from "react";
import Dashboard from "./pages/Dashboard";
import FinanceChart from "./pages/FinanceChart";
import RecentTransactions from "./pages/RecentTransactions";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomeScreen from "./pages/Homescreen";
import Footer from "./components/Footer";
import HelpPage from "./pages/HelpPage";
import "./App.css";

export const UserContext = createContext(null);

function App() {
  const [userToken, setUserToken] = useState(false);

  return (
    <BrowserRouter>
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
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
