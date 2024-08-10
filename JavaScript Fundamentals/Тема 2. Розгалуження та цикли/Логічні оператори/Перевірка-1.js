function isNumberInRange(start, end, number) {
    if (number >= start && number <= end) {
        return true;
    } else {
        return false;
    }
}


// v2
function isNumberInRange(start, end, number) {
  return number >= start && number <= end;
}

