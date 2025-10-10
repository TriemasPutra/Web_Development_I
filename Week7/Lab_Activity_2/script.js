let oriArray = [1, 2, "Hi", "World"];
console.log("Original Array: " + oriArray);

console.log("Original Array Length: " + oriArray.length);

let newValue = ["We", "are", "new"];
let newArr = oriArray.concat(newValue);
console.log("Concated Array: " + newArr);

newValue.pop();
console.log("Popped Array: " + newValue);

newValue.push("back");
console.log("Pushed Array: " + newValue);

newValue.reverse();
console.log("ReversedArray: " + newValue);