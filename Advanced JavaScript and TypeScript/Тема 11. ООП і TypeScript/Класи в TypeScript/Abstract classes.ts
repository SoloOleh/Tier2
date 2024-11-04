abstract class Plane {
  protected pilotInCabin = false;

  public sitInPlane() {
    this.pilotInCabin = true;
  }

  public abstract startEngine(): boolean;
}

class Maize extends Plane {
  public startEngine() {
    // Запускаємо винти двигуна.

    return true;
  }
}

class Boeing extends Plane {
  public startEngine() {
    // Розігріваємо реактивні турбіни.

    return true;
  }
}

// class BrokenPlane extends Plane {} // Error: Клас 'BrokenPlane' не реалізовує унаслідований абстрактний метод 'startEngine' з класу 'Plane'.

export {};
