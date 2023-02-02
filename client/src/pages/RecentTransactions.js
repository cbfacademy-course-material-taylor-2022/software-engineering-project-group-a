import { Link } from "react-router-dom";
import NotLoggedIn from "../components/NotLoggedIn";

function RecentTransactions(props) {
  return <div>{!props.userToken ? <NotLoggedIn /> : <RTDisplay />}</div>;
}

function RTDisplay() {
  return (
    <div>


      Welcome to the Recent Transactions section of Wollet! Here, you can view all your recent financial activity and keep track of your spending.

To view your transactions in more detail, simply click on the "View Details" button next to each transaction. This will give you a breakdown of the transaction, including the date, amount, and category.

Want to categorise your transaction? Click on "Edit category" button to give it a label; this will help you to organise your spending and budgeting.

Want to see a specific date range of transactions? Use the "Filter by Date" feature to select the dates you want to view.

Need to delete a transaction? Click on the "Delete" button next to the transaction you want to remove.

Stay on top of your spending with Wollet's Recent Transactions feature. Start exploring now!

These are your recent transactions. You are 'logged in'. <br></br>
      <Link to="/">Go back to the Home screen</Link>
    </div>
  );
}

export default RecentTransactions;
