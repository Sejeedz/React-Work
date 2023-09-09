export default function BillAmount({ amount, setAmount }) {
  return (
    <div>
      <label>How much was the bill? </label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      ></input>
    </div>
  );
}
