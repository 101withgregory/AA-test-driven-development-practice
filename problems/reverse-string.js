module.exports = function reverseString(string) {
  // Your code here
  if (typeof string !== 'string') {
    throw new TypeError;
  }
 let reversed = string.split("").reverse().join("");
 return reversed;
 

};

