import { toast } from "react-toastify";
export function CalculateSIP(monthlyInvestment, rate, totalMonths) {
  if (monthlyInvestment <= 0) {
    toast.error("Please enter valid Amount");
    return;
  }
  if (rate <= 0) {
    toast.error("Rates cannot be negative or zero");
    return;
  }
  if (rate > 100) {
    toast.error("Interest rate cannot be greater than 100%");
    return;
  }
  if (totalMonths <= 0) {
    toast.error("Please enter a valid tenure.");
    return;
  }
  const monthlyRate = rate / 12 / 100;
  //   const totalMonths = totalMonths;
  let totalInvestment = monthlyInvestment * totalMonths;
  let totalReturns = 0;
  for (let i = 1; i <= totalMonths; i++) {
    totalReturns += monthlyInvestment * Math.pow(1 + monthlyRate, i);
  }
  let totalInterest = totalReturns - totalInvestment;
  let totalWealth = totalReturns;
  let totalLTCGtax = 0;
  if (totalInterest > 100000) {
    totalLTCGtax = (totalInterest - 100000) * 0.1;
    totalWealth = totalReturns - totalLTCGtax;
  } else {
    totalLTCGtax = 0;
    totalWealth = totalInvestment + totalInterest;
  }
  return {
    totalInvestment: totalInvestment.toFixed(2),
    totalInterest: totalInterest.toFixed(2),
    totalLTCGtax: totalLTCGtax.toFixed(2),
    totalWealth: totalWealth.toFixed(2),
  };
}
