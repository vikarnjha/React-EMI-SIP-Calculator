import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import sip from "../assets/sip.png";
import emi from "../assets/emi.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* EMI Calculator here */}
      <div className="container" onClick={() => navigate("/emi-calculator")}>
        <h2 className="title">EMI Calculator</h2>
        <p className="description">
          Easily calculate your monthly loan EMI and total interest payable.
        </p>
        <img className="img" src={emi} alt="EMI Icon" loading="lazy" />
      </div>
      <br />
      {/* SIP Calculator here */}
      <div className="container" onClick={() => navigate("/sip-calculator")}>
        <h2 className="title">SIP Calculator</h2>
        <p className="description">
          Estimate your SIP returns and plan your investments effectively.
        </p>
        <img className="img" src={sip} alt="SIP Icon" loading="lazy" />
      </div>
    </>
  );
};

export default Home;
