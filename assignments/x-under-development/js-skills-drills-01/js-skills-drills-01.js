// write a method names() which takes a string of
// comma-separated names (first and last) and then
// returns an object where each firstname is a key, and each
// lastname is a value
//
// i.e. names("George Washington, John Adams, Kanye West")
//   .. --> {
//     George: "Washington",
//     John: "Adams",
//     Kanye: "West"
//   }

function names(str) {

}

var results = names("George Washington, John Adams, Kanye West")
console.assert(results.George === "Washington")
console.assert(results['John'] === "Adams")
console.assert(results['Kanye'] === "West")

// Write a function isPalindrome(x)
// that returns true if x is a palindrome,
// otherwise false.
//
// Palindromes are words that are the same
// going forwards and backwards. Examples:
//
// i
// dod
// meeteem
// TrickirT

function isPalindrome(){}

// tests

console.assert( isPalindrome("tacocat") === true )
console.assert( isPalindrome("Tacocat") === false )
console.assert( isPalindrome("racecar") === true )
console.assert( isPalindrome("cowboy") === false )



// Python dictionaries are inherently unsorted. So what do you do if you need to sort the contents of a dictionary.
//
// In this kata you will create a function that returns a sorted list of (key, value) tuples (Javascript: arrays of 2 items).
//
// The list must be sorted by the value and be sorted largest to smallest.

function sortDict(dict){
  Object.keys(dict).
}

// numbers as keys
sortDict({1:3,2:2,3:1})// [[1,3],[2,2],[3,1]]
sortDict({1:2,2:4,3:6})// [[3,6],[2,4],[1,2]]

// strings as keys
sortDict({'A':2,'K':4,'Z':6})// [['Z',6],['K',4],['A',2]]




/**
 * Pagination is common on news sites, e-commerce, and blogs. Write a function that
 * prints out the pagination text.
 */

function paginationText(pageNumber, pageSize, totalProducts) {

}


console.assert(paginationText(1, 10, 30) === 'Showing 1 to 10 of 30 Products.')
console.assert(paginationText(3, 10, 26) === 'Showing 21 to 26 of 26 Products.')
console.assert(paginationText(1, 10,  8) === 'Showing 1 to 8 of 8 Products.')
