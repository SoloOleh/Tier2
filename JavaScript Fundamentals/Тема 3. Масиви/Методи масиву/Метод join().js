const words = ["JavaScript", "is", "amazing"];
console.log(words.join("")); // 'JavaScriptisamazing'
console.log(words.join(" ")); // 'JavaScript is amazing'
console.log(words.join("-")); // 'JavaScript-is-amazing'

function transformString(string) {
  const words = string.split("_");
  console.log(words);
  return words.join("-");
}

console.log(transformString("user_age")); // "user-age"
console.log(transformString("price_per_droid")); // "price-per-droid"
