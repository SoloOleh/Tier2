const getUsersWithAge = (users, minAge, maxAge) => {
  return users.filter((user) => (user.age >= minAge) & (user.age <= maxAge));
};
