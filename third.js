var superHeros = [];
superHeros = [1, 2, 3];
superHeros.unshift(0);
console.log(superHeros);
superHeros.push(4);
console.log(superHeros);
console.log(superHeros.shift());
console.log(superHeros.pop());
var superGirl = ["mummy", "mother", "Usha"];
for (var index in superGirl) {
    console.log(index);
}
for (var _i = 0, superGirl_1 = superGirl; _i < superGirl_1.length; _i++) {
    var value = superGirl_1[_i];
    console.log(value);
}
var people = [];
people.push({ name: "abhi", city: "banglore" });
people.push({ name: "Alok", city: "banglore" });
people.push({ name: "Aoopva", city: "banglore" });
people.push({ name: "Shalini", city: "mumbai" });
console.log(people);
for (var i = 0; i < people.length; i++) {
    console.log(people[i]);
}
for (var value1 in people) {
    console.log(value1);
}
var count = [];
count = [9, 5, 8];
for (var _a = 0, count_1 = count; _a < count_1.length; _a++) {
    var value2 = count_1[_a];
    console.log(value2);
}
var sum = 123;
if (true) {
    var sum = 456;
}
var newSum = 567;
if (true) {
    var newSum_1 = 678;
}
var num = 5;
num = 6;
console.log("num:", num);
var PI = 3.14;
if (true) {
    var PI_1 = 4.56;
}
console.log(sum);
console.log(newSum);
console.log(PI);
