// helpers.js

// Function: receivesAFunction
// Parameters: callback (Function)
// Description: Calls the provided callback function
function receivesAFunction(callback) {
    callback();
  }
  
  // Function: returnsANamedFunction
  // Returns: A named function
  function returnsANamedFunction() {
    return function namedFunction() {
      // Function body
    };
  }
  
  // Function: returnsAnAnonymousFunction
  // Returns: An anonymous function
  function returnsAnAnonymousFunction() {
    return function() {
      // Function body
    };
  }
  
  module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction
  };
  