
class Student{
    constructor(rollNumber, name, division){
        this.rollNumber = rollNumber;
        this.name = name;
        this.division = division;
    }
    getDetail(){
        console.log(`Student Detail => Roll Number : ${this.rollNumber},  Name : ${this.name}, Division : ${this.division}`);
    }
}

const pooja = new Student( 234, "Pooja", "A");
pooja.getDetail();

const jenny = new Student( 264, "Jenny", "A+");
jenny.getDetail();

const Elon = new Student( 134, "Elon", "B");
Elon.getDetail()