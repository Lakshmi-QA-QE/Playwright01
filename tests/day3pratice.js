// Make an array scores = [85, 30, 60, 39, 100].

const score = [85, 30, 60, 39, 100]
// Use filter to get only scores of 40 or more, and print them.
const more40= score.filter((u)=> u>=40)
console.log(more40)
// Use map to create a new array where each score has 5 added, and print it.
const Add5=score.map((u)=> u+5)
console.log(Add5)
// Make an array of objects tests with 3 items, each with name and status ("PASS" or "FAIL"). One of them should be named "Login".
const arob=[
    {name:"U1", status:"Pass"},
    {name:"Login", status:"Fail"},
    {name:"U3", status:"Pass"}
]
// Use find to get the test named "Login", and print its status.
const findL=arob.find((u)=>u.name==="Login")
console.log(findL)

// Use destructuring to get name and status from the first test, and print them.tests/day3pratice.js
