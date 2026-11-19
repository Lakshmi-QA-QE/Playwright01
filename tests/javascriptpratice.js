let isboolean= true;
const name="Lals"
const id=75
const list=[1,2,3]
const ob={id:345}
console.log(name);
// Make variables for a test case: testName, browser, retries, isHeadless.
const testName="user1"
const browser ="chrome"
const retries=2
const isHeadless=true
const checkNull=null
// Print: Running Login Test on chromium with 2 retries.
console.log(`Running Login Test on chromium with ${retries} retries.`)
// Print the typeof of each variable.
console.log(typeof retries, typeof testName, typeof browser, typeof retries, typeof isHeadless, typeof checkNull)

// What is the difference between const and let?
// const will not reaasigned , let can be 
// // What will this print? console.log(`Retries: ${retries + 1}`) (assume retries is 2)
// 3
// What is the typeof of null? (Tricky! Try it in your file and see.)
// object

