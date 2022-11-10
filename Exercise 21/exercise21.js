// 21. Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.

const addString = function (stringP) {
  if (stringP.slice(0, 2).toLowerCase() != 'Py'.toLowerCase()) {
    return 'Py' + stringP;
  } else {
    return stringP;
  }
};

console.log(addString('word'));
console.log(addString('Pycat'));
