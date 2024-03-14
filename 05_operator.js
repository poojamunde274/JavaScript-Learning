console.log(`----------------------------------- Q.1 ---------------------------------`);
function squareOfWordLength(string){
    console.log(`Word Is:'${string}'`);
    var stringLength = string.length;
    console.log(`Word Length is:${stringLength}`);

    var squareOfLength = stringLength * stringLength;
    return squareOfLength;

}
var squareOfLength = squareOfWordLength(`JavaScript`);
console.log(`Square Of Length Is: ${squareOfLength}`);
console.log(`--------------------------------------------------------------------`);

var squareOfLength = squareOfWordLength(`Google Chrome`);
console.log(`Square Of Length Is: ${squareOfLength}`);
console.log(`--------------------------------------------------------------------`);

var squareOfLength = squareOfWordLength(`Developer Smart`);
console.log(`Square Of Length Is: ${squareOfLength}`);

console.log(`--------------------------------- Q. 2 -----------------------------------`);

function string(){
    var str = "I Am Angular Developer";
    var strLength = str.length;

    var totalWord = str.split(" ");
    var totalWordLength = totalWord.length;

    console.log(`The String Is: '${str}'`);
    console.log(`String Length Is:${strLength}`);
    console.log(`Total Word Is: ${totalWordLength}`);

    var divide = strLength / totalWordLength;
    console.log(`Result Of Divided by String Length And its Total Word Length:${divide}`);
    
    var multiple = strLength * totalWordLength
    console.log(`Result Of Multiple by String Length And its Total Word Length:${multiple}`);

}
string();