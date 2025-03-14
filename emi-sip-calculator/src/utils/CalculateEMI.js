import { ToastContainer, toast } from "react-toastify";
export function CalculateEMI(principal, rate, totalMonths) {
  if (principal <= 0) {
    toast.error("Please enter valid Amount");
    return;
  }
  if (rate <= 0) {
    toast.error("Rates cannot be negative or zero");
    return;
  }
  if (rate < 0) {
    toast.error("Interest rate cannot be negative");
    return;
  }
  if (totalMonths <= 0) {
    toast.error("Please enter a valid tenure.");
    return;
  }
  if (totalMonths > 60) {
    toast.error("Maximum loan tenure is 60 months");
    return;
  }

  if (rate > 100) {
    toast.error("Interest rate cannot be greater than 100%");
    return;
  }
  const monthlyRate = rate / 12 / 100;

  const monthlyEMI =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1);

  const totalInterest = monthlyEMI * totalMonths - principal;
  const totalAmount = principal + totalInterest;
  const totalPrinciple = principal;

  return {
    monthlyEMI: monthlyEMI.toFixed(2),
    totalPrinciple: totalPrinciple.toFixed(2),
    totalInterest: totalInterest.toFixed(2),
    totalAmount: totalAmount.toFixed(2),
  };
}
