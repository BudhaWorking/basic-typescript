class Animal{
	name: string;
	type: string;

	constructor(name: string, type: string){

		this.name= name;
		this.type = type;
	}

	food(message){
		return message;
	}
}

var cow = new Animal('Cow', 'Domestic');

console.log(cow);
console.log(cow.food(1))

var emp1 = "abhi";
var emp2 = "abhi";

console.log(emp1== emp2);
console.log(emp1=== emp2);
console.log(Object.is(emp1, emp2));
console.log(JSON.stringify(emp1) === JSON.stringify(emp2));