function totalFine(fare) {
  if (typeof fare !== 'number' || fare <= 0) {
    return 'Invalid';
  }
  const fine = (fare * 20) / 100;

  const totalAmount = fare + fine + 30;

  return totalAmount;
}

console.log(totalFine(200));