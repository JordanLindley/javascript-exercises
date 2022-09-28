const reverseString = function(string) {
  const stringToArray = string.split('');
  const reverseString = stringToArray.reverse().join('');
  return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
