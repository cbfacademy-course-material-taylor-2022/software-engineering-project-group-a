import AddWalletForm from "../components/AddWalletForm"

function NewWallet() {
  return (
    <div>
      <h1 style={{ color: "#095647", fontSize: "35px" }}> New Wallet</h1>
      <br></br>
        <AddWalletForm></AddWalletForm>
    </div>
  );
}

export default NewWallet;
