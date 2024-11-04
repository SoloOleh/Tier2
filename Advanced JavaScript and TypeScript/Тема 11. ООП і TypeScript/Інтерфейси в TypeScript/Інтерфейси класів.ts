interface IPerson {
  name: string;
  age: number;

  greet(phrase: string): void;
}

interface IPilot {
  flyMessage(): void;
}

export { IPerson, IPilot };


// import { IPerson, IPilot } from './type';
class Pilot implements IPerson, IPilot {
  constructor(public name: string, public age: number) {
    if (this.age < 28) {
      throw new Error('Pilot too young');
    }
  }

  greet(phrase: string): void {
    console.log(phrase + ' ' + this.name);
  }

  flyMessage(): void {
    console.log('Літак набрав висоту, всім приємного польоту!');
  }

  setAutopilot(): void {
    console.log('Автопілот увімкнено.');
  }
}

export {};

const pilot = new Pilot('Anthony', 32);

pilot.greet('Вас вітає капітан корабля');
pilot.flyMessage();

export {};


// import { IPerson, IPilot } from './type';
abstract class Plane {
  protected pilot?: IPilot;

  public sitInPlane(pilot: IPilot): void {
    this.pilot = pilot;
  }

  public abstract startEngine(): boolean;
}

class Boeing extends Plane {
  public startEngine(): boolean {
    if (!this.pilot) {
      throw new Error('No pilot in cabin');
    }
    // Розігріваємо реактивні турбіни.
    console.log('Запуск турбин');

    this.pilot.flyMessage();
    return true;
  }
}

const boeing = new Boeing();
// const pilot = new Pilot('Anthony', 32);


// Капітан вітає пасажирів на трапі.
pilot.greet('Вас вітає капітан корабля');

// Займає місце пілота.
boeing.sitInPlane(pilot);

// Запускаємо двигуни.
boeing.startEngine();

export { Boeing };

    
    
// import { IPerson, IPilot } from './type';
// import { Boeing } from './Boeing';
class Terrorist implements IPilot {
  bluff(phrase: string): void {
    console.log(phrase);
  }

  flyMessage(): void {
    console.log("Наші вимоги - 9 мільйонів, інакше ми вб'ємо всіх заручників.");
  }
}

// const boeing = new Boeing();
// const pilot = new Terrorist();

// Капітан вітає пасажирів на трапі.
// pilot.bluff('Ви захопили цей літак!');

// Займає місце пілота.
boeing.sitInPlane(pilot);

// Запускаємо двигуни.
boeing.startEngine();

export {};
