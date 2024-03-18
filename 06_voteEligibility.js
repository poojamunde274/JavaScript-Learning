
var voteEligibility = function(age){
    if (age == 0 || age == -age || age > 130 || age == null){
        console.log(`Invalid Data : ${age}`);
    } else {
        if (age < 18 ) {
            console.log(`Not Eligible For Vote : ${age}`);
        } else {
            if (age >= 18) {
                console.log(`Eligible For Vote : ${age}`);
            }
        }
    }
    
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(null);