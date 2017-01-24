
/**
 * Ex-04 : countWordInArray()
 *
 * Write a function called `countOccurrenceInArray` that takes 2 inputs: a string, and an array. 
 * The function should return a number that is equal to the number of times the string-argument
 * is found in the array.
 * 
*/

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var sentenceArray1 = ['i', 'saw', 'my', 'brother', 'who', 'supposedly', 'saw', 'a', 'saw']]
console.assert( countWordInArray('saw', sentenceArray1) === 3)
console.assert( countWordInArray('sister', sentenceArray1) === 0)

var sentenceArray2 = ["take", 'the', 'first', 'right', 'and', 'then', 'the', 'third', 'right']
console.assert( countWordInArray('right', sentenceArray2) === 2)
