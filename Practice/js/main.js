function makeAdder(num) {
  return function addFunction(x) {
    return num + x
  }
}
let addFunction = makeAdder(5);
console.log(addFunction(2));


/* Class methods  */

class Charmander {
  constructor(props) {
    this.height = props.height;
    this.weight = props.weight;
    this.type = 'Fire';
    this.specie = 'Lizard Pokémon';
  }

  getHeight() {
    return this.height
  }

  getWeight() {
    return this.weight
  }

  getType() {
    return this.type
  }

  getSpecie() {
    return this.specie
  }

  canFly() {
    return false
  }
}

class Charmeleon extends Charmander {
  constructor(props) {
    super(props);
    this.specie = 'Flame Pokémon';
  }
}

class Charizard extends Charmeleon {
  constructor(props) {
    super(props);
    this.type = 'Fly';
  }

  canFly() {
    return true
  }

  static canWalk() {
    return true
  }
}

let embury = new Charmander({height: 1, weight: 15});
let mercury = new Charmeleon({height: 2, weight: 45});
let morderbrand = new Charizard({height: 10, weight: 200});
console.log(embury.getSpecie());
console.log(embury.getType() === mercury.getType());
console.log(mercury.getType() === morderbrand.getType());
console.log(embury.getSpecie());
console.log(mercury.getSpecie());
console.log(morderbrand.getSpecie() === mercury.getSpecie());
console.log(embury.getHeight());
console.log(Charizard.canWalk());
console.log(embury.canFly());
console.log(embury.canFly() === mercury.canFly());
console.log(morderbrand.canFly());


/*  Pure Function  */

const numList = '11-15-1944';
function inputNumers(numbers) {
  return numbers.split("-").reverse().join(", ");
}
console.log(inputNumers(numList));


/*  Exceptions practice */

try {
  for (let i = 0; i <= 11; i++) {
    if (i === 11) {
      throw new Error('Ten is enough')
    }
    console.log(i);
  }
} catch (error) {
  console.error(error, 'catch block');
}


/*  Promises  */

const promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve('a')
  }, 1000)
})
  .then(result => {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        return resolve(result + 'b')
      }, 1000)
    })
  })
  .then(() => {
      throw new Error('ab')
    }
  )
  .then(null, onRejected => {
      throw onRejected
    }
  )
  .catch(function (error) {
    console.error(error)
  });


/*   Async / Await  */

