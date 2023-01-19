import { Link } from "react-router-dom";
import NotLoggedIn from "../components/NotLoggedIn";

function RecentTransactions(props) {
  return <div>{!props.userToken ? <NotLoggedIn /> : <RTDisplay />}</div>;
}

function RTDisplay() {
  return (
    <div>
      These are your recent transactions. You are 'logged in'. <br></br>
      <Link to="/">Go back to the Home screen</Link>
    </div>
  );
}

export default RecentTransactions;
