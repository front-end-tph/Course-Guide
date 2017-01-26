// Part 9

// Create an object that has a name attribute and a method called personalize.
// personalize should take a function as input. when personalize is called,
// an introductory string should be inserted before the input function's
// return valu e. Use the example in the console.assert to understand
// exactly how you should write the method. Including the period!

var politeObject = {
    name: "Frank"
}



//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
 //  you may need to use the special `this` keyword for this problem.

var tellEm = function() {
    return "I know what is going on here"
}

var promoteJS = function(){
   return "JavaScript is quite amazing"
}

var thinkHard = function(){
   return "whoa thats deep man"
}

var personalizedResult = politeObject.personalize(tellEm)
var anotherPersonalNote = politeObject.personalize(promoteJS)
var finalNote = politeObject.personalize(thinkHard)

console.assert( personalizedResult === "Hi, my name is Frank, and the result is I know what is going on here." )
console.assert( anotherPersonalNote === "Hi, my name is Frank, and the result is JavaScript is quite amazing." )
console.assert( finalNote === "Hi, my name is Frank, and the result is whoa thats deep man." )
