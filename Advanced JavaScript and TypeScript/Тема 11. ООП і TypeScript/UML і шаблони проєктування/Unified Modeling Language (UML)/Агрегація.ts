class Persona {
  constructor(public name: string) {}
}

class Home {
  private guests: Persona[] = [];

  addGuest(guest: Persona) {
    this.guests.push(guest);
  }
}

const home = new Home();

const guest1 = new Persona('Max');
const guest2 = new Persona('Anton');
const guest3 = new Persona('Nikita');

home.addGuest(guest1);
home.addGuest(guest2);
home.addGuest(guest3);
