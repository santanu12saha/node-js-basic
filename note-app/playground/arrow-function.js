var square = (x) => {
    var result = x * x;
    return result;
};
console.log(square(9));

var square1 = (x) => x * x;
console.log(square1(2));

var square2 = x => x * x;
console.log(square2(4));

var user = {
    name: 'Santanu',
    sayHi: () => {
        console.log(`Hi`);
    }
};

user.sayHi();

var user1 = {
    name: 'Santanu',
    sayHi: () => {
        console.log(`Hi, I'm ${this.name}`); // arrow function do not bind a this keyword
    }
};

user1.sayHi();

var user2 = {
    name: 'Santanu',
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi, I'm ${this.name}`); // arrow function do not bind a this keyword
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi, I'm ${this.name}`);
    }
};

user2.sayHiAlt(1,2,3);
console.log(`---------------------------`);
user2.sayHi();
