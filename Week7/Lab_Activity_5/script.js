let newBtn = document.createElement("button");
newBtn.innerHTML = "Click Me!";

let myDiv = document.getElementById("myDiv");
let para = document.getElementById("paragraph");

myDiv.removeChild(para);
myDiv.appendChild(newBtn);

let input = document.createElement("input");
input.type = "text";

myDiv.replaceChild(input, newBtn);

document.write("You can now type in the input box!");