import { Link } from "react-router-dom";
import NotLoggedIn from "../components/NotLoggedIn";

function Dashboard(props) {
  return <div>{!props.userToken ? <NotLoggedIn /> : <DashboardDisplay />}</div>;
}

function DashboardDisplay() {
  return (
    <div>

<div>
Welcome to the Wollet Dashboard!<br></br>
      <p> Your one-stop shop for tracking, managing, and budgeting your money. Your one-stop shop for tracking, managing, and budgeting your money.
      <br></br>
      <br></br>
      Here, you can view your personalised 'pots' and see how much you have saved for each goal. Our app generates financial accountability reports so you can see your progress over time.
Create new 'pots' to save for specific goals or edit existing ones. Keep track of your spending by setting spending limits and receiving custom notifications when you reach them.
Want to set up a daily, weekly, or monthly report summarising your 'pots'? Simply click on the "Reports" button in the top right corner.

<br></br>
<br></br>
Don't forget to check out our personalised profile section, where you can set your saving goals and budgeting plans.
<br></br>
<br></br>
Download Wollet app now and start managing your finances. Ready to take control of your finances?</p>

      <Link to="/">Go back to the Home screen</Link>
    </div>
      This is the user's dashboard. You are 'logged in'. <br></br>
      <Link to="/">Go back to the Home screen</Link>
    </div>
  );
}

export default Dashboard;
