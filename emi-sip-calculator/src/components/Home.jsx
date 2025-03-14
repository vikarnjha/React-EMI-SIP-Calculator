import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import EMICalc from "./EMICalc";
import SIPCalc from "./SIPCalc";
import "./Home.css";
import sip from "../assets/sip.png";
import emi from "../assets/emi.png";

const Home = () => {
  return (
    <>
      {/* EMI Calculator here */}
      <div className="container">
        <h2 className="title">EMI Calculator</h2>
        <p className="description">
        Calculate EMI on your loans - home loan, car loan or personal loan
        </p>
        <img className="img" src={emi} alt="EMI Icon" loading="lazy" />
      </div>
      <br />
      {/* SIP Calculator here */}
      <div className="container">
        <h2 className="title">SIP Calculator</h2>
        <p className="description">
          Calculate how much you need to save or how much you will accumulate
          with your SIP
        </p>
        <img className="img" src={sip} alt="SIP Icon" loading="lazy" />
      </div>
    </>
  );
};

export default Home;
