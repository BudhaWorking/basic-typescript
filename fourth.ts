var addNumber = function(num1: number, num2: number){
	return num1 + num2;
}

var total = addNumber(4,5);
console.log(total);

var addMoreNumber = function(num1: number, num2: number=2){
	return num1+num2;
}
var sum = addMoreNumber(1,5)
console.log(sum);

var addManyMoreNumber = function(num1: number, num2: number=2, num3? : number){
	console.log("num1:", num1);
	console.log("num2:", num2);
	console.log("num3:", num3);
	if( num3 !== null){
		return num1+num2 +num3;
	}
	return num1+num2;
}
var newsum = addManyMoreNumber(1,2, 4)
console.log(newsum); 

function myRestParams(first, second, ...Others){
	console.log('first:'+first);
	console.log('second:'+second);
	console.log('Others:'+Others);
	return Others;
}
console.log('myRestParams:', myRestParams('abhi','aditya','scott','adam','colsom','gaurav'))

function sumnumber(...nums :number[]){
	for(var value of nums){
		console.log(value)
	}
}
sumnumber(["abhi", "shahi"])