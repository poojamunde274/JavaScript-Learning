
const fruits_Seasonal =["Banana", "Orange", "Apple", "Mango", "water_Melon"];
console.log(fruits_Seasonal);

let firstFruit = fruits_Seasonal[0];
let lastFruit = fruits_Seasonal[4];
console.log(`1.`);
console.log(`First Element of Array is: ${firstFruit} `);
console.log(`Last Element of Array is : ${lastFruit}`);
console.log(`-----------------------------------------------------------------------------------------------------`);

console.log(`2. Add Papaya Before Banana.`);
fruits_Seasonal.unshift("Papaya");
console.log(fruits_Seasonal);
console.log(`-------------------------------------------------------------------------------------------------------`);

console.log(`3. Remove Mango From Array.`);
let removeMango =fruits_Seasonal.splice(4, 1);
console.log(removeMango);
console.log(fruits_Seasonal);
console.log(`--------------------------------------------------------------------------------------------------------`);

console.log(`4. Add Pineapple at last index.`);
fruits_Seasonal.push("Pineapple");
console.log(fruits_Seasonal);
console.log(`---------------------------------------------------------------------------------------------------------`);

console.log(`5. Insert Dragon Fruit before Water_melon.`);
fruits_Seasonal.splice(4, 0 , "Dragon_Fruit");
console.log(fruits_Seasonal);
console.log(`----------------------------------------------------------------------------------------------------------`);

console.log(`6. Replace "Orange" with "kiwi".`);
console.log(fruits_Seasonal);
fruits_Seasonal.splice(2, 1 , "Kiwi");
console.log(fruits_Seasonal);
console.log(`-----------------------------------------------------------------------------------------------------------`);

console.log(`7. Index Starting From 1 To 4.`);
let sliceResult = fruits_Seasonal.slice(1, 5);
console.log(sliceResult);
console.log(`------------------------------------------------------------------------------------------------------------`);

console.log(`8. Select Last 3 Elements using Length Property`);
let sliceRes = fruits_Seasonal.slice(4, 8);
console.log(sliceRes);


