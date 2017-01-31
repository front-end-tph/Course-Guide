
/**  ex-01 findIndexesOfCapitals

 * Write a function findCapitalsIndexes that takes a single (`word`) as argument. The function must
 * return an ordered list containing the indexes of all capital letters in the
 * string.
 *
 * Example
 * findIndexesOfCapitals('Yo BoZo') 
    => [0,3,5]; ('Y' @ index-0 , 'B' @index-3, 'Z' @index-5)

*/





//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var output_1 = findIndexesOfCapitals('abCdE')
console.assert(output_1.length === 2)
console.assert(output_1[0] === 2)
console.assert(output_1[1] === 4)


var output_2 = findIndexesOfCapitals('Down with OPP')
console.assert(output_2.length === 4)
console.assert(output_2[1] === 10) 
console.assert(output_2[2] === 11)

var output_3 = findIndexesOfCapitals('in3FXLs3xnQ. PoLLWx73,X')
console.assert(output_3.length === 9 )
console.assert(output_3[1] === 4)
console.assert(output_3[4] === 13)




