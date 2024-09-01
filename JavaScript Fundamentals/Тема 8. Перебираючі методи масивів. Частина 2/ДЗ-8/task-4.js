// const getTotalBalanceByGender = (clients, gender) => {
//   let totalBalance = 0;
//   for (const client of clients) {
//     if (client.gender === gender) {
//       totalBalance += client.balance;
//     }
//   }
//   return totalBalance;
// };

const getTotalBalanceByGender = (clients, gender) =>
  clients
    .filter((client) => client.gender === gender)
    .reduce((totalBalance, client) => totalBalance + client.balance, 0);

const clients = [
  {
    name: "Moore Hensley",
    gender: "male",
    balance: 2811,
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821,
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793,
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278,
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951,
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498,
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764,
  },
];

console.log(getTotalBalanceByGender(clients, "male")); // 12053

console.log(getTotalBalanceByGender(clients, "female")); // 8863
