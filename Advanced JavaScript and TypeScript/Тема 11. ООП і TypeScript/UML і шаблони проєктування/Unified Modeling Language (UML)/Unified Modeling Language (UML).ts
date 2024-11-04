class Animal {
  constructor(public name: string) {}

  say() {
    console.log('Nothing to say');
  }
}

class Cat extends Animal {
  constructor(name: string, private speed: number) {
    super(name);
  }

  say() {
    console.log('Meow!');
  }

  run(time: number) {
    return `${this.name} бігла зі швидкістю ${this.speed} протягом ${time} секунд.`;
  }
}

export {};

