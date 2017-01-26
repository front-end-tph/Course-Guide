// EXAMPLE:
// makeNamesObject("George Washington, John Adams, Kanye West")
//   => {
//     George: "Washington",
//     John: "Adams",
//     Kanye: "West"
//   }

function makeNamesObject(name1, name2, name3){
	var newObj = {}
	var nameArr1 = name1.split(' ');
	var nameArr2 = name2.split(' ');
	var nameArr3 = name3.split(' ');

	newObj[nameArr1[0]] = nameArr1[1]
	newObj[nameArr2[0]] = nameArr2[1]
	newObj[nameArr3[0]] = nameArr3[1]


	return newObj
	
}

var greatMenObj = makeNamesObject("George Washington", "Abraham Lincoln", "Kanye West")
var greatWomenObj = makeNamesObject("Rosa Parks", "Amelia Earhart", "Charlotte Webb")

console.assert(greatMenObj.George === "Washington")
console.assert(greatMenObj['Abe'] === "Lincoln")
console.assert(greatMenObj.Kanye === "West")
//-------------------
console.assert(greatWomenObj.Rosa === "Parks")
console.assert(greatWomenObj.Charlotte === "Webb")