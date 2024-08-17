const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
console.log(planets.slice(1, 3)); // ['Mars', 'Venus']

const result = planets.slice(1, 3);
console.log(result); // ["Mars", "Venus"]

console.log(planets.slice()); // ["Earth", "Mars", "Venus", "Jupiter", "Saturn"

console.log(planets.slice(1)); // ["Mars", "Venus", "Jupiter", "Saturn"]
console.log(planets.slice(2)); // ["Venus", "Jupiter", "Saturn"]

console.log(planets.slice(-2)); // ["Jupiter", "Saturn"]
