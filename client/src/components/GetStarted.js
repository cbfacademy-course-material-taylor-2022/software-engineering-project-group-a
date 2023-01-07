import { Link } from "react-router-dom";

export default function GetStarted(props) {
  return (
    <div>
      <p>You're logged in!</p>
      <p>Click here to get started!</p>
      <button>
        <Link to={`/dashboard/${props.userID}`}>Go to your Dashboard</Link>
      </button>
    </div>
  );
}
