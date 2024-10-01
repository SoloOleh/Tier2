const user = {
  name: "Jacob",
  age: 32,
  email: "j.cob@mail.com",
  isOnline: true,
};

const { name, isOnline, ...otherProps } = user;

console.log(name); // "Jacob"
console.log(isOnline); // true
console.log(otherProps); // {age: 32, email: "j.cob@mail.com"}
