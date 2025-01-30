function getSlice(array, value) {
  const index = array.indexOf(value); // Отримуємо індекс value в array
  if (index !== -1) {
    // Перевіряємо, чи знайдений елемент
    return array.slice(0, index + 1); // Повертаємо підмасив до value включно
  } else {
    return []; // Повертаємо порожній масив, якщо value не знайдено
  }
}

function getSlice(array, value) {
  if (array.includes(value)) {
    // Перевіряємо, чи є value в array
    const index = array.indexOf(value); // Знаходимо індекс value
    return array.slice(0, index + 1); // Повертаємо підмасив до value включно
  } else {
    return []; // Повертаємо порожній масив, якщо value не знайдено
  }
}

function getSlice(array, value) {
  const index = array.indexOf(value); // Знаходимо індекс елемента зі значенням value

  if (index === -1) {
    return []; // Якщо елемент не знайдено, повертаємо порожній масив
  }

  return array.slice(0, index + 1); // Повертаємо підмасив від початку і до включно знайденого елемента
}

function getSlice(array, value) {
  const valueIndex = array.indexOf(value);
  if (valueIndex >= 0) {
    return array.slice(0, valueIndex + 1);
  } else if (valueIndex === -1) {
    return [];
  }
}

// getSlice(["Mango", "Poly", "Ajax"], "Poly") повертає ["Mango", "Poly"]
