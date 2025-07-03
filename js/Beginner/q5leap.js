//Check if a year is a leap year.

function isLeapYear(year){
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}


let year = 2020;
console.log(year + " is a leap year: " + isLeapYear(year));
