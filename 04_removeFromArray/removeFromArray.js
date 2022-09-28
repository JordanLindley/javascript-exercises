const removeFromArray = function(array, ...itemsRemoved) {
  // Identify index(es) of itemsRemoved
  // Array.splice() the identified indexes
  itemsRemoved.forEach((item) => {
    const index = array.indexOf(item);
    if (index > -1) {
      array.splice(index, 1);
    }
  });
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
