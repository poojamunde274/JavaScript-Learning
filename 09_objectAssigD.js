console.log(`================ Create One Object Professor Also include Nested Object And Also Add One Array =================`);

let professor = {
    name : "Pooja",
    age : 34,
    city : 'Pune',
    salary : 45000,
    subject : "JavaScript",
    degree : {
        engineering : 'CSC',
        PHD : 'Adv Computing',
        graduation : 'BCA'
    },
    certificates : [
        'Hacker Rank Participation',
        'Certificates In IFE Course',
        'Certificate In Adv Programming'
    ],
    totalExperience : '14 Years',
    completeObject : function(){
        console.log(`Complete Professor Details:`);
        console.log(`Name: ${this.name}, Age: ${this.age}, City: ${this.city}, Salary: ${this.salary}, Subject: ${this.subject},`);
        console.log(`Degree: ${this.degree.engineering}, ${this.degree.PHD}, ${this.degree.graduation}`);
        console.log(`Certificates: ${this.certificates}, Total Experience: ${this.totalExperience}`);
    }
}
console.log(professor);

// console.log(`=================================== 4. Add New Property Total Experience ====================================`);
// professor.totalExperience = '14 Years';
// console.log(professor.totalExperience);
console.log(`======================================= 5. Modify Property Name =============================================`);
professor.name = 'Pooja Munde';
console.log(professor);

console.log(`========================= 6. Add One Certificates at The 2nd Index using splice() =============================`);
professor.certificates.splice(2, 0,  'Oracle Certificate' );
console.log(professor.certificates);

console.log(`====================================== 7. Log Last Element Of Array =========================================`);
// const lastElement = professor.certificates.length -1;
const last = professor.certificates.slice(-1);
console.log(`${last}`);

console.log(`=================================== 8. Log complete Object On console ========================================`);
professor.completeObject();

console.log(`=================================== 9. Traverse Array Using For Of Loop =======================================`);

for (const iterator of professor.certificates) {
    console.log(iterator); 
}
