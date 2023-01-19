import { Link } from "react-router-dom";
import NotLoggedIn from "../components/NotLoggedIn";

function FinanceChart(props) {
  return <div>{!props.userToken ? <NotLoggedIn /> : <FinanceDisplay />}</div>;
}

function FinanceDisplay() {
  return (
    <div>
      This is the user's Finance Chart. You are 'logged in'. <br></br>
      <Link to="/">Go back to the Home screen</Link>
    </div>
  );
}

export default FinanceChart;
