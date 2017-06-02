var addNumber = function (num1, num2) {
    return num1 + num2;
};
var total = addNumber(4, 5);
console.log(total);
var addMoreNumber = function (num1, num2) {
    if (num2 === void 0) { num2 = 2; }
    return num1 + num2;
};
var sum = addMoreNumber(1, 5);
console.log(sum);
var addManyMoreNumber = function (num1, num2, num3) {
    if (num2 === void 0) { num2 = 2; }
    console.log("num1:", num1);
    console.log("num2:", num2);
    console.log("num3:", num3);
    if (num3 !== null) {
        return num1 + num2 + num3;
    }
    return num1 + num2;
};
var newsum = addManyMoreNumber(1, 2, 4);
console.log(newsum);
function myRestParams(first, second) {
    var Others = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        Others[_i - 2] = arguments[_i];
    }
    console.log('first:' + first);
    console.log('second:' + second);
    console.log('Others:' + Others);
    return Others;
}
console.log('myRestParams:', myRestParams('abhi', 'aditya', 'scott', 'adam', 'colsom', 'gaurav'));
function sumnumber() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    for (var _a = 0, nums_1 = nums; _a < nums_1.length; _a++) {
        var value = nums_1[_a];
        console.log(value);
    }
}
sumnumber(["abhi", "shahi"]);
