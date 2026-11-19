//Array 

const s=[10,20,30]
console.log(s.length)
console.log(s[0], s.pop());
console.log(s.pop());
console.log(s.push(50));
console.log(s)

//Obiject
const ob={
    user:"u1", 
    name:"pari"

}
console.log(ob.user)
console.log(ob["name"])

//Array of objects

const ab=[

    {user:"lap",pwd:"u123"},
    {user:"lap2",pwd:"u1234"},

];
console.log(ab[1].user)

//Array methods
const users = [
  { name: "Asha", age: 25, passed: true },
  { name: "Ravi", age: 30, passed: false },
  { name: "Meena", age: 28, passed: true },
];

users.forEach((u) => console.log(u.name));
//Map
const names = users.map((u) => u.name);
console.log(names); // ["Asha", "Ravi", "Meena"]

const ages = users.map((u) => u.age + 1);
console.log(ages); // [26, 31, 29]

const passeds= users.map((u)=>u.passed)
console.log(passeds);

const passedUsers = users.filter((u) => u.passed === true);
console.log(passedUsers)
console.log(passedUsers.length); // 2

const ravi = users.find((u) => u.name === "Ravi");
console.log(ravi.age); // 30

console.log(users.map((u) => u.age)); // [25,30,28]
console.log(users.filter((u) => u.age > 26)); /*
 [
  { name: 'Ravi', age: 30, passed: false },
  { name: 'Meena', age: 28, passed: true }
]*/
console.log(users.find((u) => u.name === "Meena")); // { name: 'Meena', age: 28, passed: true }
console.log(users.find((u) => u.name === "Zara")); //undefined

// findIndex = positon

console.log(users.findIndex((u) => u.name === "Meena")); // 2

//destructuring

// const { username, password, role } = user;
// console.log(username, password, role);


// console.log(user.username);
// console.log(user.password);
// console.log(user.role);


const testData = { username: "standard_user", password: "secret_sauce" };
const { username, password } = testData;

await page.fill("#user-name", username);
await page.fill("#password", password);