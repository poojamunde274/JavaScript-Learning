function factorial(num) {
  let fact = 1;
    if (num == null && num == undefined) {
        console.log(`Invalid Input : ${num}`);   
    } else {
        for (let index = num; index >= 1; index--) {
            fact = fact * index; 
    }
    console.log(`Factorial Of ${num} is : ${fact}`);
  }
  
}
factorial(5);
factorial(3);
factorial(null);
factorial(8);
factorial(undefined);
factorial(9);
factorial(0);
