// ex-09: getKeys() 

// Create a method called getKeys() that accepts an object as an argument and returns
// an array of the object's proerties
//
// getKeys({pid: 1238, title: 'Gold Necklace', price: 33})
//   => ['pid', 'title', 'price']











//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var output_1 = getKeys({firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"})

var output_2 = getKeys({
	_id:"588b560", 
	name: 'Sally Pittman', 
	gender:"male", 
	favoriteFruit: "apple", 
	company: "Ersum" 
})

console.assert( output_1.length === 4 )
console.assert( output_1.indexOf('age') >= 0 )
console.assert( output_1.indexOf('Doe') === -1 )
//--------------
console.assert( output_2.indexOf('age') === -1 )
console.assert( output_2.indexOf('favoriteFruit') >= 0 )
console.assert( output_2.indexOf('company') >= 0 )

