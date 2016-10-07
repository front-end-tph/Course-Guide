////------------------------------------------------------------------
// TASK 1 : `makeNameObjects()`
// write a method `names()`` which takes a string of
// comma-separated names (first and last) and then
// returns an object where each firstname is a key, and each
// lastname is a value
//
////------------------------------------------------------------------


function makeNameObjects(str) {

}

// EXAMPLE:
// names("George Washington, John Adams, Kanye West")
//   => {
//     George: "Washington",
//     John: "Adams",
//     Kanye: "West",
//     ...
//   }


var results = names("George Washington, John Adams, Kanye West, Charolette Webb")
console.assert(results.George === "Washington")
console.assert(results['John'] === "Adams")
console.assert(results['Kanye'] === "West")
console.assert(results.Charolette === "Webb")


////------------------------------------------------------------------
// TASK 2 : Write a function isPalindrome(x)
// that returns true if x is a palindrome,
// otherwise false.

//    Palindromes are words that are the same
//    going forwards and backwards. Examples:
//
//       i
//       dod
//       meeteem
//       TrickirT
////------------------------------------------------------------------

function isPalindrome(){}


console.assert( isPalindrome("tacocat") === true )
console.assert( isPalindrome("Tacocat") === false )
console.assert( isPalindrome("racecar") === true )
console.assert( isPalindrome("cowboy") === false )



////------------------------------------------------------------------
//  TASK 3 : `generatePagination()`
//
//  Pagination is common on news sites, e-commerce, and blogs.
//  Write a function called `generatePagination()` that prints
//  out the pagination text.
//
//  The function will accept the page number, products per page, and
// the
////------------------------------------------------------------------

function generatePagination(pageNumber, productsPerPage, totalProducts) {

}

console.assert(paginationText(1, 10, 30) === 'Showing 1 to 10 of 30 Products.')
console.assert(paginationText(3, 10, 26) === 'Showing 21 to 26 of 26 Products.')
console.assert(paginationText(4, 8,  80) === 'Showing 32 to 39 of 80 Products.')
console.assert(paginationText(1, 10,  8) === 'Showing 1 to 8 of 8 Products.')

////------------------------------------------------------------------
//  TASK 4 : `merge()`
//
//  Write a function called `merge()` that takes two objects and
//  returns a new object with their combined properties & values.
//
//  If the two objects have the same property, make sure that you
//  return the property-values from the objecti in the 2nd argument
//
////------------------------------------------------------------------

function merge(){}


var obj1 = {name: "Shaman Tilroy", age: 33, id: 6288}
var obj2 = {id: 6288, balance: 38832, accountActive: true }

var mergedObj1 = merge(obj1, obj2)
console.assert(mergedObj1.name === "ShamanTilroy")
console.assert(mergedObj1.id === 6288)
console.assert(mergedObj1.balance === 38832)
console.assert(mergedObj1.accountActive === true)


var obj3 = {title: "How to Wear a Bowtie", artist: "Showtime", released: 1984 }
var obj3 = {artist: "The Riverboat", released: 1980, album: "Wishy Washy", quantity: 10 }

var mergedObj2 = merge(obj3, obj4)
console.assert( mergedObj2.artist === "The Riverboat" )
console.assert( mergedObj2.released === 1980 )
console.assert( mergedObj2.title === "How to Wear a Bowtie")
console.assert( mergedObj2.quantity === 10 )
