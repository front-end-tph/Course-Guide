// Ex-07 : reverseAll()

// Write a function called reverseAll(). It should take as input an array of
// objects, and it should output an array of objects with all of the keys and values
// reversed. 

var users = [
   { willis: 'president@gmail.com',hobby: 'basketball' , favoriteFood: "pate" },
   { benzo: 'bonjourben@yahoo.com', hobby:'dealmaking' , favoriteFood: "steak" },
   { yammer: 'yeb@aol.com', hobby: 'portraiture',  favoriteFood: "croissant" },
   { jimbo: 'coolguy@aol.com', hobby: 'dancing',  favoriteFood: "hotpockets" }
]
// should yield: [{'president@gmail.com': 'willis',basketball: 'hobby'}, ....]

var flippedEverything = reverseAll(users)

console.assert( flippedUsers[1].steak === 'favoriteFood' )
console.assert( flippedUsers[2].portraiture === 'hobby' )
console.assert( flippedUsers[2]['yeb@aol.com'] === 'yammer' )
console.assert( flippedUsers[3]['coolguy@aol.com'] === 'jimbo' )
