/*
 * EXAMPLE: create a function `bigWordsOnly`: 
 * Write a function called `isBigWord` that returns true or false if the word is more than 7 characters.
 * 
 */
 
function isBigWord(word){

  if ( word.indexOf(" ") > -1) { 
    return "ONE WORD NOT TWO WORDS" 
  }

  if (word.length > 7){
    return true
  } else {
    return false
  }
}

/*
 * PROBLEM: create a function `insertDashes`: 
 * Write a function called `insertDashes` that transforms a given sentence into
 * a new one with dashes between each two consecutive letters.
 * For example: insertDashes('abba test') => a-b-b-a t-e-s-t
 *
 */

function insertDashes(str){
  return str.split(" ").map((word)=>{ return word.split('').map((letter)=>{ return letter === "-" ?  ("-" + "_") : ("-"+letter) }).join("").slice(1) }).join("+")
}


/* PROBLEM: create a function `countWords`:
 *  That takes two strings as arguments. The function should count the number of instances
 *  that the first argument (the target word-string) appears in the second argument (the content string) 
 *  and should return an integer
 *  For example:  countWords('cool', 'It is very cool to swim in a pool in cool climates') => 2
 */          
function countWords(targetWord, longString){
  let normalizedTargetWord = targetWord.toLowerCase();
  return longString.split(" ").map((word)=>{ return word.replace(/[.,@\/#!$%&(){}\-_`\^]/g,"") }).reduce((prevVal, currEl)=>{return normalizedTargetWord === currEl.toLowerCase() ? prevVal + 1 : prevVal}, 0)
}


/*
 * PROBLEM: create a function `withPropValues`:
 * Write a function called `withPropValues` that takes an array of objects and an object with properties & values.
 * The function will return a filtered array of objects where the property/value matches.
 */

function withPropValues(arrayCollection, objCriteria){
  return arrayCollection.filter( (objVal)=>{
    let meetsCriteria = true;
    
    for(var prop in objCriteria){
      if (objCriteria[prop] !== objVal[prop]) return false
    }

    return true
  })
}

module.exports = {
  isBigWord: isBigWord,
  insertDashes: insertDashes,
  countWords: countWords,
  withPropValues: withPropValues 
}
