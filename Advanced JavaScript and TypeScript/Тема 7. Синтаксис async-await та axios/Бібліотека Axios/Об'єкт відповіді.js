// {
//   data: {},
//   status: 200,
//   statusText: 'OK',
//   headers: {},
//   config: {},
//   request: {}
// }
// data — відповідь, надана сервером;
// status — код стану HTTP з відповіді сервера;
// statusText — повідомлення про стан HTTP від відповіді сервера;
// headers — заголовки HTTP, з якими відповів сервер;
// config — конфігурація, яка була надана Axios для запиту;
// request — запит, який створив цю відповідь;

import axios from "axios";

axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  })
  .catch((error) => {
    console.log(error);
  });
