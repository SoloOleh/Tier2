function normalizeInput(input, to) {
  if (to === "lower") {
    let lowerCase = input.toLowerCase();
    return lowerCase;
  } else if (to === "upper") {
    let upperCase = input.toUpperCase();
    return upperCase;
  }
}

function normalizeInput(input, to) {
  if ((to = "upper")) {
    let upperCase = input.toUpperCase();
    return upperCase;
  } else {
    let lowerCase = input.toLowerCase();
    return lowerCase;
  }
}

function normalizeInput(input, to) {
  if (to === "upper") {
    return input.toUpperCase();
  } else if (to === "lower") {
    return input.toLowerCase();
  }
}
