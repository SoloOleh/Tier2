function getSubscriptionPrice(type) {
  if (type === "starter") {
    return 0;
  } else if (type === "professional") {
    return 20;
  } else if (type === "organization") {
    return 50;
  } else {
    return "Invalid subscription type!";
  }
}
    

function getSubscriptionPrice(type) {
  let price;

  switch (type) {
    case "starter":
      price = 0;
      break;
    case "professional":
      price = 20;
      break;
    case "organization":
      price = 50;
      break;
    default:
      return "Invalid subscription type!";
  }

  return price;
}
