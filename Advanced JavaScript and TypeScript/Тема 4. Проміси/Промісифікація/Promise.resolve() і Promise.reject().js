// Так створюється успішно виконаний проміс через new Promise():
// new Promise(resolve => resolve("success value"))
// 	.then(value => console.log(value));
// 	.catch(error => console.log(error));

// Так створюється успішно виконаний проміс через Promise.resolve():
// Promise.resolve("success value");
// 	.then(value => console.log(value));
// 	.catch (error => console.log(error));

// Так створюється проміс, що виконався з помилкою через new Promise():
// new Promise((resolve, reject) => reject("error"));
// 	.then(value => console.log(value));
// 	.catch(error => console.log(error));

// Так створюється проміс, що виконався з помилкою через Promise.reject():

// Promise.reject("error");
// 	.then(value => console.log(value));
// 	.catch(error => console.log(error));
