let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;
notSure = {};

let num: number;

num = notSure;

export { };

function fetchUserData(id: string, callback: (data: any) => void): void {
  // Тут може бути якийсь запит, але ми його заповнимо самі
  const responseData = { name: 'Tom' };

  callback(responseData);
}

// Використання функції:
fetchUserData('123', (data) => {
  console.log(data.name); // TypeScript не викличе помилку, навіть якщо поле name не існує
});

export {};
