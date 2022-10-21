const palindromes = function (string) {
  const reg = /[\W_]/g;
  string = string.toLowerCase().replace(reg, '');
// USING ARRAY METHODS
  const reversed = string.split('').reverse().join('');
  if (reversed !== string) return false;

  return true;

// USING A FOR LOOP 
  // const opposite = string.length - 1
  // for (let i = 0; i < opposite - i; i++) {
  //   if (string[i] !== string[opposite - i]) {
  //     return false;
  //   }
  // }

  // return true;
};

// Do not edit below this line
module.exports = palindromes;
