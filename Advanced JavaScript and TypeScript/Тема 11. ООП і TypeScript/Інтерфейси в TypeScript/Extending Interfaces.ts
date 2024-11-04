interface IPerson {
  name: string;
  age: number;

  greet(phrase: string): void;
}

interface IPilot extends IPerson {
  flyMessage(): void;
}

