// Hoisting en variables
/*var nameOfDog = "Mila";

console.log(nameOfDog); // undefined
var nameOfDog = "Mila";
console.log(nameOfDog); */ // undefined

// Hoisting en funciones

var dog;
function nameOfDog() {
  console.log(`El mejor perrito es ${dog}`);
}
nameOfDog();


var dog = 'Mila';


