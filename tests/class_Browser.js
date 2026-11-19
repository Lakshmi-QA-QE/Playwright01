// Export isPassed from helpers.js and import it in day5.js.// completed
// Make a class Browser with a method open() that prints Opening chromium.
// class class_Browser{

const { error } = require("node:console");

    
//     open(Browser_Name){
//     console.log(` open ${Browser_Name}`)
//     }
// }

// const p=new class_Browser()
// p.open("Chromium")
// Stringify { test: "Login", status: "PASS" }, parse it back, print .status.

// const st=JSON.stringify({ test: "Login", status: "PASS" })
// const ob=JSON.parse(st);

// console.log(st);
// console.log(ob)
// console.log(ob.status)
// console.log(st.status)
// Put JSON.parse("abc") in try/catch and print Invalid JSON.

try{
const t=JSON.parse("abc")
}
catch(error){
console.log(error.message);


}