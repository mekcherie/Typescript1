// Currently the function below uses a string for
// for the type of monster. Better to use an enum
// since monsters are only: lizard, flying, ape
// Define an enum for monster type
var MonsterType;
(function (MonsterType) {
    MonsterType[MonsterType["ape"] = 0] = "ape";
    MonsterType[MonsterType["lizard"] = 1] = "lizard";
    MonsterType[MonsterType["flying"] = 2] = "flying";
})(MonsterType || (MonsterType = {}));
// Add the types here and use the enum for type. 
function rampage(name, type, power, city) {
    var action;
    switch (type) {
        case MonsterType.ape:
            action = 'smash';
            break;
        case MonsterType.lizard:
            action = 'burn';
            break;
        case MonsterType.flying:
            action = 'flap';
            break;
    }
    var result = name + " " + action + " over " + city + " causing " + power * 10000 + " damage!";
    return result;
}
// Use the enum here when calling the rampage function
console.log(rampage('Gojira', MonsterType.lizard, 90, 'tokyo'));
console.log(rampage('Mothra', MonsterType.flying, 40, 'Fresno'));
console.log(rampage('Kong', MonsterType.ape, 88, 'New York'));
