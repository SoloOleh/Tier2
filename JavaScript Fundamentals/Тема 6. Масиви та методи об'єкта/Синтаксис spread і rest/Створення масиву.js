const temps = [14, -4, 25, 8, 11];

// Це точна, але незалежна копія масиву temps
const copyOfTemps = [...temps];
console.log(copyOfTemps); // [14, -4, 25, 8, 11]

const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];
const allTemps = [...lastWeekTemps, ...currentWeekTemps];
console.log(allTemps); // [14, 25, 11, 23, 17, 18]

allTemps2 = lastWeekTemps.concat(currentWeekTemps);
console.log(allTemps2); // [14, 25, 11, 23, 17, 18]
