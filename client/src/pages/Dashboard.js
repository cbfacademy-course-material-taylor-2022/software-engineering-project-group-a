import { Link } from "react-router-dom";
import NotLoggedIn from "../components/NotLoggedIn";

function Dashboard(props) {
  return <div>{!props.userToken ? <NotLoggedIn /> : <DashboardDisplay />}</div>;
}

function DashboardDisplay() {
  return (
    <div>
      This is the user's dashboard. You are 'logged in'. <br></br>
      <Link to="/">Go back to the Home screen</Link>
    </div>
  );
}

export default Dashboard;
