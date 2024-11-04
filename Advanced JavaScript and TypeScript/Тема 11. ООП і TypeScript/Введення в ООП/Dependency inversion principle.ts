class Feeder {
    getFood() {
        // Тут уявімо, що реалізовано складну логіку постачання їжі
    }
}

class Animal2 {
    eat() {
        const feeder = new Feeder();
        feeder.getFood();
        // Тут описується процес поїдання їжі
    }
}


interface FoodProvider {
    getFood(): void;
}

class Feeder2 implements FoodProvider {
    getFood() {
        // Реалізація процесу постачання їжі
    }
}

class Animal3 {
    private foodProvider: FoodProvider;

    constructor(foodProvider: FoodProvider) {
        this.foodProvider = foodProvider;
    }

    eat() {
        this.foodProvider.getFood();
        // Тут описується процес поїдання їжі
    }
}