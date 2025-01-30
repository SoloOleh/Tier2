//* TASK 1

/*
? Напиши програму, яка обчислює та виводить суму всіх непарних чисел від 1 до n, де n — це число, введене користувачем.
*/

/*
sumOfOdds(10)
n = 10
[1, 10] -> 1 + 3 + 5 + 7 + 9

*/

//* v1
/*
    1. створюємо змінну-накопичувач
    2. запускаємо цикл для перебору всіх значень у діапазоні
    3. перевіряємо чи є поточне значення непарним
    4. якщо є, додаємо до накопичувача наше значення
    5. повернення змінної накопичувача
*/

// function sumOfOdds(n) {
//   let counter = 0;
//   for (let i = 1; i <= n; i += 1) {
//     if (i % 2 !== 0) {
//       counter += i;
//     }
//   }

//   return counter;
// }

//* v2
// function sumOfOdds(n) {
//   let counter = 0;
//   for (let i = 1; i <= n; i += 2) {
//     counter += i;
//   }

//   return counter;
// }

//* v3
// function sumOfOdds(n) {
//   const oddsAmount = Math.floor((n + 1) / 2);

//   return oddsAmount ** 2;
// }

// console.log(sumOfOdds(10));
// console.log(sumOfOdds(100));

//! ============================================================

//* TASK 2

//? Напиши функцію printMultiplicationTable(number), яка виводить таблицю множення для заданого числа (від 1 до 10).

// function printMultiplicationTable(number) {
//   for (let i = 1; i <= 10; i += 1) {
//     console.log(`${number} x ${i} = ${number * i}`);
//   }
// }

// printMultiplicationTable(5);
// Вивід:
// 5 x 1 = 5
// 5 x 2 = 10
// ...
// 5 x 10 = 50

//! ============================================================

//* TASK 3

//? Напиши функцію findMaxOfThree(a, b, c), яка отримує три числа як аргументи і повертає найбільше з них.

function findMaxOfThree(a, b, c) {
  // * v1
  //   let max = a;
  //   if (b > max) {
  //     max = b;
  //   }
  //   if (c > max) {
  //     max = c;
  //   }
  //   return max;

  // * v2
  return Math.max(a, b, c);
}

// console.log(findMaxOfThree(5, 10, 3)); // 10
// console.log(findMaxOfThree(-5, -10, -3)); // -3
// console.log(findMaxOfThree(7, 7, 7)); // 7

//! ============================================================

//* TASK 4

//? Напиши функцію countLetter(text, letter), яка отримує рядок text і букву letter, та повертає кількість разів, яку ця буква зустрічається в рядку.

/*
1. створюємо каунтер для підрахунку букв
2. запускаємо цикл на перебір символів рядку
3. робимо перевірку чи поточний символ рядку дорівнює параметру леттер
4. якщо так, то тоді збільшуємо каунтер на 1
5. повертаємо каунтер

*/

// function countLetter(text, letter) {
//   let counter = 0;
//   for (let i = 0; i < text.length; i += 1) {
//     if (text[i] === letter) {
//       counter += 1;
//     }
//   }

//   return counter;
// }

// console.log(countLetter("hello world", "o")); // 2
// console.log(countLetter("javascript", "a")); // 2
// console.log(countLetter("абабагаламага", "а")); // 7
// console.log(countLetter("", "x")); // 0

//! ============================================================

//* TASK 5

//? Напиши функцію countWords(text), яка отримує рядок text і повертає кількість слів у ньому. Словами вважаються групи символів, розділені одним або кількома пробілами.

/*
1. оголосити каунтер, оголосити змінну-флажок з індикатором того чи знаходимось ми у слові зараз (true/false)
2. викликати трім на оригінальному рядку
3. запускаємо цикл для перебору символів
4. робимо перевірку, якщо поточний символ не є пробілом
    4.1. робимо перевірку що ми знаходимось не в слові (тобто флажок фолс)
        4.1.1. якщо ми не в слові, то каунтер += 1 і змінюємо флажок на тру
5. в іншому випадку, якщо поточний символ пробіл (елсе), ми змінюємо флажок на фолс
*/

function countWords(text) {
  //* step 1
  let counter = 0;
  let isInWord = false;

  //* step 2
  text = text.trim();

  //* step 3
  for (let i = 0; i < text.length; i += 1) {
    //* step 4
    if (text[i] !== " ") {
      //* step 4.1
      // if(isInWord === false)
      if (!isInWord) {
        //* step 4.1.1
        counter += 1;
        isInWord = true;
      }
    } else {
      //* step 5
      isInWord = false;
    }
  }

  return counter;
}

/*
text = "Привіт світ"
counter = 0 -> 1 -> 2
isInWord = false -> true -> false -> true

1.  for (let i = 0; i < text.length; i += 1) {
    if (text[i]("П") !== " ") { true
      if (!isInWord) { true
        counter += 1;
        isInWord = true;
      }
    } else {
      isInWord = false;
    }
  }

2.  for (let i = 1; i < text.length; i += 1) {
    if (text[1]("р") !== " ") { true
      if (!isInWord) { false
        counter += 1;
        isInWord = true;
      }
    } else {
      isInWord = false;
    }
  }

  ....

7.  for (let i = 6; i < text.length; i += 1) {
    if (text[6](" ") !== " ") { false
      if (!isInWord) { 
        counter += 1;
        isInWord = true;
      }
    } else {
      isInWord = false;
    }
}

8.  for (let i = 7; i < text.length; i += 1) {
    if (text[7]("c") !== " ") { true
      if (!isInWord) { true
        counter += 1;
        isInWord = true;
      }
    } else {
      isInWord = false;
    }
}


*/

