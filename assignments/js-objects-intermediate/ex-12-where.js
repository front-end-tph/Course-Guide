 // Ex-12 where() – ADVENTURE MODE

 // Write a function where() that takes two inputs, a list of objects and
 // a properties object. It should return a new list containing only those
 // objects that meet the key-value conditions in the properties object.









//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

 var plays = [
     { title: "Cymbeline", author: "Shakespeare", year: 1623 },
     { title: "The Tempest", author: "Shakespeare", year: 1623 },
     { title: "Hamlet", author: "Shakespeare", year: 1603 },
     { title: "The Maid in the Mill", author: "Fletcher", year: 1623 },
     { title: "A Streetcar Named Desire", author: "Williams", year: 1947 },
     { title: "King Lear", author: "Shakespeare", year: 1608 },
     { title: "A Midsummer Night's Dream", author: "Shakespeare", year: 1600 },
     { title: "Macbeth", author: "Shakespeare", year: 1623 },
     { title: "King Lear", author: "Shakespeare", year: 1608 },
     { title: "Glass Menagerie", author: "Williams", year: 1944 },
     { title: "The Misunderstanding", author: "Camus", year: 1944 },
     { title: "The Just Assassins", author: "Camus", year: 1949 },
     { title: "Pericles", author: "Shakespeare", year: 1609 },
     { title: "Caligula", author: "Camus", year: 1944 },
     { title: "Taming of the Shrew", author: "Shakespeare", year: 1623 },
     { title: "Death of a Salesman", author: "Miller", year: 1949 },
 ]

 var sh8sprQuery = where(plays, {author: "Shakespeare"})
 console.assert( sh8sprQuery instanceof Array )
 console.assert( sh8sprQuery.length === 7 )
 console.assert( sh8sprQuery[0]['title'] === "Cymbeline" )

 var sh8sprQuery2 = where(plays, year: 1611})
 console.assert( sh8sprQuery2.length === 0 )

 var midCentPlays = where(plays, {year: 1944})
 console.assert( midCentPlays.length === 3 )

 var sh8sprQuery3 = where(plays, {author: "Shakespeare", year: 1623})
 console.assert( sh8sprQuery3.length === 4 )

 var sh8sprQuery3 = where(plays, {author: "Camus", year: 1944})
 console.assert( sh8sprQuery3.length === 2 )