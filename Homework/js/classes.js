class User {
  constructor(id, firstName, lastName, age) {
    this._id = id;
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this._lastName = value;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value;
  }

}

class UserList {
  constructor(users) {
    this._users = users;
  }

  showNames() {
    for (let user of this._users) {
      console.log(`${user.firstName} ${user.lastName}`);

    }
    return this
  }

  showById(id) {
    for (let user of this._users) {
      if (user.id === id) {
        console.log(`${user.firstName} ${user.lastName}`);
        return this;
      }
    }
    console.log(`Unable to find user with id: ${id}`);
    return this;
  }

  add(newFirstName, newLastName, newAge) {
    let newId = Math.floor(Math.random() * 1e13).toString();
    console.log(`Hi everyone, I am: ${newFirstName}`);
    this._users.push(new User(newId, newFirstName, newLastName, newAge));
    return this;
  }

  removeById(id) {
    for (let user of this._users) {
      if (user.id === id) {
        this._users.splice(user, 1);
        console.log(`bye bye ${user.firstName}`);
        return this;
      }
    }
    console.log(`Unable to find user with id: ${id}`)
    return this;
  }

  logUsersCould(){
    console.log(this._users.length);
    return this;
  }

}

let users = new UserList([new User("1485249082126", "John", "Snow", 30),
  new User("9485249082126", "Tom", "Fox", 35)]);

// users.showNames();
// users.showById("9485249082126");
// users.add("Ros", "Pop", 25);
// users.removeById("1485249082126");
// users.logUsersCould();

users.showNames().showById("9485249082126").add("Ros", "Pop", 25);