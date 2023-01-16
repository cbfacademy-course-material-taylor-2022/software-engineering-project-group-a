import React, { useContext, useState } from "react";
import LoginForm from "../components/LoginForm";
import GetStarted from "../components/GetStarted";
// import { UserContext } from "../App";

function HomeScreen(props) {
  return (
    <div>
      <div>
        <p>This page will serve as our Welcome / Home screen.</p>
        <p>
          Clicking the 'login' button below, should take you to the user's
          signed in, dashboard.
        </p>
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
