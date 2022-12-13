import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllProfiles } from "../services/profileService";

function HomeScreen() {
    
    const [profiles, setProfiles] = useState(null);


    useEffect(() => {
    async function getProfiles() {
        if (!profiles) {
        const response = await getAllProfiles();
        setProfiles(response);
        }
    }

        getProfiles();
    }, [profiles]);

    const renderProfile = (user) => {
        return (
        <li key={user._id}>
            Username: {user.username} <br></br>
            Password: {user.password} <br></br>
            Currency: {user.currency}
        </li>
        );
    };

    return(
        <div>
            <h4>Here are the profiles currently being returned by the database.</h4>
            <ul>
                {profiles && profiles.length > 0 ? (
                profiles.map((profile) => renderProfile(profile))
                ) : (
                <p>No profiles found</p>
                )}
            </ul>
            <div>
                <p>This page will serve as our Welcome / Home screen, but for now; Here is a faux Login button:</p>
                <p>Clicking the 'login' button below, should take you to the user's signed in, dashboard.</p>
                    <hr></hr>
                <p>Username:</p>
                <input></input>
                <p>Password:</p>
                <input></input>
                <div>
                    <button><Link to="/dashboard">Login / Go to Dashboard</Link></button>
                </div>
            </div>
            
        </div>
    )
}

export default HomeScreen;