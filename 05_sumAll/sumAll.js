const sumAll = function(num1, num2) {
  // Create a variable to hold the final sum.
  let finalSum = 0;
  // if num1 is greater than num2, swap them.
  if (num1 > num2) {
    const temp = num1;
    num1 = num2;
    num2 = temp;
  }

  // Create conditional where function returns 'ERROR' with negative or NaN numbers.
  if (num1 < 0 || num2 < 0) return 'ERROR';
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) return 'ERROR' 

  // Loop through given numbers.
  for (i = num1; i <= num2; i++) {
        // add the looped number to the finalSum.
        finalSum += i;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
