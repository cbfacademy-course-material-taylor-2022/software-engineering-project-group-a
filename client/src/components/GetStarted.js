import "./ComponentStyling.css";
import { useNavigate } from "react-router-dom";

export default function GetStarted(props) {
  const navigate = useNavigate();

  return (
    <div>
      <p>You're logged in!</p>
      <p>Click here to get started!</p>
      <button class="loginButton" onClick={() => navigate("/Dashboard")}>
        Go to your Dashboard
      </button>
    </div>
  );
}
