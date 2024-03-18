var gradeCalculation = function (marks) {
  if (marks <= 0 || marks > 100 || marks == null || isNaN(+marks)) {
    console.log(`Invalid Marks : '${marks}'`);
  } else {
    if (marks >= 90 && marks < 100) {
      console.log(`Marks : '${marks}' Fantastic Marks, Your Grade is 'A+'`);
    } else {
      if (marks >= 75 && marks < 90) {
        console.log(`Marks : '${marks}' Excellent Marks, Your Grade is 'A'`);
      } else {
        if (marks >= 50 && marks < 75) {
          console.log(`Marks : '${marks}' Good Marks, Your Grade is 'B'`);
        } else {
          if (marks >= 35 && marks < 50) {
            console.log(`Marks : '${marks}' Need improvement, Your Grade is 'c'`);
          } else {
            if (marks < 35 && marks > 0) {
              console.log(`Marks : '${marks}' You are fail`);
            }
          }
        }
      }
    }
  }
};
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eight");
gradeCalculation(undefined);
gradeCalculation(null);
