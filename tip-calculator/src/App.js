import { useState } from "react";
import TotalBill from "./Components/TotalBill";
import ResetButton from "./Components/ResetButton";
import ServiceRating from "./Components/ServiceRating";
import BillAmount from "./Components/BillAmount";

export default function App() {
  return (
    <div>
      <Bill />
    </div>
  );
}

function Bill() {
  const [amount, setAmount] = useState(0);
  const [ownTipPercentage, setOwnTipPercentage] = useState(0);
  const [friendTipPercentage, setFriendTipPercentage] = useState(0);

  function handleReset() {
    setAmount(0);
    setOwnTipPercentage(0);
    setFriendTipPercentage(0);
  }
  return (
    <div>
      <BillAmount amount={amount} setAmount={setAmount}></BillAmount>
      <ServiceRating
        tipPercentage={ownTipPercentage}
        setTipPercentage={setOwnTipPercentage}
      >
        How did you like the service?
      </ServiceRating>
      <ServiceRating
        tipPercentage={friendTipPercentage}
        setTipPercentage={setFriendTipPercentage}
      >
        How did your friend like the service?
      </ServiceRating>
      {amount > 0 && (
        <>
          <TotalBill
            amount={amount}
            ownTipPercentage={ownTipPercentage}
            friendTipPercentage={friendTipPercentage}
          ></TotalBill>
          <ResetButton onReset={handleReset} />
        </>
      )}
    </div>
  );
}
