const fibonacci = function(num) {
  // set behavior for negative numbers
  if (num < 0) {
    return 'OOPS';
  }

  // create an array called fibonacci
  const fibonacci = [0, 1];
  
  // algorithm: take the index of the last num in array, add it to the fibonacci[fibonacci.length - 2].
  // array.push() the result to fibonnaci.
  // loop up to the parameter number entered and return fibonacci[fibonacci.length - 1].
  for (let i = 0; i <= num - 2; i++) {
    let nextNumber = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    fibonacci.push(nextNumber);
  }
  return fibonacci[fibonacci.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
