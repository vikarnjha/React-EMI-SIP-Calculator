import React, { useState } from "react";
import { CalculateEMI } from "../utils/CalculateEMI.js";

const EMICalc = () => {
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [tenure, setTenure] = useState(0);
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const details = CalculateEMI(
      Number(principal),
      Number(rate),
      Number(tenure)
    );
    setResult(details);
  };

  return (
    <>
      <h1>Loan EMI Calculator</h1>
      <div>
        <label>Principal Amount: </label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
      </div>
      <div>
        <label>Annual Interest Rate (%): </label>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
      </div>
      <div>
        <label>Loan Tenure (Years): </label>
        <input
          type="number"
          value={tenure}
          onChange={(e) => setTenure(e.target.value)}
        />
      </div>
      <button onClick={handleCalculate}>Calculate EMI</button>

      {result && (
        <div>
          <h2>Results:</h2>
          <p>Monthly EMI: ₹{result.monthlyEMI}</p>
          <p>Total Principle: ₹{result.totalPrinciple}</p>
          <p>Total Interest: ₹{result.totalInterest}</p>
          <p>Total Amount Payable: ₹{result.totalAmount}</p>
        </div>
      )}
    </>
  );
};

export default EMICalc;
