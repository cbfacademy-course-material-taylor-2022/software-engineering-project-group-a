import { Link } from "react-router-dom";

function NotLoggedIn(props) {
  return (
    <div>
      <p>
        You cannot view this page as you are not logged in. Click here to Sign
        in:
        <hr></hr>
        <Link to="/">Back to Homepage</Link>
      </p>
    </div>
  );
}

export default NotLoggedIn;
