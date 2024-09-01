const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

const ascendingReleaseDates = releaseDates.toSorted((a, b) => a - b);
const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a);

console.log(ascendingReleaseDates); // [1967, 1973, 1984, 1997, 2008, 2012, 2016]
console.log(descendingReleaseDates); // [2016, 2012, 2008, 1997, 1984, 1973, 1967]
