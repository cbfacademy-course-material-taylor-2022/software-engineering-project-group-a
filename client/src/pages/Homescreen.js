import React, { useContext, useState } from "react";
import LoginForm from "../components/LoginForm";
import GetStarted from "../components/GetStarted";
// import { UserContext } from "../App";

function HomeScreen(props) {
  return (
    <div>
      <div>
        <p> Welcome to Wollet App - your personal finance solution. With our easy-to-use interface, managing your money has never been simpler. Create personalised 'pots' to save for specific goals like a rainy day fund or a house deposit. 
Track your spending with our financial accountability reports and stay on top of your finances with custom notifications. Our app makes it easy for you to see how much you have in each 'pot' at a glance.

Create your financial profile and secure authorisation for added peace of mind. With Wollet, you can set and reach your savings goals with ease.

Take control of your finances today. Download Wollet App and start managing your money the smart way. Sign up for free and start creating your personalised 'pots' now.

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
