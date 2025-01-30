function checkStorage(available, ordered) {
  if (ordered > available) {
    return "Not enough goods in stock!";
  } else {
    return "Order is processed, our manager will contact you";
  }
}

// v2

function checkStorage(available, ordered) {
  if (available >= ordered) {
    return "Order is processed, our manager will contact you";
  } else {
    return "Not enough goods in stock!";
  }
}
