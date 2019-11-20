class Fighter{
  constructor({name, attack, hitpoints}){

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

  fight(defender){
    if (defender.isAlive() ) {
      defender._hitpoints = defender._hitpoints - this._attack;
      console.log(defender._hitpoints)
    }
  }

  isAlive(){
    return this._hitpoints > 0;


  }
}

class Champion extends Fighter{
  constructor(name, attack, hitpoints){
    super(name, attack, hitpoints);
    this._block = false;

  }


  rest(){
    // this._hitpoints += 5;
    this.setHitpoints(this.getHitpoints() + 5)
  }

  defence(){
    this._block = true;
  }

  fight(defender) {
    super.fight(defender);

  }

}

class Monster extends Fighter{
  constructor(name, attack, hitpoints){
    super(name, attack, hitpoints);

  }

  enrage(){

    this.setAttack(this.getAttack() * 2)


  }

}

let heracles = new Champion({name: 'Heracles', attack: 10, hitpoints: 50});
let boar = new Monster({name: 'Erymanthian Boar', attack: 5, hitpoints: 100});

heracles.fight(boar);
boar.getHitpoints();

heracles.rest();

boar.enrage()