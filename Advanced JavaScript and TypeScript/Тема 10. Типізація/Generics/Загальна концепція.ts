let arr: any[] = [];

// тип Array складатиметься з рядків та чисел і, тепер, якщо ми передамо туди не той тип, отримаємо помилку.
// let arr2: Array<string | number> = [];
// arr2 = ['str', 10, true];
// export {};


const promise: Promise<string> = new Promise((resolve) => {
  setInterval(() => {
    resolve('Done!');
  }, 1000);
});

promise.then((data) => {
  console.log(data);
});

export {};