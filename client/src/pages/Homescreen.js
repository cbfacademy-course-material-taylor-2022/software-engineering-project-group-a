import React from "react";
import LoginForm from "../components/LoginForm";
import GetStarted from "../components/GetStarted";

function HomeScreen(props) {
  return (
    <div>
      <div>
        <h1
          style={{
            color: "#095647",
            fontSize: "35px",
            textAlign: "center",
          }}
        >
          Wollet
        </h1>
        <h2>This is the homepage</h2>
        {/* {props.userToken ? (
          <GetStarted />
        ) : (
          <LoginForm
            userToken={props.userToken}
            setUserToken={props.setUserToken}
            userDetails={props.userDetails}
            setUserDetails={props.setUserDetails}
          />
        )} */}
      </div>
    </div>
  );
}

export default HomeScreen;
