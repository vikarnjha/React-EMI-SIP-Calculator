import React, { useState } from "react";
import "./EMICalc.css";
import { CalculateEMI } from "../utils/CalculateEMI.js";
import { ToastContainer, toast } from "react-toastify";

const EMICalc = () => {
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [result, setResult] = useState(null);
  const [downpayment, setDownpayment] = useState(0);


  const handleCalculate = () => {
    const totalMonths = Number(years) * 12 + Number(months);
    const details = CalculateEMI(Number(principal), Number(rate), totalMonths);

    if (!details) return;
    setResult(details);
    toast.success("EMI Calculated Successfully");
  };

  return (
    <div className="container">
      <h1>Loan EMI Calculator</h1>

      <div className="input-group">
        <label>Principal Amount:</label>
        <input
          type="number"
          value={principal}
          onChange={(e) => {
            let value = e.target.value.replace(/^0+/, "");
            if (!isNaN(value)) setPrincipal(value);
          }}
        />
      </div>

      <div className="input-group">
        <label>Downpayment:</label>
        <input
          type="number"
          value={downpayment}
          onChange={(e) => {
            let value = e.target.value.replace(/^0+/, "");
            if (!isNaN(value)) setDownpayment(value);
          }}
        />
      </div>

      <div className="input-group">
        <label>Annual Interest Rate (%):</label>
        <input
          type="number"
          value={rate}
          onChange={(e) => {
            let value = e.target.value.replace(/^0+/, "");
            if (!isNaN(value)) setRate(value);
          }}
        />
      </div>

      <div className="input-group">
        <label>Loan Tenure:</label>
        <div className="tenure-inputs">
          <div className="tenure-box">
            <span>Years</span>
            <input
              type="number"
              min="0"
              placeholder="Years"
              value={years}
              onChange={(e) => {
                let value = e.target.value.replace(/^0+/, "");
                if (!isNaN(value) && value >= 0) setYears(value);
              }}
            />
          </div>
          <div className="tenure-box">
            <span>Months</span>
            <input
              type="number"
              min="0"
              max="11"
              placeholder="Months"
              value={months}
              onChange={(e) => {
                let value = e.target.value.replace(/^0+/, "");
                if (!isNaN(value) && value >= 0 && value <= 11)
                  setMonths(value);
              }}
            />
          </div>
        </div>
      </div>

      <button className="calculate-btn" onClick={handleCalculate}>
        Calculate EMI
      </button>

      {result && (
        <div className="result-box">
          <h2 className="result-title">EMI Calculation Results</h2>

          <div className="result-item">
            <p>
              Loan Amount: <span>₹{result.totalPrinciple}</span>
            </p>
          </div>

          <div className="result-item">
            <p>
              Monthly EMI: <span>₹{result.monthlyEMI}</span>
            </p>
          </div>

          <div className="result-item">
            <p>
              Total Interest: <span>₹{result.totalInterest}</span>
            </p>
          </div>

          <div className="result-item">
            <p>
              Total Amount Payable: <span>₹{result.totalAmount}</span>
            </p>
          </div>

          <p className="gst-text">
            18% GST is applicable on the Total Interest
          </p>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default EMICalc;
