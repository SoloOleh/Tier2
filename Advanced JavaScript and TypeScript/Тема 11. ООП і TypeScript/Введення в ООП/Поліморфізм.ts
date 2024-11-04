class Animal {
  public say() {
    console.log("I'm an animal");
  }
}

class Cat extends Animal {
  public say() { // перевизначення методу say() для Cat
    console.log('Meow');
  }
}

class Dog extends Animal {
  public say() { // перевизначення методу say() для Dog
    console.log('Woof');
  }
}

let animal: Animal = new Cat();
animal.say(); // Виводить "Meow"

animal = new Dog();
animal.say(); // Виводить "Woof"
