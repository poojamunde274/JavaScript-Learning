console.log(`----------------------------------- Q. 1 ---------------------------------------`);

function graterNumber(num1, num2){
    var checkGretestNum = num1 >= num2;
    console.log(`${num1} is Greater than ${num2}: '${checkGretestNum}'`);

}
graterNumber(10, -10);
graterNumber(800,899);

console.log(`----------------------------------- Q. 2 ---------------------------------------`);

var isEvenOrOddNum = function(num){
    var evenOrOdd = num % 2 == 0 ? "Even" : "Odd";
    console.log(`The Number Is: '${num}' And Its '${evenOrOdd}'`);

}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);

console.log(`----------------------------------- Q. 3 ---------------------------------------`);

var wordLength = function(word){
    console.log(`The Word Is '${word}'`);
    var wordEvenOrOdd = word.length % 2 == 0 ? "Even" : "Odd";
    return wordEvenOrOdd;
}
var evenOrOdd = wordLength("Javascript");
console.log(`Its Even Or Odd Length Is: '${evenOrOdd}'`);

var evenOrOdd = wordLength("Developer");
console.log(`Its Even Or Odd Length Is: '${evenOrOdd}'`);

var evenOrOdd = wordLength("Google");
console.log(`Its Even Or Odd Length Is: '${evenOrOdd}'`);