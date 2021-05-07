
// Define a person

class Person {
	name: string
	age: number

	constructor(name:Person["name"] , age: Person["age"]) {
		this.name = name 
		this.age = age
	}
}

const joe = new Person('Joe', 33)
