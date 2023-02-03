import { Link } from "react-router-dom";
import NotLoggedIn from "../components/NotLoggedIn";

function Dashboard(props) {
  return <div>{!props.userToken ? <NotLoggedIn /> : <DashboardDisplay />}</div>;
}

function DashboardDisplay() {
  return (
    <div>
      <h1 style={{ color: "#095647", fontSize: "35px" }}>Dashboard</h1>
      <div>
        Welcome to the Wollet Dashboard!<br></br>
        <p>
          {" "}
          Your one-stop shop for tracking, managing, and budgeting your money.
        </p>
        <p>
          Here, you can view your personalised 'pots' and see how much you have
          saved for each goal. Our app generates financial accountability
          reports so you can see your progress over time. Create new 'pots' to
          save for specific goals or edit existing ones. Keep track of your
          spending by setting spending limits and receiving custom notifications
          when you reach them. Want to set up a daily, weekly, or monthly report
          summarising your 'pots'? Simply click on the "Reports" button in the
          top right corner.
        </p>
        <p>
          Don't forget to check out our personalised profile section, where you
          can set your saving goals and budgeting plans.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
