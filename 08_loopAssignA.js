console.log(`---------------------------- Q.N0. 1 ---------------------------`);
var string = "I am very good IT Developer";
console.log(`The String Is : '${string}'`);
console.log(`The Vowels Are :`);
var counter = 0;
for (let index = 0; index < string.length; index++) {
    var char = string.charAt(index);

    if (char=='a' || char=='e' || char=='i' || char=='o' || char=='u' || 
        char=='A' || char=='E' || char=='I' || char=='O' || char=='U') {
        console.log(char);
        counter = counter +1;
    }   
}
console.log(`Total Number Of vowels in string is : ${counter}`);
    
console.log(`---------------------------- Q.N0. 2 ---------------------------`);
function sumOfCube(){
    let sum = 0;
    for (let index = 0; index <= 5; index++) {
        sum = sum + index * index * index;
    }
    console.log(`Sum Of Cube Of Numbers From 1 To 5 Is : ${sum}`);
}
sumOfCube();
console.log(`---------------------------- Q.N0. 3 ---------------------------`);
function oddPositionChars(word){
    console.log(`The Word Is: '${word}'`);
    console.log(`Its ODD Position Chars Are:`);
    for (let index = 0; index < word.length; index++) {
        const element = word.charAt(index);
        if(index % 2 !=0 && element != " "){
            console.log(element);
        }
        
    }

   }
   oddPositionChars("Hard Work Always Pays Back");
   oddPositionChars("Soon I Will Be UI IT Champ");