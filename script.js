myGrades = [100, 100, 90, 73, 78, 94, 86];

myAverage = 0;

for (let i = 0; i < myGrades.length; i++) {

myAverage += myGrades[i];

}

myAverage = myAverage / myGrades.length;

console.log("My grade average is " + myAverage);

// the 1 in (let i = 1) should've been a 0. there shouldn't be a = in the <=. all i did to fix it is i just replaced the 1 with a 0 and deleted the =.

function checkNumber(value) {
    if (isNaN(value)) {
        throw new Error("Input must be a number.");
    }
    if (value < 0) {
        throw new Error("Input must not be less than 0.");
    }
    if (value > 100) {
        throw new Error("Input must not be greater than 100.");
    }
    return `Valid input: ${value}`;
}


