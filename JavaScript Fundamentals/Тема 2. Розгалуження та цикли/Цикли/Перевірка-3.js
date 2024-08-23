function calculateEvenTotal(number) {
    let total = 0;
    
    for (let i = 1; i <= number; i++) {
        if (i % 2 === 0) {
            total += i;
        }
    }
    
    return total;
}



function calculateEvenTotal(number) {
    let total = 0;
    
    for (let i = 2; i <= number; i += 2) {
        total += i;
    }
    
    return total;
}
