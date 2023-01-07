import React, { createContext } from "react";
import Dashboard from "./pages/Dashboard";
import HomeScreen from "./pages/Homescreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

export const UserContext = createContext(null);

function App() {
  const userDetails = {
    userID: "",
    username: "",
    userToken: false,
    setID: (id) => {
      userDetails.userID = id;
    },
    setUname: (name) => {
      userDetails.username = name;
    },
    setUserToken: () => {
      userDetails.userToken = !userDetails.userToken;
    },
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <UserContext.Provider value={userDetails}>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/dashboard/:id" element={<Dashboard />} />
          </Routes>
        </UserContext.Provider>
        {/* <Footer></Footer> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
