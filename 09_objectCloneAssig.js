
const bankSbi = {
    bankName: "SBI",
    accountNo: 12345678943,
    IFSC: "SBIN000045",
    branch: "Hinjewadi"
}
console.log(`1. Create 'bankSbi' Object`);
console.log(bankSbi);

console.log(`-------------------------------------------------------------------------------------------------------`);


const bankLocation ={
    street: "Vashi",
    city: "Mumbai",
    pin: 411058
}

console.log(`2. Create 'bankLocation' Object`);
console.log(bankLocation);

console.log(`-----------------------------------------------------------------------------------------------------------`);

console.log(`3. Clone 'bankSbi' And 'bankLocation' Object Using 'object.assign()' Method And Log.`);
const cloneObject = Object.assign({}, bankSbi, bankLocation);
console.table(cloneObject);

// const cloneObj = Object.assign({}, bankLocation);
// console.table(cloneObj);

console.log(`-----------------------------------------------------------------------------------------------------------`);
console.log(`4. Create 'rateOfInterest' Object`);
const rateOfInterest = {
    homeLoneInterest: 9.5,
    personalLoneInterest: 12.5,
    dueInterest: 7.5
}
console.log(rateOfInterest);

console.log(`-----------------------------------------------------------------------------------------------------------`);
console.log(`5. Merge bankSbi, bankLocation, & rateOfInterest in New Object And Log. `);
const sbiDetails = Object.assign({}, bankSbi, bankLocation, rateOfInterest)
console.table(sbiDetails);

console.log(`-----------------------------------------------------------------------------------------------------------`);
console.log(`6. Traverse sbiDetails Object Using for in Loop And Log Details.`);

// for (const index in sbiDetails) {

//     console.log(sbiDetails[index]);

// }

for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(element);
    }
}
