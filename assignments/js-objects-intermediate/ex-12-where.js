 // Ex-12 where() – ADVENTURE MODE

 // Write a function where() that takes two inputs, a list of objects and
 // a properties object. It should return a new list containing only those
 // objects that meet the key-value conditions in the properties object.









//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

 var plays = [
     { title: "Cymbeline", author: "Shakespeare", year: 1623 },
     { title: "The Tempest", author: "Shakespeare", year: 1623 },
     { title: "Hamlet", author: "Shakespeare", year: 1603 },
     { title: "1984", author: "George Orwell", year: 1949 },
     { title: "A Midsummer Night's Dream", author: "Shakespeare", year: 1600 },
     { title: "Macbeth", author: "Shakespeare", year: 1620 },
     { title: "Death of a Salesman", author: "Arthur Miller", year: 1949 },
     { title: "Two Blind Mice", author: "Samuel and Bella Spewack", year: 1949 }
 ]

 var sh8sprQuery = where(plays, {author: "Shakespeare"})
 console.assert( sh8sprQuery instanceof Array )
 console.assert( sh8sprQuery.length === 5 )
 console.assert( sh8sprQuery[0]['title'] === "Cymbeline" )


 var sh8sprQuery2 = where(plays, {author: "Shakespeare", year: 1611})
 console.assert( sh8sprQuery2.length === 0 )


 var sh8sprQuery3 = where(plays, {author: "Shakespeare", year: 1623})
 console.assert( sh8sprQuery3.length === 2 )


 var midCentPlays = where(plays, {year: 1949})
 console.assert( midCentPlays.length === 3 )