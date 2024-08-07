import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [precentage1, setPrecentage1] = useState(0);
  const [precentage2, setPrecentage2] = useState(0);

  const tip = bill * ((precentage1 + precentage2)/2 /100);

  function handleReset() {
    setBill("");
    setPrecentage1(0);
    setPrecentage2(0);
  }
  
  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage precentage={precentage1} onSelect={setPrecentage1} > How did you like the service ? </SelectPercentage>
      <SelectPercentage precentage={precentage2} onSelect={setPrecentage2} >
        {" "}
        How did your friend like this service ?{" "}
      </SelectPercentage>
      {bill > 0 && <>
      <Output bill={bill} tip={tip}> How did your friend like this service ? </Output>
      <Reset onReset={handleReset}/> 
      </>
      }
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill ? </label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children, precentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select 
      value={precentage}
      onChange={(e) => onSelect(Number(e.target.value))}
      
      >
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">It was okay(5%)</option>
        <option value="10">Good(10%)</option>
        <option value="20">Absoulutly amazing(20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return <h3> You Pay {bill + tip } (${bill} + ${tip} tip)</h3>;
}

function Reset({onReset}) {
  return (
  <button onClick={onReset}> Reset </button>
);
}
