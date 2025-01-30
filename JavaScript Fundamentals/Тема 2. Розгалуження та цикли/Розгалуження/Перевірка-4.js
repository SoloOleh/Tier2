// function checkPassword(password) {
//     const correctPassword = "jqueryismyjam";
//     return password === correctPassword ? 'Access granted' : 'Access denied, wrong password!'
// }

function checkPassword(password) {
  const correctPassword = "jqueryismyjam";
  const access =
    password === correctPassword
      ? "Access granted"
      : "Access denied, wrong password!";
  console.log(access);
  return access;
}

checkPassword("jqueryismyjam");
checkPassword("angul4r1sl1f3");
