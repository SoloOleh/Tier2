// fetch("https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name");
// _limit, який контролює кількість елементів у відповіді;
// _sort, який відповідає за порядок сортування об'єктів у масиві.

const fetchUsersBtn = document.querySelector(".btn");
const userList = document.querySelector(".user-list");

fetchUsersBtn.addEventListener("click", () => {
  fetchUsers()
    .then((users) => renderUsers(users))
    .catch((error) => console.log(error));
});

function fetchUsers() {
  return fetch(
    "https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name"
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function renderUsers(users) {
  const markup = users
    .map((user) => {
      return `
          <li>
            <p><b>Name</b>: ${user.name}</p>
            <p><b>Email</b>: ${user.email}</p>
            <p><b>Company</b>: ${user.company.name}</p>
          </li>
      `;
    })
    .join("");
  userList.insertAdjacentHTML("beforeend", markup);
}
