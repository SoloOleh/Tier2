function checkForName(fullName, firstName) {
    let lowerfullName = fullName.toLowerCase();
    let lowerfirstName = firstName.toLowerCase();
    if (lowerfullName.includes(lowerfirstName)) {
        return true;
    }
    else {
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
