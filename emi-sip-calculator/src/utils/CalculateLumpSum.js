import { toast } from "react-toastify";
export function CalculateLumpSum(lumpsumInvestment, rate, totalMonths){
    if (lumpsumInvestment <= 0) {
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
      const totalRate = rate / 100;
      let totalInvestment = lumpsumInvestment;
      let totalInterest = lumpsumInvestment * Math.pow(1 + totalRate, totalMonths) - lumpsumInvestment;
      let totalWealth = lumpsumInvestment * Math.pow(1 + totalRate, totalMonths);
      let totalLTCGtax = 0;
      if (totalInterest > 100000) {
        totalLTCGtax = (totalInterest - 100000) * 0.1;
        totalWealth = totalWealth - totalLTCGtax;
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
