
/**
 * Ex-05 : countWordInArray()
 *
 * Write a function called `countWordInArray` that takes 2 inputs: a string, and an array. 
 * The function should return a number that is equal to the number of times the string-argument
 * is found in the array.
 * 
**/









//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var sentenceArray_1 = ['i', 'saw', 'my', 'brother', 'who', 'supposedly', 'saw', 'my', 'sister', 'take', 'a', 'saw']
console.assert( countWordInArray('saw', sentenceArray_1) === 3)
console.assert( countWordInArray('take', sentenceArray_1) === 1)
console.assert( countWordInArray('brother', sentenceArray_1) === 1)
console.assert( countWordInArray('sister', sentenceArray_1) === 1)

var sentenceArray_2 = ["sister", "nancy", "take", 'the', 'first', 'right', 'and', 'take', 'the', 'third', 'left', 'on', 'sister', 'street']
console.assert( countWordInArray('take', sentenceArray_2) === 2)
console.assert( countWordInArray('brother', sentenceArray_2) === 0)
console.assert( countWordInArray('sister', sentenceArray_2) === 2)
