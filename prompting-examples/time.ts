const currentTimeInMilliseconds = new Date().getTime();

const timeInYears = currentTimeInMilliseconds / 1000 / 60 / 60 / 24 / 365;
const timeInMonths = currentTimeInMilliseconds / 1000 / 60 / 60 / 24 / 30;
const timeInDays = currentTimeInMilliseconds / 1000 / 60 / 60 / 24;
const timeInHours = currentTimeInMilliseconds / 1000 / 60 / 60;
const timeInMinutes = currentTimeInMilliseconds / 1000 / 60;
const timeInSeconds = currentTimeInMilliseconds / 1000;

console.log(`Current time in years: ${timeInYears}`);
console.log(`Current time in months: ${timeInMonths}`);
console.log(`Current time in days: ${timeInDays}`);
console.log(`Current time in hours: ${timeInHours}`);
console.log(`Current time in minutes: ${timeInMinutes}`);
console.log(`Current time in seconds: ${timeInSeconds}`);
