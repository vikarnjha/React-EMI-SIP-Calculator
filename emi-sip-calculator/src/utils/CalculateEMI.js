export function CalculateEMI(principal, rate, tenure) {
  const monthlyRate = rate / 12 / 100;
  const totalPayments = tenure * 12;

  const monthlyEMI =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
    (Math.pow(1 + monthlyRate, totalPayments) - 1);

  const totalInterest = monthlyEMI * totalPayments - principal;
  const totalAmount = principal + totalInterest;
  const totalPrinciple = principal;


  return {
    monthlyEMI: monthlyEMI.toFixed(2),
    totalPrinciple: totalPrinciple.toFixed(2),
    totalInterest: totalInterest.toFixed(2),
    totalAmount: totalAmount.toFixed(2),
  };
}
