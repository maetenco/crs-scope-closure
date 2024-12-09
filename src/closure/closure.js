function greeting() {
  let userName = "Marianela";

  function displayUserName() {
    return `Hello ${userName}`;
  }
  return displayUserName;
}

const g = greeting();
console.log(g);
console.log(g());