// ex-02 getCentury()


/**
 *  Return the inputted numerical year into century format. 
 * For example 
 * getCentury(2017)
 *   => `21st`  
 * getCentury(1886)
 *   => '19th'. 
 *
 */









//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~


// ---------------------------
console.assert( getCentury(38) === '1st' )
console.assert( getCentury(138) === '2nd' )
console.assert( getCentury(239) === '3rd' )
console.assert( getCentury(389) === '4th' )

console.assert( getCentury(907) === '10th' )
console.assert( getCentury(1002) === '11th' )
console.assert( getCentury(1134) === '12th' )
console.assert( getCentury(1238) === '13th' )
console.assert( getCentury(1452) === '15th' )
console.assert( getCentury(1948) === '20th' )
console.assert( getCentury(2016) === '21st' )
console.assert( getCentury(2136) === '22nd' )
console.assert( getCentury(3299) === '33rd' )
console.assert( getCentury(8436) === '85th' )