export default function TotalBill({
  amount,
  ownTipPercentage,
  friendTipPercentage,
}) {
  const averageTipPercentage = (ownTipPercentage + friendTipPercentage) / 2;
  const tip = Math.round(amount * averageTipPercentage);
  const totalPayment = amount + tip;
  return (
    <h3>
      You pay ${totalPayment} (${amount} + ${tip} tip)
    </h3>
  );
}
