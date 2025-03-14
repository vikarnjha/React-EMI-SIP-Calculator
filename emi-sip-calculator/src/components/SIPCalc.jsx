import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { CalculateSIP } from "../utils/CalculateSIP";
import { CalculateLumpSum } from "../utils/CalculateLumpSum";
import "./Component.css";

const SIPCalc = () => {
  const [action, setAction] = useState("Monthly");
  const [monthlyInvestment, setMonthlyInvestment] = useState(100);
  const [lumpsumInvestment, setLumpsumInvestment] = useState(1000);
  const [rate, setRate] = useState(10);
  const [timeInYears, setTimeInYears] = useState(5);
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const totalMonths = Number(timeInYears) * 12;

    const details =
      action === "Monthly"
        ? CalculateSIP(Number(monthlyInvestment), Number(rate), totalMonths)
        : CalculateLumpSum(
            Number(lumpsumInvestment),
            Number(rate),
            Number(timeInYears)
          );

    if (!details) return;
    setResult(details);
    toast.success(
      `${
        action === "Monthly" ? "SIP" : "Lumpsum"
      } Investment Calculated Successfully`
    );
  };

  const resetFields = () => {
    setMonthlyInvestment(100);
    setLumpsumInvestment(1000);
    setRate(10);
    setTimeInYears(5);
    setResult(null);
  };

  return (
    <>
      <div className="container">
        <h1>
          {action === "Monthly" ? "SIP Calculator" : "Lumpsum Calculator"}
        </h1>
        <div className="action-buttons">
          <button
            className={action === "Monthly" ? "active" : ""}
            onClick={() => {
              setAction("Monthly");
              resetFields(); // Call the reset function when switching to Monthly
            }}
          >
            Monthly
          </button>
          <button
            className={action === "Lumpsum" ? "active" : ""}
            onClick={() => {
              setAction("Lumpsum");
              resetFields(); // Call the reset function when switching to Lumpsum
            }}
          >
            Lumpsum
          </button>
        </div>

        <div className="input-group">
          <label>
            {action === "Monthly"
              ? "Monthly Investment:"
              : "Lumpsum Investment:"}
          </label>
          <input
            type="number"
            value={action === "Monthly" ? monthlyInvestment : lumpsumInvestment}
            onChange={(e) => {
              let value = e.target.value.replace(/^0+/, "");
              if (!isNaN(value)) {
                action === "Monthly"
                  ? setMonthlyInvestment(value)
                  : setLumpsumInvestment(value);
              }
            }}
          />
        </div>

        <div className="input-group">
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
            Calculate {action === "Monthly" ? "SIP" : "Lumpsum"}
          </button>
        </div>
        {result && (
          <div className="result-box">
            <h2 className="result-title">
              {action === "Monthly"
                ? "SIP Calculation Results"
                : "LumpSum Calculation Results"}
            </h2>

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
