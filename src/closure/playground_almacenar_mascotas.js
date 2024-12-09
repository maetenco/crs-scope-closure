export function createPetList() {
  let list = [];
  function addPetToList(pet) {
    if (pet === undefined) {
      return list;
    } else {
      list.push(pet);
    }
  }
  return addPetToList;
}

const myPetList = createPetList();

myPetList("michi");

myPetList("firulais");

myPetList();
console.log(myPetList());