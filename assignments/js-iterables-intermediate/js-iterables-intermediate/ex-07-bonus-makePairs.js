/** ! Adventure Mode !
 * Ex : makePairs()
 *
 * Write a function called makePairs that takes an array of values and 
 * returns an an array of pair-arrays.
 *
 * e.g. makePairs(['hi','hello', 'howdy', 'greetings'])
 *       => [ ['hi', 'hello'] , ['howdy', 'greetings'] ]
 *
*/
 




var pairsOutput = makePairs([10,20,30,40,50,60,70,80]) 
//=> [ [10,20], [30,40], [50,60], [70,80] ]

var firstPair = pairsOutput[0];
var thirdPair = pairsOutput[2];

console.assert(pairsOutput.length === 4)
console.assert(firstPair.length === 2)
console.assert(firstPair[0] === 10)
console.assert(firstPair[1] === 20)
console.assert(thirdPair[0] === 50)
console.assert(thirdPair[1] === 60)