var should = require('should'),
    myModule = require('./exercise-module.js')

describe('expected behavior from answers in exercise-module.js', function(){

// ---------------------------
// (0 - Exampel) function insertDashes(){...}
// ---------------------------
   describe('isBigWord()', function(){
      it('should make a big word', function(){
         myModule.isBigWord("hello").should.equal(false)
         myModule.isBigWord("headphones").should.equal(true)
      }

      // change from `xit` to `it` in order to run this test
      xit('should make a big word', function(){
         myModule.isBigWord("hello headphones").should.equal("ONE WORD NOT TWO WORDS")
      }

   })

// ---------------------------
// (1) function insertDashes(){...}
// ---------------------------

   describe('insertDashes()', function(){

      xit('should insert a dash between the inside letters of a word', function(){
         myModule
            .insertDashes("hello")
            .should
            .equal("h-e-l-l-o")

         myModule
            .insertDashes("okay")
            .should
            .equal('o-k-a-y')
      })

      xit('should insert a plus whenever there is a space', function(){
         myModule
            .insertDashes("hello bye")
            .should
            .equal("h-e-l-l-o+b-y-e")
      })

      xit('should substitute an underscore `_` for a `-` in the input string', function(){
         myModule
            .insertDashes("jake white-olson")
            .should
            .equal("j-a-k-e+w-h-i-t-e-_-o-l-s-o-n")
      })    

})  

// -----------------------------------
// (2) function countWords(){...}
// -----------------------------------
   describe('countWords()', function(){

      xit('should return the instances of a word in a sentence-string', function(){
         
         myModule
            .countWords('great', 'It has been a great day and a great week and I hope it will be a great month and great year.')
            .should
            .equal(4)
      })

      xit('should account for capitalized letters in the word-count', function(){
         myModule
         .countWords("bill", "Bill is going to pay the bill tonight. Please don't bill me, and send Bill the bill for our meal.")
         .should
         .equal(5)
      })

      xit('should account for punctuation AND capitalized letters', function(){
         myModule
            .countWords("well", "Well, i really like to abuse the word well as well and tell people that my name is Well but pronounced more like will and also like to say that all will be well when all is not well.")
            .should
            .equal(6);
      })
   })


// -----------------------------------
// (3) function withPropValues(){...}
// -----------------------------------
   describe('withPropValues()', function(){

      let dataSet = [
         {name: 'Rufus', age: 30, gender: 'male', hasFriends: false},
         {name: 'Janet', age: 22, gender: 'female', hasFriends: true},
         {name: 'Clint', age: 30, gender: 'male', hasFriends: true},
         {name: 'Wendy', age: 24, gender: 'female', hasFriends: false},
         {name: 'Shana', age: 31, gender: 'female', hasFriends: true},
         {name: 'Willy', age: 31, gender: 'male', hasFriends: false},
         {name: 'Girro', age: 32, gender: 'male', hasFriends: true},
         {name: 'Nikki', age: 22, gender: 'female', hasFriends: true},
         {name: 'Anna', age: 22, gender: 'female', hasFriends: false},
         {name: 'Jessi', age: 30, gender: 'female', hasFriends: true},
         {name: 'Usain', age: 21, gender: 'male', hasFriends: true},
      ]

      xit('should meet a single criteria', function(){

         myModule
            .withPropValues(dataSet, {age: 30})
            .should
            .containDeep([
               {name: 'Rufus', age: 30, gender: 'male', hasFriends: false},
               {name: 'Clint', age: 30, gender: 'male', hasFriends: true},
               {name: 'Jessi', age: 30, gender: 'female', hasFriends: true},
         ]);

         myModule
            .withPropValues(dataSet, {age: 30})
            .should
            .not
            .containDeep([
               {name: 'Janet', age: 22, gender: 'female', hasFriends: true},
               {name: 'Shana', age: 31, gender: 'female', hasFriends: true},
               {name: 'Willy', age: 31, gender: 'male', hasFriends: false},
               {name: 'Usain', age: 21, gender: 'male', hasFriends: true}
            ]);       
      })

      xit('should meet multiple criteria', function(){

         myModule
            .withPropValues(dataSet, {gender: 'male' , hasFriends: true })
            .should
            .containDeep([
               {name: 'Clint', age: 30, gender: 'male', hasFriends: true},
               {name: 'Girro', age: 32, gender: 'male', hasFriends: true},
               {name: 'Usain', age: 21, gender: 'male', hasFriends: true},
         ]);

         myModule
            .withPropValues(dataSet, {gender: 'male' , hasFriends: true })
            .should
            .not
            .containDeep([
               {name: 'Wendy', age: 24, gender: 'female', hasFriends: false},
               {name: 'Shana', age: 31, gender: 'female', hasFriends: true},
               {name: 'Willy', age: 31, gender: 'male', hasFriends: false},
               {name: 'Nikki', age: 22, gender: 'female', hasFriends: true},
               {name: 'Anna', age: 22, gender: 'female', hasFriends: false},
               {name: 'Jessi', age: 32, gender: 'female', hasFriends: true},
            ]);
      })
   })
})




