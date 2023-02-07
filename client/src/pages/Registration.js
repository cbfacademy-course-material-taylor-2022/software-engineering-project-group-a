import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpUser, signInUser } from "../services/profileService";
import "../App.css";

export default function Registration(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [balance, setBalance] = useState(0.0);

  const navigate = useNavigate();

  function handleInputChange(event) {
    event.preventDefault();
    if (event.target.name === "username") {
      setUsername(event.target.value);
    }
    if (event.target.name === "password") {
      setPassword(event.target.value);
    }
    if (event.target.name === "balance") {
      setBalance(event.target.value);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const signupresult = await signUpUser(username, password, balance);

    if (signupresult === "success") {
      alert("Account Successfully Created");

      const result = await signInUser(username, password);
      if (typeof result === "string") {
        alert(result);
      } else {
        console.log(result);
        console.log(result.username + " is logged in.");

        props.setUserToken(true);
        props.setUserDetails(result);
        navigate("/Dashboard");
      }
    } else {
      alert("Something went wrong, please try again.");
    }
  }

  return (
    <div style={{ margin: "auto" }}>
      <h1 style={{ color: "#095647" }}>Register</h1>
      <p>
        Welcome to Wollet App - your personal finance solution. With our
        easy-to-use interface, managing your money has never been simpler.
      </p>

      <form className="register-wrapper">
        <label>
          <p style={{ margin: "0" }}>Username:</p>
          <input
            class="loginInput"
            name="username"
            placeholder="Username"
            type="text"
            onChange={handleInputChange}
          ></input>
        </label>
        <label>
          <p style={{ margin: "0" }}>Password:</p>
          <input
            class="loginInput"
            name="password"
            placeholder="Password"
            type="password"
            onChange={handleInputChange}
          ></input>
        </label>
        <label>
          <p style={{ margin: "0" }}>Starting Balance:</p>
          <input
            class="loginInput"
            name="balance"
            placeholder="0.00"
            type="number"
            step=".01"
            onChange={handleInputChange}
          ></input>
        </label>
        <div style={{ margin: "auto" }}>
          <button class="registerButton" type="submit" onClick={handleSubmit}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
