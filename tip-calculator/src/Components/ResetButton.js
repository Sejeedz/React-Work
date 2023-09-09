export default function ResetButton({ onReset }) {
  return (
    <div>
      <button type="reset" onClick={onReset}>
        Reset
      </button>
    </div>
  );
}
