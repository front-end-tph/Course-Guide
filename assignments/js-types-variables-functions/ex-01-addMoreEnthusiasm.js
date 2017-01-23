
/**
 * PART 01 : withMoreEnthusiam()
 * (DEMO)
 *
 * Write a function called withMoreEnthusiam that takes a string as
 * input and appends three exclamation marks to the end of the string.
 */


// DEMO
// YOU, the student, will write the function
function addMoreEnthusiam(inputTxt){
	var inputWithEnthusiasm = inputTxt + "!!!"
   return inputWithEnthusiasm
}




//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var funcOutput1 = addMoreEnthusiam("I want pizza")
console.assert( funcOutput1  === "I want pizza!!!" );

var funcOutput2 = addMoreEnthusiam("Hey")
console.assert( funcOutput2 === "Hey!!!");
