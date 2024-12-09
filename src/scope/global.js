// variables

var a; // declaration
var b = 'b'; // declaration / assignation
b = 'bb'; // reassignation
var a = 'aa'; // redeclaration


// Global Scope

// Example 1
var fruit = 'Apple'; // global
console.log(fruit);

function bestFruit() {
  console.log(fruit);
}

bestFruit();


// Example 2 
function countries() {
  country = 'Colombia'; // global
  console.log(country);
}

countries();
console.log(country);