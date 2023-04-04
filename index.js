// function expression called divide
const divide = function() {
    return 2000 / 100;
  }
  
  // arrow function called square
  const square = (num) => {
    return num * num;
  }
  
  // arrow function called add
  const add = (num1, num2) => {
    return num1 + num2;
  }
  
  module.exports = {
    divide,
    square,
    add
  };
  