// console.log(countWords("Привіт світ")); // 2
// console.log(countWords("   Це   приклад   тексту  ")); // 3
// console.log(countWords("")); // 0
// console.log(countWords("Слово")); // 1

//! ============================================================

//* TASK 6

/*
Напиши програму, яка приймає число n і виводить в консоль ялинку з зірок висотою n. Кожен наступний рядок має збільшуватись на одну зірку.

Приклад:
Для n = 5, результат в консолі виглядатиме так:

    *
   ***
  *****
 *******
*********

*/

//* v1

/*
+ додати перевірку що розмір є непрним числом

1. створимо змінні символів пробілу і зірочки + змінна для накопичення ялинки в одному рядку
2. запускаємо цикл (номер рядку) починаємо з 1 до розміру з кроком 1
    2.1. створюємо змінну конкретного рядка (накопичувач рядка)
    2.2. запускаємо цикл (по конкретному рядку по пробілам) починаємо з 1 до розмір - i з кроком 1
        2.2.1. змінну пробіл додаємо до накопичувача рядка
    2.3. запускаємо цикл (по зірочкам) починаємо з 1 до 2 * i - 1
        2.3.1.  змінну зірочки додаємо до накопичувача рядка
    2.4. додаємо сформований рядок до змінної накопичувача рядку + додаємо переніс на новий рядок '\n'
3. виводомо в консоль ялинку
*/

// function displayXmasTree(size) {
//   if (size % 2 === 0) {
//     console.log("Розмір дерева повинен бути не парним числом!");
//     return;
//   }

//   //* step 1
//   const divider = " ";
//   const treeSymbol = "*";
//   let tree = "";

//   //* step 2
//   for (let i = 1; i <= size; i += 1) {
//     //* step 2.1
//     let row = "";
//     //* step 2.2
//     for (let k = 1; k <= size - i; k += 1) {
//       //* step 2.2.1
//       row += divider;
//     }

//     //* step 2.3
//     for (let j = 1; j <= 2 * i - 1; j += 1) {
//       //* step 2.3.1
//       row += treeSymbol;
//     }

//     //* step 2.4

//     tree += row + "\n";
//   }

//   console.log(tree);
// }

//* v2

// function displayXmasTree(size) {
//   if (size % 2 === 0) {
//     console.log("Розмір дерева повинен бути не парним числом!");
//     return;
//   }

//   let tree = "";

//   for (let i = 1; i <= size; i += 1) {
//     const spaces = " ".repeat(size - i);
//     const stars = spaces + "*".repeat(2 * i - 1);
//     tree += stars + "\n";
//   }
//   console.log(tree);
// }

//* v3

// function displayXmasTree(size) {
//   if (size % 2 === 0) {
//     console.log("Розмір дерева повинен бути не парним числом!");
//     return;
//   }

//   let tree = "";

//   for (let i = size; i >= 1; i -= 1) {
//     let row = "*".padStart(i, " ");

//     row += "".padStart((size - i) * 2, "*");

//     tree += row + "\n";
//   }

//   console.log(tree);
// }

//* v4

function displayXmasTree(size, stars = "*") {
  if (size > 1) {
    console.log(" ".repeat(size - 1) + stars);
    displayXmasTree(size - 1, stars + "**");
  } else {
    console.log(stars);
  }
}

displayXmasTree(5);

/*
1. displayXmasTree(5);

function displayXmasTree(size = 5, stars = "*") {
  if (size > 1) { true
    console.log(" ".repeat(size - 1) + stars); -> "    *"
    displayXmasTree(size - 1, stars + "**");
  } else {
    console.log(stars);
  }
}

2. 
function displayXmasTree(size = 4, stars = "***") {
  if (size > 1) { true
    console.log(" ".repeat(size - 1) + stars); -> "   ***"
    displayXmasTree(size - 1, stars + "**");
  } else {
    console.log(stars);
  }
}

3. 
function displayXmasTree(size = 3, stars = "*****") {
  if (size > 1) { true
    console.log(" ".repeat(size - 1) + stars); -> "  *****"
    displayXmasTree(size - 1, stars + "**");
  } else {
    console.log(stars);
  }
}

4. 
function displayXmasTree(size = 2, stars = "*******") {
  if (size > 1) { true
    console.log(" ".repeat(size - 1) + stars); -> " *******"
    displayXmasTree(size - 1, stars + "**");
  } else {
    console.log(stars);
  }
}

5. 
function displayXmasTree(size = 1, stars = "*********") {
  if (size > 1) { false
   -----
  } else {
    console.log(stars); // "*********"
  }
}
*/

//! ============================================================

//* На самостійне опрацювання

// Числа Фібоначчі — це послідовність чисел, де кожне наступне число є сумою двох попередніх. Послідовність починається з F(0) = 0 і F(1) = 1
// Напиши функцію fibonacciSum(n), яка рекурсивно обчислює суму перших 
// 𝑛
// n чисел Фібоначчі.

// Приклад:

// Вхід: 
// 𝑛 = 5
// Розрахунок: 
// F(0)+F(1)+F(2)+F(3)+F(4)=0+1+1+2+3=7
// Вихід: 
// 7
