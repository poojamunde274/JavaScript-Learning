class Vehicle{
    constructor(name, company, number, color, fuelType){
        this.name = name;
        this.company = company;
        this.number = number;
        this.color = color;
        this.fuelType = fuelType;
    }
    vehicleDetails(){
        console.log(`Vehicle Details => Name: ${this.name}, Company: ${this.company}, Number: ${this.number}, Color: ${this.color}, FuelType: ${this.fuelType}`);
    }
}

const jupiter = new Vehicle("Jupiter", "TVS", 258754653, "White", "Petrol");
jupiter.vehicleDetails();

const activa = new Vehicle("Activa", "Honda", 765432653, "Black", "Petrol");
activa.vehicleDetails();

const tigor = new Vehicle("Tigor", "Tata", 543765463, "Gray", "Petrol+CNG");
tigor.vehicleDetails();

const nexon = new Vehicle("Nexon", "Tata", 987654342, "White", "Diesel");
nexon.vehicleDetails();

const thar = new Vehicle("Thar", "Mahindra", 2765243653, "Black", "Diesel");
thar.vehicleDetails();

console.log(`-------------------------------------Q.1 Traverse Array Of Vehicle -----------------------------------------`);

const arrayOfVehicle = [jupiter, activa, tigor, nexon, thar];
for (const element of arrayOfVehicle) {
    element.vehicleDetails();
    console.log(`---------------------------------------------------------------------------------------------------------`);
}

console.log(`--------------------------------------------- Q.2 -------------------------------------------------`);

class College {
    collegeName
    city
    pincode
    totalStudent
    constructor(collegeName, city, pincode, totalStudent){
        this.collegeName = collegeName;
        this.city = city;
        this.pincode = pincode;
        this.totalStudent = totalStudent; 
    }
    display(){
        console.log(`College Details: College Name: ${this.collegeName}, City: ${this.city}, Pincode: ${this.pincode}, Total Student: ${this.totalStudent}`);
    }
}
const college1 = new College("ABC College", "Pune", 411057, 9765433421);
college1.display();

const college2 = new College("CCS College", "Mumbai", 413065, 4326454321);
college2.display();

const college3 = new College("IIT College", "Bangalore", 414054, 974322431);
college3.display();

const college4 = new College("IBMR College", "Satara", 417045, 456254321);
college4.display();