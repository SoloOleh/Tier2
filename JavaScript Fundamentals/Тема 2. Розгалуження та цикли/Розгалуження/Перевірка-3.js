function checkStorage(available, ordered) {
    if (ordered === 0) {
        return "There are no products in the order!";
    } else if (ordered > available) {
        return "Your order is too large, there are not enough items in stock!";
    } else {
        return "The order is accepted, our manager will contact you";
    }
}
