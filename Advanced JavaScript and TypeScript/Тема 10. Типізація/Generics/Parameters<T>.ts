// Витягує типи параметрів типу функції T. Вона повертає кортеж, що містить типи всіх параметрів функції T у тому порядку, в якому вони оголошені.

type MyFunctionType = (a: string, b: number, c: boolean) => void;

type MyParametersType = Parameters<MyFunctionType>;
// Результат: [string, number, boolean]
