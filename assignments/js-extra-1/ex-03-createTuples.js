// ex-04 createTuples()

// Write a function called createTuples that converts an object 
// into a array of [key, value] pair-arrays.
//
//  var profile = {name: "Travis", } 
//  createTuples()



//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var statsObj = {
	name: "Lebron James",
	ppg: 25.6,
	apg: 8.7,
	rpg: 7.7,
}

var billboardHits = {
	1995: "Coolio - Gangsta's Paradise",
	1996: "Los del Rio - Macarena",
 	2002: "Nickelback - How you Remind Me",
}

var tuples_1      = createTuples(statsObj)
var tuples_2      = createTuples(billboardHits)


console.assert( tuples_1.length === 4 )
console.assert(
	tuples_1[0][0] === "name"  && tuples_1[0][1]==="Lebron James"|| 
	tuples_1[0][0] === "ppg"  && tuples_1[0][1]=== 25.6|| 
	tuples_1[0][0] === "apg"  && tuples_1[0][1]=== 8.7 || 
   tuples_1[0][0] === "rpg" && tuples_1[0][1]=== 7.7 
)

console.assert( tuples_1.length === 3  )
console.assert(
	tuples_2[0][0] === '1995' && tuples_2[0][1] === "Coolio - Gangsta's Paradise" || 
	tuples_2[0][0] === '1996' && tuples_2[0][1] === "Los del Rio - Macarena" || 
	tuples_2[0][0] === '2002' && tuples_2[0][1] === "Nickelback - How you Remind Me" 
)