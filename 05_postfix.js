var a = 5;
var b = a++;
console.log(`a : ${a}`);
console.log(`b : ${b}`);
console.log(`--------------------------------------------------------`);

var n1 = 5;
var res = n1++ + ++n1 + n1++;
console.log(`n1 : ${n1}`);
console.log(`res : ${res}`);
console.log(`--------------------------------------------------------`);

var a = 2;
var b = ++a + ++a + a++ - --a;
console.log(`a: ${a}`);
console.log(`b: ${b}`);
console.log(`--------------------------------------------------------`);

var a = 4;
var b = --a + ++a + ++a + a++;
console.log(`a: ${a}`);
console.log(`b: ${b}`);
