// function getSubscriptionPrice(type) {
//   if (type === "starter") {
//     return 0;
//   } else if (type === "professional") {
//     return 20;
//   } else if (type === "organization") {
//     return 50;
//   } else {
//     return "Invalid subscription type!";
//   }
// }

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
      price = "Invalid subscription type!";
  }
  console.log(price);
  return price;
}

// v2

// function getSubscriptionPrice(type) {
//   let subscription;
//   switch (type) {
//     case "starter":
//       return (subscription = 0);
//       break;
//     case "professional":
//       return (subscription = 20);
//       break;
//     case "organization":
//       return (subscription = 50);
//       break;
//     default:
//       return (subscription = "Invalid subscription type!");
//   }
//   console.log(subscription);
// }

getSubscriptionPrice("organization");
