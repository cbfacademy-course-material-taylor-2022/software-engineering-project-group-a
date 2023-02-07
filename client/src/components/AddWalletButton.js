import {useNavigate } from "react-router-dom";

export default function AddWalletButton() {
      const navigate = useNavigate () 
  return (
    <div>
   
      <button class=" " onClick={() => navigate("/newwallet")}>
           Add your New Wallet
      </button>
    </div>
  );
}

