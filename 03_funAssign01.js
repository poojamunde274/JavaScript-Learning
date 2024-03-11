console.log("---------------------------------------- Q.1. -----------------------------------------");
function fullName(){
    console.log("My Full Name Is Pooja Munde.");
}
fullName();

console.log("-----------------------------------------------------------");
function education(){
    console.log("My Education Is BCA.");
}
education();

console.log("---------------------------------------- Q.2. -----------------------------------------");
function personalDetails(firstName, lastName, collegeName){
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("College Name:", collegeName);
}
personalDetails("Pooja", "Munde","College Of Computer Science Wakad." );

console.log("---------------------------------------- Q.3. -----------------------------------------");
function swapValues(value1, value2){
    console.log("Before Swap Value:", value1, value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After Swap Value:", value1, value2);
}
swapValues("Virat", "Anushka");
console.log("---------------------------------------------------------");
swapValues(1000, 2000);

console.log("---------------------------------------- Q.3. -----------------------------------------");
function addThreeValues(val1, val2, val3){
    console.log("Values Are:", val1, val2, val3);
    var res = val1 + val2 + val3;
    console.log("Addition Is:", res);
}
addThreeValues(10.23, 600, 40);
addThreeValues("Hello", "Good", "Morning");
