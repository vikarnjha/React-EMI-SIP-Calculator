import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { CalculateSIP } from "../utils/CalculateSIP";
import "./Component.css";

const SIPCalc = () => {
  const [action, setAction] = useState("Monthly");
  const [monthlyInvestment, setMonthlyInvestment] = useState(100);
  const [rate, setRate] = useState(10);
  const [timeInYears, setTimeInYears] = useState(5);
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const totalMonths = Number(timeInYears) * 12;
    const details = CalculateSIP(
      Number(monthlyInvestment),
      Number(rate),
      totalMonths
    );

    if (!details) return;
    setResult(details);
    toast.success("SIP Calculated Successfully");
  };

  return (
    <>
      <div className="container">
        <h1>SIP Calculator</h1>
        <div className="action-buttons">
          <button
            className={action === "Monthly" ? "active" : ""}
            onClick={() => setAction("Monthly")}
          >
            Monthly
          </button>
          <button
            className={action === "Lumpsum" ? "active" : ""}
            onClick={() => setAction("Lumpsum")}
          >
            Lumpsum
          </button>
        </div>

        <div className="input-group">
          <label>Monthly Investment:</label>
          <input
            type="number"
            value={monthlyInvestment}
            onChange={(e) => {
              let value = e.target.value.replace(/^0+/, "");
              if (!isNaN(value)) setMonthlyInvestment(value);
            }}
          />
          <label>Expected Return Rate (%):</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => {
              let value = e.target.value.replace(/^0+/, "");
              if (!isNaN(value)) setRate(value);
            }}
          />
          <label>Time Period (Years):</label>
          <input
            type="number"
            value={timeInYears}
            onChange={(e) => {
              let value = e.target.value.replace(/^0+/, "");
              if (!isNaN(value)) setTimeInYears(value);
            }}
          />
          <button className="calculate-btn" onClick={handleCalculate}>
            Calculate SIP
          </button>
        </div>
        {result && (
          <div className="result-box">
            <h2 className="result-title">SIP Calculation Results</h2>

            <div className="result-item">
              <p>
                Total Investment: <span>₹{result.totalInvestment}</span>
              </p>
            </div>

            <div className="result-item">
              <p>
                Total Interest: <span>₹{result.totalInterest}</span>
              </p>
            </div>

            <div className="result-item">
              <p>
                Total LTCG Tax: <span>₹{result.totalLTCGtax}</span>
              </p>
            </div>

            <div className="result-item">
              <p>
                Total Maturity: <span>₹{result.totalWealth}</span>
              </p>
            </div>

            <p className="note-text">
              ₹1 lakh exemption on LTCG applies per financial year; gains beyond
              this are taxed at 10%
            </p>
          </div>
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default SIPCalc;
