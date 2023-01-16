import React, { createContext, useState } from "react";
import Dashboard from "./pages/Dashboard";
import HomeScreen from "./pages/Homescreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

export const UserContext = createContext(null);

function App() {
  const [userToken, setUserToken] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        {/* <UserContext.Provider value={userDetails}> */}
        <Routes>
          <Route
            path="/"
            element={
              <HomeScreen userToken={userToken} setUserToken={setUserToken} />
            }
          />
          <Route path="/dashboard/:id" element={<Dashboard />} />
        </Routes>
        {/* </UserContext.Provider> */}
        {/* <Footer></Footer> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
