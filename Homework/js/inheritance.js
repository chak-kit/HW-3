class Fighter {
  constructor({name, attack, hitpoints}) {

    this._name = name;
    this._attack = attack;
    this._hitpoints = hitpoints;
  }

  getName() {
    return this._name;
  }

  setName(value) {
    this._name = value;
  }

  getAttack() {
    return this._attack;
  }

  setAttack(value) {

    this._attack = value;
  }

  getHitpoints() {
    return this._hitpoints;
  }

  setHitpoints(value) {
    this._hitpoints = value;
  }

  fight(defender) {
    if (defender.isAlive()) {
      defender._hitpoints = defender._hitpoints - this._attack;

    }
  }

  isAlive() {
    return this.getHitpoints() > 0;


  }
}

class Champion extends Fighter {
  constructor(name, attack, hitpoints) {
    super(name, attack, hitpoints);
    this._block = false;

  }


  rest() {
    // this._hitpoints += 5;
    this.setHitpoints(this.getHitpoints() + 5)
  }

  defence() {
    this._block = true;
  }

  fight(defender) {
    super.fight(defender);
    const bonusLife = 1;
    if (defender.isAlive()) {
      console.log(`${defender._name} is still live`)

    } else {
      this.setAttack(this.getAttack() + bonusLife);
      console.log(this.getAttack() + bonusLife);
      console.log(`${this._name} gets +1 to 'attack'`)
    }


  }
}

class Monster extends Fighter {
  constructor(name, attack, hitpoints) {
    super(name, attack, hitpoints);

  }

  enrage() {
    this.setAttack(this.getAttack() * 2)
  }

  fight(defender) {
    super.fight(defender);

    if (defender.isAlive()) {

      console.log(`${defender._name} is still live`)
    } else {
      this.setHitpoints(this.getHitpoints() + (defender.getHitpoints() * 0.25));
      console.log(this.getHitpoints() + (defender.getHitpoints() * 0.25));
      this.setHitpoints(this._hitpoints + (defender.getHitpoints() * 0.1));
      console.log(this._hitpoints + (defender._hitpoints * 0.1));
console.log(`${defender._name} is died`)
    }

  }

}

let heracles = new Champion({name: 'Heracles', attack: 10, hitpoints: 5});
let boar = new Monster({name: 'Erymanthian Boar', attack: 5, hitpoints: 100});

boar.fight(heracles);
boar.getHitpoints();

heracles.rest();

boar.enrage();