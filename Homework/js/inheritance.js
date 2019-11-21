class Fighter {
  constructor({name, attack, hitpoints, totalHitpoints}) {

    this._name = name;
    this._attack = attack;
    this._hitpoints = hitpoints;
    this._totalHitpoints = totalHitpoints;
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
    if (value > this._totalHitpoints) {
      this._hitpoints = this._totalHitpoints;
    } else if (value < 0) {
      this._hitpoints = 0;
    } else {
      this._hitpoints = value;
    }
  }

  getTotalHitpoints() {
    return this._totalHitpoints;
  }

  setTotalHitpoints(value) {
    this._totalHitpoints = value;
  }

  calculateAttackPower() {
    throw new Error('You have to implement the method: calculateAttackPower !');
  }

  calculateDamage(attackPower) {
    throw new Error('You have to implement the method: calculateDamage !');
  }

  win(defenderTotalHitpoints) {
    throw new Error('You have to implement the method: win !');
  }

  fight(defender) {
    console.log(`${this.getName()} attacks ${defender.getName()}:`);

    if (!defender.isAlive()) {
      console.log('You can not attack already dead fighter !');
      return;
    }

    let attackPower = this.calculateAttackPower();
    console.log(`The power of ${this.getName()}'s attack is: ${attackPower} hitpoints.`);

    let damage = defender.calculateDamage(attackPower);
    console.log(`Attack damaged ${defender.getName()} by: ${damage} hitpoints.`);

    defender.setHitpoints(defender.getHitpoints() - damage);
    if (defender.isAlive()) {
      console.log(`${defender.getName()}'s current health is: ${defender.getHitpoints()} hitpoints.`);
    } else {
      console.log(`${defender.getName()} is dead !`);
      this.win(defender.getTotalHitpoints());
    }
  }

  isAlive() {
    return this.getHitpoints() > 0;
  }
}

class Champion extends Fighter {
  constructor({name, attack, hitpoints, totalHitpoints}) {
    super({name, attack, hitpoints, totalHitpoints});
    this._block = false;
  }

  rest() {
    this.setHitpoints(this.getHitpoints() + 5);
    console.log(`${this.getName()} has a rest. Current health becomes: ${this.getHitpoints()} hitpoints.`);
  }

  defence() {
    this._block = true;
  }

  calculateAttackPower() {
    return this.getAttack();
  }

  calculateDamage(attackPower) {
    if (this._block) {
      console.log(`${this.getName()} blocks the attack.`);

      this._block = false;
      return 0;
    }
    return attackPower;
  }

  win(defenderTotalHitpoints) {
    this.setAttack(this.getAttack() + 1);
    console.log(`${this.getName()} gets +1 to attack and current value becomes: ${this.getAttack()}`);
  }

}

class Monster extends Fighter {
  constructor({name, attack, hitpoints, totalHitpoints}) {
    super({name, attack, hitpoints, totalHitpoints});
    this._enrageCount = 0;
  }

  enrage() {
    this._enrageCount = 2;
  }

  calculateAttackPower() {
    if (this._enrageCount > 0) {
      console.log(`${this.getName()}'s attack power becomes 2X stronger.`);

      this._enrageCount--;
      return 2 * this.getAttack();
    }
    return this.getAttack();
  }

  calculateDamage(attackPower) {
    return attackPower;
  }

  win(defenderTotalHitpoints) {
    let increaseHitpoints = Math.floor(0.25 * defenderTotalHitpoints);
    let increaseTotalHitpoints = Math.floor(0.1 * defenderTotalHitpoints);

    this.setHitpoints(this.getHitpoints() + increaseHitpoints);
    this.setTotalHitpoints(this.getTotalHitpoints() + increaseTotalHitpoints);

    console.log(`${this.getName()} increased his health by ${increaseHitpoints} hitpoints and ${increaseTotalHitpoints} total hitpoints.
    Current values become: ${this.getHitpoints()} hitpoints and ${this.getTotalHitpoints()} total hitpoints.`);
  }
}

let heracles = new Champion({name: 'Heracles', attack: 10, hitpoints: 50, totalHitpoints: 50});
let boar = new Monster({name: 'Erymanthian Boar', attack: 5, hitpoints: 60, totalHitpoints: 60});

heracles.fight(boar);
heracles.defence();
boar.fight(heracles);

boar.enrage();
boar.fight(heracles);

heracles.defence();
boar.fight(heracles);

boar.fight(heracles);
heracles.fight(boar);

boar.enrage();
boar.fight(heracles);
boar.fight(heracles);
boar.fight(heracles);

heracles.fight(boar);

boar.fight(heracles);
boar.enrage();
boar.fight(heracles);
boar.fight(heracles);
