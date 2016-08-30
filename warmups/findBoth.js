// -----------------------------------
// (3) function findBoth(){...}
// -----------------------------------


 /*
  * PROBLEM `findBoth`:
  * Write a function called `findBoth` that takes two arrays of primitive values a and b 
  * returns an array that includes only the elements that appear in both a and b.
  * A value should not appear more than once in the returned array.
  * 
  * EXAMPLE: findBoth([1,3,5,8], [])
  */


function findBoth(array1, array2){
  return array1.filter((val1)=>{  return array2.find((val2)=>{ return val1 === val2}) }).reduce( (prevVal, currEl) => { return prevVal.indexOf(currEl) === -1 ? prevVal.concat(currEl) : prevVal },[] )
}



//    describe('findBoth()', function(){
//       it('should return ONLY the common values between the 2 arrays', function(){
//       console.log(myModule.findBoth([3,2,11,10, 12], [11,3,44,9,83,2]))

//       myModule
//          .findBoth([3,2,11,10,12], [11,3,44,9,83,2])
//          .should
//          .containDeep([2, 3, 11]);

//       myModule
//          .findBoth([3,2,11,10,12], [11,3,44,9,83,2])
//          .should
//          .not
//          .containDeep([4, 5, 10, 44, 83]);

//       myModule
//          .findBoth(["yo","hey","hello","greetings","hai","sweet", "nice"], ["shrimp", "season","greetings","nice", "sweet", "sugar"])
//          .should
//          .containDeep(["sweet", "greetings", "nice"]);
//       })

//       it('should not allow duplicate values', function(){
//       myModule
//          .findBoth([11, 3, 2, 11, 11, 3, 4, 10], [2, 99, 2, 3, 11, 44, 11, 9, 83, 2, 3])
//          .should
//          .not
//          .containDeep([2, 3, 3, 11, 11]);       
//    })
// })