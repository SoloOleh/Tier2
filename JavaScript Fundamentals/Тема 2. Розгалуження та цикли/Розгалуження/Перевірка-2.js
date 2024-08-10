function checkStorage(available, ordered) {
    if (ordered > available) {
        return "Not enough goods in stock!";
    } else {
        return "Order is processed, our manager will contact you";
    }
}