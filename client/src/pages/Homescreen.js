import React, { useContext, useState } from "react";
import LoginForm from "../components/LoginForm";
import GetStarted from "../components/GetStarted";
import { UserContext } from "../App";

// SERVICES THAT CALL OUR API ENDPOINTS
// import { getAllProfiles } from "../services/profileService";

function HomeScreen() {
  //   const [profiles, setProfiles] = useState(null);
  //   const [token, setToken] = useState(false);
  //   const [userID, setUserID] = useState();

  const { userToken } = useContext(UserContext);

  //   useEffect(() => {
  //     async function getProfiles() {
  //       if (!profiles) {
  //         const response = await getAllProfiles();
  //         setProfiles(response);
  //       }
  //     }
  //     getProfiles();
  //   }, [profiles]);

  //   const renderProfile = (user) => {
  //     return (
  //       <li key={user._id}>
  //         Username: {user.username} <br></br>
  //         Password: {user.password} <br></br>
  //         Currency: {user.currency}
  //       </li>
  //     );
  //   };

  return (
    <div>
      {/* <div>
        <h4>Here are the profiles currently being returned by the database.</h4>
        <ul>
          {profiles && profiles.length > 0 ? (
            profiles.map((profile) => renderProfile(profile))
          ) : (
            <p>No profiles found</p>
          )}
        </ul>
      </div> */}

      <div>
        <p>This page will serve as our Welcome / Home screen.</p>
        <p>
          Clicking the 'login' button below, should take you to the user's
          signed in, dashboard.
        </p>
        <hr></hr>

        {userToken ? <GetStarted /> : <LoginForm />}
      </div>
    </div>
  );
}

export default HomeScreen;
