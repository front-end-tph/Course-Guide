/**
 * Part 05: makeSimpleGreeting()
 *
 * Write a function called makeSimpleGreeting that takes a string and a boolean
 * as arguments. The string will be a username and the boolean will signify 
 * a true/false value for a returning customer.
 * 
 * If the 2nd input is the boolean `true`, 
 * then the function should return a 'Welcome back,' greeting
 *    Ex: makeSimpleGreeting('Janet', true) //=> "Welcome back, Janet." 
 *
 * If the 2nd input is the boolean `false`, 
 * then the function should return a 'Hello there' greeting
 *    Ex: makeSimpleGreeting('Janet', false) //=> "Hello there, Janet!" 
 */




//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

var funcOutput1 = makeSimpleGreeting("Atushi", true)
console.assert( funcOutput1  === "Welcome back, Atushi." );

var funcOutput2 = makeSimpleGreeting("Mira", false)
console.assert( funcOutput2 === "Hello there, Mira!");

var funcOutput3 = makeSimpleGreeting("Nico", false)
console.assert(funcOutput3 !== "Welcome back, Nico.");
