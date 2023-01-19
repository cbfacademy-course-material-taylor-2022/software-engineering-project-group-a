import React, { useContext, useState } from "react";
import LoginForm from "../components/LoginForm";
import GetStarted from "../components/GetStarted";
// import { UserContext } from "../App";

function HomeScreen(props) {
  return (
    <div>
      <div>
        <p>Welcome to Wollet</p>
        <hr></hr>

        {props.userToken ? (
          <GetStarted />
        ) : (
          <LoginForm
            userToken={props.userToken}
            setUserToken={props.setUserToken}
          />
        )}
      </div>
    </div>
  );
}

export default HomeScreen;
