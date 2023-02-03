import NotLoggedIn from "../components/NotLoggedIn";

function RecentTransactions(props) {
  return <div>{!props.userToken ? <NotLoggedIn /> : <RTDisplay />}</div>;
}

function RTDisplay() {
  return (
    <div>
      <h1 style={{ color: "#095647", fontSize: "35px" }}>
        Recent Transactions
      </h1>
      <p>Welcome to the Recent Transactions section of Wollet!</p>
      <p>
        Here, you can view all your recent financial activity and keep track of
        your spending. To view your transactions in more detail, simply click on
        the "View Details" button next to each transaction. This will give you a
        breakdown of the transaction, including the date, amount, and category.
      </p>
      <p>
        Want to categorise your transaction? Click on "Edit category" button to
        give it a label; this will help you to organise your spending and
        budgeting.
      </p>
      <p>
        Want to see a specific date range of transactions? Use the "Filter by
        Date" feature to select the dates you want to view.
      </p>
      <p>
        Need to delete a transaction? Click on the "Delete" button next to the
        transaction you want to remove.{" "}
      </p>
      <p>
        Stay on top of your spending with Wollet's Recent Transactions feature.
        Start exploring now! These are your recent transactions.
      </p>
    </div>
  );
}

export default RecentTransactions;
