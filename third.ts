var superHeros :  number[] = [];

superHeros = [1,2,3];

superHeros.unshift(0);
console.log(superHeros);

superHeros.push(4);
console.log(superHeros);

console.log(superHeros.shift());

console.log(superHeros.pop());


var superGirl : string[] = ["mummy","mother","Usha"];
for(var index in superGirl){  // in return index number
	console.log(index);
}
for(var value of superGirl){   // of return index  value

	console.log(value);
}

var people : any[] = [];

people.push({name: "abhi", city:"banglore"})
people.push({name: "Alok", city:"banglore"})
people.push({name: "Aoopva", city:"banglore"})
people.push({name: "Shalini", city:"mumbai"})

console.log(people);
for(var i=0; i<people.length; i++){
	console.log(people[i]);
}

for(var value1 in people){  
	console.log(value1);
}

var count :  number[] = [];
count = [9,5,8];
for(var value2 of count){  
	console.log(value2);
}

var sum = 123;

if(true){
	var sum = 456;
}
let newSum = 567;
if(true){
	let newSum= 678;
}

let num =5;
num =6;
console.log("num:", num)

const PI = 3.14;

if(true){
	const PI = 4.56;
}

console.log(sum);
console.log(newSum);
console.log(PI);