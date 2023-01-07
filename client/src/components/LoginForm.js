import { useContext, useState } from "react";
import { UserContext } from "../App";
import { signInUser } from "../services/profileService";

export default function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setID, setUname, setUserToken } = useContext(UserContext);

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
      console.log(result.username + " is logged in.");

      setID(result._id);
      setUserToken(true);
      setUname(result.username);
    }
  }

  return (
    <form className="login-wrapper">
      <label>
        <p>Username:</p>
        <input
          name="username"
          placeholder="Username"
          type="text"
          onChange={handleInputChange}
        ></input>
      </label>
      <label>
        <p>Password:</p>
        <input
          name="password"
          placeholder="Password"
          type="password"
          onChange={handleInputChange}
        ></input>
      </label>
      <div>
        <button type="submit" onClick={handleSubmit}>
          {/* <Link to="/dashboard">Login / Go to Dashboard</Link> */}
          Login
        </button>
      </div>
    </form>
  );
}
