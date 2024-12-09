// splice 1st parameter: index, 2nd parameter: how many elements to remove, 3rd parameter: new elements to add

const fruits = ['apple', 'banana', 'orange', 'mango', 'lemon','mango'];
// fruits.splice(2, 4, 'grapes');
// 2 element will be removed startying from index 2
// console.log(fruits);

const mangoFound=fruits.find(value=> value === 'mango');
const mangoFilter=fruits.filter(fruit=>fruit === 'mango').map(fruit=>fruit.toUpperCase());

console.log(mangoFound);
console.log(mangoFilter);
// console.log(mangoMap);