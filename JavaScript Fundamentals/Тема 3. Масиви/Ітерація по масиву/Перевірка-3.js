function checkStorage(storage, item) {
  let itemLower = item.toLowerCase();
  if (storage.includes(itemLower)) {
    return `${itemLower} is available to order!`;
  } else {
    return "Sorry! We are out of stock!";
  }
}

console.log(checkStorage(["apple", "peach", "pear", "orange"], "PEar")); // 'pear is available to order!'

function checkStorage(storage, item) {
  let itemLower = item.toLowerCase();
  // Знаходимо елемент в масиві, який відповідає item незалежно від регістру
  let foundItem = storage.find(
    (element) => element.toLowerCase() === itemLower
  );

  if (foundItem) {
    return `${foundItem} is available to order!`;
  } else {
    return "Sorry! We are out of stock!";
  }
}

function checkStorage(storage, item) {
  let itemLower = item.toLowerCase();
  let storageLower = storage.map((element) => element.toLowerCase());

  if (storageLower.includes(itemLower)) {
    return `${item} is available to order!`;
  } else {
    return "Sorry! We are out of stock!";
  }
}
