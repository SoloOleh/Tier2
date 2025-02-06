/*
 * Метод flatMap
 */

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const flatArr = arr.flat(); // повертає новий масив де прибираєтсья перший рівень вкладеності(глибина або depth)

// console.log(arr);
// console.log(flatArr);

// console.log([[4, 6, [2342, [234234, 4444]], [234234], [2342, [234, [5]]]]]);
// console.log(
//   [[4, 6, [2342, [234234, 4444]], [234234], [2342, [234, [5]]]]].flat(Infinity)
// );

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

console.log(tweets);

// const tags = tweets.map(tweet => tweet.tags).flat()
// const tags = tweets.flatMap(tweet => tweet.tags)

// console.log(tags);

//* v1
// const tags = tweets.flatMap((tweet) => tweet.tags);
// const uniqueTags = [];

// tags.forEach((tag) => uniqueTags.includes(tag) || uniqueTags.push(tag));

// console.log(tags);
// console.log(uniqueTags);

//* v2
// const tags = tweets.flatMap((tweet) => tweet.tags);
// const uniqueTags = [...new Set(tags)];

// console.log(tags);
// console.log(uniqueTags);

//* v3
const tags = tweets.flatMap((tweet) => tweet.tags);
const uniqueTags = tags.filter(
  (value, index, self) => self.indexOf(value) === index
);

console.log(tags);
console.log(uniqueTags);
