import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInUser } from "../services/profileService";
import "./ComponentStyling.css";

export default function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleInputChange(event) {
    event.preventDefault();
    if (event.target.name === "username") {
      setUsername(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
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
  }

  return (
    <div>
      <h1 style={{ color: "#095647" }}>Login</h1>

      <form className="login-wrapper">
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
        <div style={{ margin: "auto", width: "max-content" }}>
          <button class="loginButton" type="submit" onClick={handleSubmit}>
            Login
          </button>
        </div>
        <div style={{ margin: "auto", width: "max-content" }}>
          <button
            class="loginButton"
            type="submit"
            onClick={() => navigate("/Register")}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
