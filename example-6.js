var snack1 = ['Cookies', 142];
var snack2 = ['Avocado', 234];
var snack3 = ['Banana', 105];
function displayNutrition(food) {
    console.log("Item: " + food[0] + " Calories: " + food[1]);
}
console.log(displayNutrition(snack1));
console.log(displayNutrition(snack2));
console.log(displayNutrition(snack3));
// Compile the code and check what type script says: 
// tsc example-6.ts
