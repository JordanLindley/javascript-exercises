const findTheOldest = function(people) {
  return people.reduce((older, current) => {
    const oldestPerson = getAge(older.yearOfBirth, older.yearOfDeath);
    const currentPerson = getAge(current.yearOfBirth, current.yearOfDeath);
    return oldestPerson < currentPerson ? current : older;
  })
};

const getAge = (birth, death) => {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
