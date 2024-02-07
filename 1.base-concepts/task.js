"use strict"
function solveEquation(a, b, c) {
  const arr = [];
  const d = b * b - 4 * a * c;
  if (d > 0) {
    const x1 = (-b + Math.sqrt(d)) / (2 * a);
    const x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1);
    arr.push(x2);
  } else if (d === 0) {
    const x = -b/(2*a);
    arr.push(x);
  }
    return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const arr = [];
  const monthlyPercent = percent /100 / 12;
  const loanBody = amount - contribution;
  const monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1)));;
  const totalAmount = monthlyPayment * countMonths;
  return +totalAmount.toFixed(2);
}
console.log(calculateTotalMortgage(10, 0, 50000, 12));
console.log(calculateTotalMortgage(10, 1000, 50000, 12));
console.log(calculateTotalMortgage(10, 0, 20000, 24));
console.log(calculateTotalMortgage(10, 1000, 20000, 24));
console.log(calculateTotalMortgage(10, 20000, 20000, 24));
console.log(calculateTotalMortgage(10, 0, 10000, 36));
console.log(calculateTotalMortgage(15, 0, 10000, 36));

