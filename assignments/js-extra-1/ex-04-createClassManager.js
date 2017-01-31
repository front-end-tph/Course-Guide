// ex-04 createClassManger

// Create a function called `createClassManager`
// the function should take a string and return an object

// the returned object should contain an 
//   +  a `.add` method,  
//   +  a `studentGrades` property (see .studentGrades in asserts for expected behavior)
//   +  a `className` property whose value is the initial provided string

// 
//



//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var classManager = createClassManager("Phys Ed - 1st Period")
// returns => {
//      add: [you write the function],
//      studentGrades: [you create this data structure -- look at the asserts below],
//      className: [input String from when the object is created]
//  } 

classManager.add({student: "Jimmy", grade: "A"})
classManager.add({student: "Sally", grade: "B"})
classManager.add({student: "Tammy", grade: "C"})
classManager.add({student: "Sherry", grade: "B"})
classManager.add({student: "Kenny", grade: "B"})
classManager.add({student: "Jenny", grade: "B"})
classManager.add({student: "Kelly", grade: "C"})
classManager.add({student: "Romy", grade: "D"})
classManager.add({student: "Roxy", grade: "A"})
classManager.add({student: "Johnny", grade: "A"})


console.assert(  classManager.className === "Phys Ed - 1st Period" )

console.assert(  typeof classManager.studentGrades === 'object' )
console.assert(  typeof classManager.add === 'function' )

// .studentGrades
console.assert( classManager.studentGrades['A'].length === 3 )
console.assert( classManager.studentGrades['A'].indexOf('Roxy') >= 0)
console.assert( classManager.studentGrades['B'].length === 4 )
console.assert( classManager.studentGrades['B'].indexOf('Sherry') >= 0 )
console.assert( classManager.studentGrades['C'].length === 2 )




