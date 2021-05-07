
// Use the enum type to define the suit for 
// a playing card. 
// Below define the ace. It should have a suit
// and a value. 

enum Suit {
    heart, spade, diamond, flower
}

type Card = { suit: Suit, value: number }

const ace: Card = {
    suit: Suit.heart,
    value: 7
}

// Compile the code and check what type script says: 
// tsc example-7.ts