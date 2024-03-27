const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11]
console.log(`Given Array Is : ${arrayNumbers} `);

console.log(`---------------------------------------------------------------------------------`);
let lengthArray = arrayNumbers.length;
console.log(`Length Of Array Numbers Is : ${lengthArray}`);

console.log(`---------------------------------------------------------------------------------`);
let firstElement = arrayNumbers[0];
let lastElement = arrayNumbers.slice(-1);
console.log(`First Elements Is: ${firstElement}`);
console.log(`Last Elements Is: ${lastElement}`);

console.log(`---------------------------------------------------------------------------------`);
let thirdLastElement = arrayNumbers [arrayNumbers.length - 3];
// let thirdLastElementIs = thirdLastElement;
console.log(`The Third Last Element in Array: ${thirdLastElement}`);

console.log(`---------------------------------------------------------------------------------`);
console.log(`All Even Number From Array.`);
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element % 2 == 0) {
      console.log(element);
    }
  }

  console.log(`---------------------------------------------------------------------------------`);
  console.log(`All Odd Number From Array.`);
for (let index = 0; index < arrayNumbers.length; index++) {
      const element = arrayNumbers[index];
      if (element % 2 == 1) {
      console.log(element);
    }
  }

  console.log(`---------------------------------------------------------------------------------`);
  console.log(`All Even index Position From Array.`);
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index % 2 == 0) {
      const element = arrayNumbers[index];
      console.log(element);
    }
    
  }
  
  console.log(`---------------------------------------------------------------------------------`);  
  console.log(`All Odd index Position From Array.`);
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index % 2 == 1) {
      const element = arrayNumbers[index];
      console.log(element);
    }
  }

  console.log(`---------------------------------------------------------------------------------`);
  console.log(`Sum of all number from array`);
sumOfNum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    sumOfNum = sumOfNum + element; 
}
console.log(sumOfNum);

  console.log(`---------------------------------------------------------------------------------`); 
  console.log(`Multiple of 5 Numbers`);
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element % 5 == 0) {
    console.log(element);
  }
}

  console.log(`---------------------------------------------------------------------------------`);
  console.log(`115 Number is available in array:`);
let isAvailable =  arrayNumbers.includes(115);
console.log(isAvailable); 

console.log(`---------------------------------------------------------------------------------`);
console.log(`23 Number is available in array:`);
let availableNum =  arrayNumbers.includes(23);
console.log(availableNum);

console.log(`---------------------------------------------------------------------------------`);
console.log(`Insert Numbers 55 66 before index 3`);
arrayNumbers.splice(3, 0, 55, 66);
console.log(arrayNumbers);

console.log(`---------------------------------------------------------------------------------`);
console.log(`Delete 3 elements starting from index 4 `);
let deletElement = arrayNumbers.splice(4, 3);
console.log(deletElement);
console.log(arrayNumbers);