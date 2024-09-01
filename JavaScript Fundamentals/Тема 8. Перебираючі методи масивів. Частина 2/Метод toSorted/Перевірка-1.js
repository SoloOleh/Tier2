const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];

// const ascendingReleaseDates = releaseDates.toSorted();
const ascendingReleaseDates = releaseDates.toSorted((a, b) => a - b);

// const alphabeticalAuthors = authors.toSorted();
const alphabeticalAuthors = authors.toSorted((a, b) => a.localeCompare(b));

console.log(ascendingReleaseDates); // [1967, 1973, 1984, 1997, 2008, 2012, 2016]
console.log(alphabeticalAuthors); // ["Bernard Cornwell", "Fyodor Dostoevsky", "Robert Sheckley", "Tanith Lee"]
