var character = { 
 name: "Ricardo", 
 age: 32,
 hair: "red"
};
character["hair"] = "red";

for (x in character) {
    console.log("Keys: " + x);
    console.log("Value: " + character[x]);
}
console.log("=====")
for (x in character) {
    console.log(x + ": " + character[x]);
}