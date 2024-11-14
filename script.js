myGrades = [100, 100, 90, 73, 78, 94, 86];

myAverage = 0;

for (let i = 0; i < myGrades.length; i++) {

myAverage += myGrades[i];

}

myAverage = myAverage / myGrades.length;

console.log("My grade average is " + myAverage);

// the 1 in (let i = 1) should've been a 0. there shouldn't be a = in the <=. all i did to fix it is i just replaced the 1 with a 0 and deleted the =.

function validateNumber(value) {
    if (typeof value !== 'number') {
        throw new Error('Input must be a number.');
    }
    if (value < 0) {
        throw new Error('Input must be greater than or equal to 0.');
    }
    if (value > 100) {
        throw new Error('Input must be less than or equal to 100.');
    }
    console.log('Valid input:', value);
}
class NumberOutOfRangeError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NumberOutOfRangeError';
    }
}

function validateNumber(value) {
    if (typeof value !== 'number') {
        throw new NumberOutOfRangeError('Input must be a number.');
    }
    if (value < 0) {
        throw new NumberOutOfRangeError('Input must be greater than or equal to 0.');
    }
    if (value > 100) {
        throw new NumberOutOfRangeError('Input must be less than or equal to 100.');
    }
    console.log('Valid input:', value);
}

try {
    validateNumber(150); 
} catch (error) {
    if (error instanceof NumberOutOfRangeError) {
        console.error(`Custom Error: ${error.message}`);
    } else {
        console.error(`Unexpected Error: ${error.message}`);
    }
}

try {
    validateNumber('50');  
} catch (error) {
    if (error instanceof NumberOutOfRangeError) {
        console.error(`Custom Error: ${error.message}`);
    } else {
        console.error(`Unexpected Error: ${error.message}`);
    }
}

