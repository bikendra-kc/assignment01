function primeFactors(num) {
    let factors = [];
    let divisor = 2;
  
    while (num >= 2) {
      if (num % divisor == 0) {
        factors.push(divisor);
        num = num / divisor;
      } else {
        divisor++;
      }
    }
  
    return factors;
  }
  