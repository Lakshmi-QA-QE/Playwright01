//A function isPassed(score) that returns "PASS" if score is 40 or more, otherwise "FAIL".

const { normalize } = require("node:path")
const test = require("node:test")

function isPassed(score){
    if(score>=40)
    return "pass"
    else
        return "fail"
}

console.log(isPassed(10))
//An array testResults = [85, 30, 60, 39, 100]. Use a for...of loop and print Score 85: PASS for each one, using your function.
const testResults = [85, 30, 60, 39, 100]
for(const x of testResults){
    console.log(`Score ${x} : ${isPassed(x)}`)
}

//An arrow function square(n) that returns n * n. Print square(6).
function square(n){
    return n*n
}
const cube=(n)=>{
    return n*n*n
}
console.log(cube(6))
console.log(square(6))
console.log(10%3)

// uick quiz (answer in your own words)

// // Why do we use === instead of ==?
// === strict check , == loose check (no type conversion)
// // What does 10 % 3 give, and where might you use %?
// 3.33- > remainder
// // What is the difference between a normal function and an arrow function in how
// //  you write it?

// normal function(test){}
// arrow function : tester()=>{}