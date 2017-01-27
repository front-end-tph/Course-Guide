// ex-10 : pluck()

// Write a function pluck() that, given a list of objects, extracts a list of
// the values associated with a given property name.

// e.g:
// pluck(stooges, 'name') should yield the array, ['moe','larry','curly']









//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var stooges = [
   {name: 'moe', age: 40, hairStyle: "bowl cut" },
   {name: 'larry', age: 50, hairStyle: "balding"},
   {name: 'curly', age: 53, hairStyle: "buzzed"},
   {name: 'shemp', age: 62, hairStyle: "parted"},
   {name: 'joe', age: 47, hairStyle: "bald"}

]

var outputArray_1 = pluck(stooges, 'name')
var outputArray_2 = pluck(stooges, 'hairStyle')
var outputArray_3 = pluck(stooges, 'age')

console.assert( outputArray_1[0] === 'moe' )
console.assert( outputArray_1[3] === 'shemp' )
//-----------
console.assert( outputArray_2[1] === 'balding' )
console.assert( outputArray_2[2] === 'buzzed' )

//-----------
console.assert( outputArray_3[2] === 53 )
console.assert( outputArray_3[4] === 47 )