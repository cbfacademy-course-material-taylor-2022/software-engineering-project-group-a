import { Link } from "react-router-dom";
import NotLoggedIn from "../components/NotLoggedIn";

function FinanceChart(props) {
  return <div>{!props.userToken ? <NotLoggedIn /> : <FinanceDisplay />}</div>;
}

function FinanceDisplay() {
  return (
    <div>
      <h1 style={{ color: "#095647", fontSize: "35px" }}>Your Finance</h1>
      <p>
        Take control of your finances with Wollet App - your personal finance
        partner. Create personalised 'pots' to save for specific goals, track
        your spending with financial accountability reports and secure
        authorisation for added peace of mind.
        <br></br>
        <br></br>
        Our app generates financial accountability reports and sends custom
        notifications to help you stay on top of your spending. Whether it's a
        daily, weekly, or monthly report, you'll always know how much you have
        in each 'pot'.
        <br></br>
        <br></br>
        Create your financial profile and secure authorisation for added peace
        of mind. With Wollet, you can set and reach your savings goals with
        ease. So what are you waiting for? Sign up today and take control of
        your finances with Wollet.
        <br></br>
        <br></br>
      </p>
    </div>
  );
}

export default FinanceChart;
