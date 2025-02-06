// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((total, hours) => {
//   return total + hours;
// }, 0);

// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(averagePlayTime);

const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];

// const totalPlayTime = players.reduce((total, player) => {
//   return total + player.playtime;
// }, 0);
// console.log(totalPlayTime);

// const totalGamesPlayed = players.reduce((total, player) => {
//   return total + player.gamesPlayed;
// }, 0);
// console.log(totalGamesPlayed);

// const totalAveragePlaytimePerGame = totalPlayTime / totalGamesPlayed;

const calculateTotalBalance = (users) => {
  return users.reduce((total, user) => {
    return total + user.balance;
  }, 0);
};
console.log(totalAveragePlaytimePerGame);
