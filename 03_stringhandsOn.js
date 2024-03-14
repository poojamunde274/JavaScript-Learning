console.log(`-------------------------------------- String Hands On Assignment ----------------------------------------`);

function stringHandsOn(){
    var sentence = "   Hey you are doing good, keep it up   ";
    console.log(`Step 1: The String Is: '${sentence}'`);
    console.log(`------------------------------------------------------------------------------------------------------`);

    var strLen = sentence.length;
    console.log(`Step 2: The String Length Is: ${strLen}`);
    console.log(`------------------------------------------------------------------------------------------------------`);

    var removeSpaceString = sentence.trim();
    var trimLength = removeSpaceString.length;
    console.log(`Step 3: Remove Extra Spaces And Sentence Is: '${removeSpaceString}' And Length Is: ${trimLength}`);
    console.log(`------------------------------------------------------------------------------------------------------`);

    var removeSpaceCount = strLen - trimLength;
    console.log(`Step 4: Print The Total Extra Spaces Count Is: ${removeSpaceCount}`);
    console.log(`------------------------------------------------------------------------------------------------------`);

    var firstChar = removeSpaceString.charAt(0);
    var lastChar = removeSpaceString.charAt(trimLength-1);
    console.log(`Step 5: Print First Character Is: '${firstChar}' And Last Character Is: '${lastChar}' `);
    console.log(`------------------------------------------------------------------------------------------------------`);

    var countWord = removeSpaceString.split(" ");
    var countWordLength = countWord.length;
    console.log(`Step 6: Total Word Available In The String Is: ${countWordLength} `);
    console.log(`------------------------------------------------------------------------------------------------------`);

    var indexOfTrim = removeSpaceString.indexOf("good");
    console.log(`Step 7: Index Of Word "good" Is: ${indexOfTrim}`);
    console.log(`------------------------------------------------------------------------------------------------------`);

    var subString = removeSpaceString.substring(22);
    console.log(`Step 8: Print The Substring Starting From Index 22 Is: '${subString}'`);
    console.log(`------------------------------------------------------------------------------------------------------`);

    var endWith = removeSpaceString.endsWith("up");
    console.log(`Step 9:The string ends with word "up": ${endWith} `);
    console.log(`------------------------------------------------------------------------------------------------------`);

    var startWith = removeSpaceString.startsWith("Hey");
    console.log(`Step 10:The string Starts with word "Hey": ${startWith} `);

}
stringHandsOn();