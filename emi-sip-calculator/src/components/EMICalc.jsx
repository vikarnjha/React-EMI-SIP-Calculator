import React, { useState } from "react";
import { CalculateEMI } from "../utils/CalculateEMI.js";
import { ToastContainer, toast } from "react-toastify";

const EMICalc = () => {
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const totalMonths = Number(years) * 12 + Number(months); // Convert tenure to months
    const details = CalculateEMI(Number(principal), Number(rate), totalMonths);
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
        <label>Loan Tenure: </label>
        <input
          type="number"
          placeholder="Years"
          value={years}
          onChange={(e) => setYears(e.target.value)}
        />
        <input
          type="number"
          placeholder="Months"
          value={months}
          onChange={(e) => setMonths(e.target.value)}
        />
      </div>
      <button onClick={handleCalculate}>Calculate EMI</button>

      {result && (
        <div>
          <h2>Results:</h2>
          <p>Loan Amount: ₹{result.totalPrinciple}</p>
          <p>Monthly EMI: ₹{result.monthlyEMI}</p>
          <p>Total Interest: ₹{result.totalInterest}</p>
          <p>Total Amount Payable: ₹{result.totalAmount}</p>
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default EMICalc;
