let arrString: string[];

// arrString = ['Text', 1]; Якщо ми спробуємо передати в нього не рядковий тип даних, ми отримаємо помилку.
// export { };

let arrNumber: number[];
// arrNumber = [1, 'Text']; // Якщо ми спробуємо передати в нього не числовий тип даних, ми отримаємо помилку.
// export {};

let matrix: number[][] = [[1, 2], [3, 4]];

let mixed: (number | string)[] = [1, 'two'];

let numbers: Array<number> = [1, 2, 3, 4, 5];

let users: {
    name: string;
    age: number;
}[] = [
    { name: 'Tom', age: 30 },
    { name: 'Jack', age: 25 },
    { name: 'Alice', age: 32 },
];

// Або з використанням більш зручного запису:
type User = {
    name: string;
    age: number;
};

let users2: User[] = [
    { name: 'Tom', age: 30 },
    { name: 'Jack', age: 25 },
    { name: 'Alice', age: 32 },
];

// Тепер якщо якесь значення об'єкта буде не того типу, ми отримаємо помилку.
// type User = {
//   name: string;
//   age: number;
// };

// let users: User[] = [{ name: 'Tom', age: '30' }];

// export {};

let arrAny: any[];

arrAny = [123, 'TEXT', { name: 'Tom' }, [1, 2, 3]];

export { };

