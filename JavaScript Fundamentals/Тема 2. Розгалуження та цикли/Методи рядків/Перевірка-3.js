function checkForName(fullName, firstName) {
  const lowerFullName = fullName.toLowerCase();
  const lowerFirstName = firstName.toLowerCase();
  if (lowerFullName.includes(lowerFirstName)) {
    return true;
  } else {
    return false;
  }
}

// v2
function checkForName(fullName, firstName) {
  const normalizedFullName = fullName.toLowerCase();
  const normalizedFirstName = firstName.toLowerCase();

  return normalizedFullName.includes(normalizedFirstName);
}

// v3
function checkForName(fullName, firstName) {
  // Приводимо обидва рядки до нижнього регістру
  fullName = fullName.toLowerCase();
  firstName = firstName.toLowerCase();

  // Перевіряємо, чи міститься firstName у fullName
  return fullName.includes(firstName);
}
