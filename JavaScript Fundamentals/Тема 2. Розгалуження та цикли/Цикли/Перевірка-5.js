function findNumber(start, end, divisor) {
    for (let i = start; i <= end; i += 1) {
        if (i % divisor === 0) {
            return i;
        }
    }
}

