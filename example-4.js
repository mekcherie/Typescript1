// Set the types here. There are two arrays below
// The first should be type number
// The second should type string
// Add the types for the function and other variables
var nums = [];
var chars = [];
function random(n) {
    return Math.floor(Math.random() * n);
}
function randomChar() {
    return String.fromCharCode(random(26) + 97);
}
for (var i = 0; i < 6; i += 1) {
    nums.push(random(100));
    chars.push(randomChar());
}
console.log(nums);
console.log(chars);
// Compile the code and check what type script says: 
// tsc example-4.ts
