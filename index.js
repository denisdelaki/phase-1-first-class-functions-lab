// Code your solution in this file!
let drivers = ["Antonia", "Nuru", "Amari", "Mo"];
function returnFirstTwoDrivers() {
    return drivers.slice(0,2)
}
function returnLastTwoDrivers() {
    return drivers.slice(2, 4)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
selectingDrivers[0];
selectingDrivers[1];  
const createFareMultiplier = multiplier=> {
    return (number) => multiplier * number;
}     
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)
const selectDifferentDrivers = (drivers, lastAndFirstTwoDrivers) => lastAndFirstTwoDrivers(drivers);    
