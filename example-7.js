// Use the enum type to define the suit for 
// a playing card. 
// Below define the ace. It should have a suit
// and a value. 
var Suit;
(function (Suit) {
    Suit[Suit["heart"] = 0] = "heart";
    Suit[Suit["spade"] = 1] = "spade";
    Suit[Suit["diamond"] = 2] = "diamond";
    Suit[Suit["flower"] = 3] = "flower";
})(Suit || (Suit = {}));
var ace = {
    suit: Suit.heart,
    value: 7
};
// Compile the code and check what type script says: 
// tsc example-7.ts
