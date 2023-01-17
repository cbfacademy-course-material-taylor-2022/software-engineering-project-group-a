import { Link } from "react-router-dom";

function RecentTransactions() {
  return (
    <div>
      This is the user's recent transactions Chart.<br></br>
      <Link to="/">Go back to the Home screen</Link>
    </div>
  );
}

export default RecentTransactions;
