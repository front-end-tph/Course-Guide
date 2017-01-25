
/** ! Adventure Mode !
 * Ex : hasComplements() *
 *
 * Write a function called hasComplements that accepts a target number 
 * and an array of numbers
 *
 * If the sum of any two numbers in the array of numbers equals the 
 * target number , then the function should return `true`, 
 * otherwise, the function should return `false`.
 * 
*/





var oddsArray = [1, 3, 5, 7, 9, 11, 13]
var anotherArray = [2, 5, 6, 8, 12]

console.assert( hasComplements(6,  oddsArray) === true )
console.assert( hasComplements(7, oddsArray) === false )
console.assert( hasComplements(14, oddsArray) === true )
console.assert( hasComplements(17, oddsArray) === false )
console.assert( hasComplements(7, anotherArray) === true )
console.assert( hasComplements(9,  anotherArray) === false )
console.assert( hasComplements(14, anotherArray) === true )
console.assert( hasComplements(15, anotherArray) === false )




