// Part 6

// Write a function called reverseObject(). It should take as input an object,
// and it should output a new object where the keys and values are reversed.


var object1 = {
    occupants: 4,
    apartment_no: "2b",
    structuralIntegrity: "failing",
	 squareFeet: 700
}

var object2 = {
	name: "Abby",
	gender: "female",
	description: "dog"
}

var reversedObj = reverseObject(object1)
var reversedObj2 = reversedObj(object2)

console.assert( reversedObj['2b'] === 'apartment_no' )
console.assert( reversedObj.failing === 'structuralIntegrity' )

console.assert( reversedObj2.dog === 'description')
console.assert( reversedObj2['female'] === 'gender')