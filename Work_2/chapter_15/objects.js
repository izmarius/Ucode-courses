// object literal
const userOne = {
  username: "ryu",
  email: "ryu@gmail.com",
  login() {
    console.log("user logged in");
  },
};
// console.log(userOne.username, userOne.email);
// userOne.login();

//objects classes
class User {
  constructor(username) {
    // just for properties
    this.username = username;
    this.score = 0;
  }

  login() {
    console.log(`${this.username} just logged in`);
  }

  logout() {
    console.log(`${this.username} just logged out`);
  }

  increseScore() {
    this.score++;
    console.log(`${this.username} was a score of ${this.score}`);
  }
}

class Admin extends User {
  constructor(username, title) {
      super(username);
      this.title = title;
  }

  deleteUser(user) {
    users = users.filter((u) => u.username !== user.username);
  }
}

const userU1 = new User("mario");
const userU2 = new User("luigi");
const userU3 = new Admin("marius", "super-user");

let users = [userU1, userU2, userU3];
console.log(userU3.constructor.name);
console.log(users);
userU3.deleteUser(userU2);
console.log(users);

console.log(userU1);
console.log(userU2);
console.log(userU3);

//objects funtions
function Person (name, birthYear) {
  this.name = name;
  this.birthYear = birthYear;
}

Person.prototype.walk = function () {
  console.log(`${this.name} started walking`);
};

function President (name, birthYear) {
  Person.call(this, name, birthYear);
}

President.prototype = Object.create(Person.prototype);
President.prototype.signLaws = function () {
  // sign laws
};

const person1 = new Person('marius', 1992);
const president = new President('mario', 1990);
console.log(person1);
console.log(president); 