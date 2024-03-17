console.log(`-------------------- Implicit Conversion To String ---------------------`);

var result;
result = '3' + 2;
console.log(`The Result Is: '${result}'`); 

result = '3' + true;
console.log(`The Result Is: '${result}'`); 

result = '3' + undefined;
console.log(`The Result Is: '${result}'`); 

result = '3' + null;
console.log(`The Result Is: '${result}'`); 

console.log(`-------------------- Implicit Boolean Conversion To Number ---------------------`);

var result;
result = '4' - true;
console.log(`Result Of '4' - true Is : ${result}`);

result = 4 + true;
console.log(`Result Of 4 + true Is : ${result}`);

result = 4 + false;
console.log(`Result Of 4 + false Is : ${result}`);

console.log(`-------------------- Implicit String Conversion To Number ---------------------`);
var result;
result = '4' - '2';
console.log(`Result Of '4' - '2' Is : ${result}`);

result = '4' - 2;
console.log(`Result Of '4' - 2 Is : ${result}`);

result = '4' * 2;
console.log(`Result Of '4' * 2 Is : ${result}`);

result = '4' / 2;
console.log(`Result Of '4' / 2 Is : ${result}`);

console.log(`------------ Undefined Used With Number, Boolean Or Null Given NaN ------------`);

var result;
result = 4 + undefined;
console.log(`Result Of 4 + undefined Is : ${result}`);

result = 4 - undefined;
console.log(`Result Of 4 - undefined Is : ${result}`);

result = true + undefined;
console.log(`Result Of true + undefined Is : ${result}`);

result = null + undefined;
console.log(`Result Of null + undefined Is : ${result}`);

console.log(`---------------------------- Explicit Conversion ------------------------------`);
console.log(`----------- String To Number Conversion ------------`);
result = Number('324');
console.log(`Conversion Of Number('324') Is :  ${result}`);

result = Number('324e-1');
console.log(`Conversion Of Number('324e-1') Is :  ${result}`);

console.log(`----------- Boolean To Number Conversion ------------`);

result = Number(true);
console.log(`Conversion Of Number(true) Is : ${result}`);

result = Number(false);
console.log(`Conversion Of Number(false) Is : ${result}`);

console.log(`----------- Invalid String To Number ------------`);

var result;
result = Number('hello');
console.log(`Invalid String To Number 'Number('hello')' Is : ${result}`);

result = Number(undefined);
console.log(`Invalid String To Number 'Number(undefined)' Is : ${result}`);

result = Number(NaN);
console.log(`Invalid String To Number 'Number(NaN)' Is : ${result}`);