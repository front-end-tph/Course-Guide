let problemGroup = [
   // ex-1: arrayToString()
	{
     //(SETUP-1)
		name: 'arrayToString',   							//(SETUP-2a)                          //(SETUP-2b)
		globalFunc: typeof arrayToString !== 'undefined' && arrayToString || 'undefined-function',
		runTests: function(){
			
		   //(SETUP-4)
			let assertions = []

			//SETUP-5a
			let userOutput_1 = arrayToString(["Hello", "how", "are", "you"])
			//SETUP-5b
			let assert_1 = new Assertion({
            assertion_description: '<code>output1 === "Hellohowareyou"</code>',
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: "Hellohowareyou",
            actual: userOutput_1
         })


			//PART 2
			let userOutput_2 = arrayToString(['cool', 'great', 'nice', 'awesome', 'sweet'])

			let assert_2 = new Assertion({
            assertion_description: "<code>output2 === 'coolgreatniceawesomesweet'</code>",
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: "coolgreatniceawesomesweet",
            actual: userOutput_2
         })

			//SETUP-5c
			assert_1.testAssertion(userOutput_1, assert_1.expected)
			
			assert_2.testAssertion(userOutput_2, assert_2.expected)


			//SETUP-5d
			assertions.push(assert_1)
			assertions.push(assert_2)
		
			return assertions
		},
		
	},

	// ex-2: simpOrSamp()
 	{
      //(SETUP-1)
 		name: 'simpOrSamp',   							//(SETUP-2a)                          //(SETUP-2b)
 		globalFunc: typeof simpOrSamp !== 'undefined' && simpOrSamp || 'undefined-function',
 		runTests: function(){
 			
 		   //(SETUP-4)
 			let assertions = []

 			//SETUP-5a
 			let userOutput_1 = simpOrSamp(simpList)
 			
			//SETUP-5b
 			let assert_1 = new Assertion({
             assertion_description: '<code>modifiedNamesList[1] === "OJ Sampson"</code>',
             assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
             expected: "OJ Sampson",
             actual: userOutput_1[1]
          })


 			//PART 2
 			let assert_2 = new Assertion({
             assertion_description: "<code>output2 === 'coolgreatniceawesomesweet'</code>",
             assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
             expected: "Marge Sampson",
             actual: userOutput_1[2]
          })

			let assert_3 = new Assertion({
             assertion_description: "<code>modifiedNamesList[2] === 'Maggie Simpson'</code>",
             assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
             expected: "Maggie Simpson",
             actual: userOutput_1[5]
          })
			
			 let assert_4 = new Assertion({
              assertion_description: "<code>modifiedNamesList[0] !== 'Homer Simpson'</code>",
              assertion_predicate:  function(arg1, arg2){ return arg1 !== arg2 },
              expected: "Homer Sampson",
              actual: userOutput_1[0]
           })

 			assert_1.testAssertion(assert_1.actual, assert_1.expected)
 			assert_2.testAssertion(assert_2.actual, assert_2.expected)
 			assert_3.testAssertion(assert_3.actual, assert_3.expected)
 			assert_4.testAssertion(assert_4.actual, "Homer Simpson")


 			//SETUP-5d
 			assertions.push(assert_1)
 			assertions.push(assert_2)
 		 	assertions.push(assert_3)
 			assertions.push(assert_4)

 			return assertions
 		},
 		
 	},

	// ex-3: shortiesOnly()
   {
	  //(SETUP-1)
	  name: 'shortiesOnly',   							//(SETUP-2a)                          //(SETUP-2b)
	  globalFunc: typeof shortiesOnly !== 'undefined' && shortiesOnly || 'undefined-function',
	  runTests: function(){
		  
		  //(SETUP-4)
		  let assertions = []
			
			var sampleInput = [
			    "Ed",
			    "Tom",
			    "Elfrid",
			    "Sam",
			    "Bartholomeu",
			    "Wayne",
			    "Theodore",
			    "Ingrid",
			    "Fred",
			    "Yvette"
			]
		  //SETUP-5a
		  let userOutput_1 = shortiesOnly(sampleInput)
		  
		  //SETUP-5b
		  let assert_1 = new Assertion({
				assertion_description: '<code>shortList.length === 4</code>',
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: 4,
				actual: userOutput_1.length
			})


		  //PART 2
		  let assert_2 = new Assertion({
				assertion_description: "<code>shortList.indexOf('Sam') >= 0</code>",
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: true,
				actual: userOutput_1.indexOf('Sam') >= 0
			})

		  let assert_3 = new Assertion({
				assertion_description: "<code> shortList.indexOf('Fred') >= 0 </code>",
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: true,
				actual: userOutput_1.indexOf('Fred') >= 0
			})
		  
			let assert_4 = new Assertion({
				 assertion_description: "<code>assert_4.testAssertion(assert_4.actual, assert_3.expected)</code>",
				 assertion_predicate:  function(arg1, arg2){ return arg1 !== arg2 },
				 expected: -1,
				 actual: shortList.indexOf('Wayne')
			 })

		  assert_1.testAssertion(assert_1.actual, assert_1.expected)
		  assert_2.testAssertion(assert_2.actual, assert_2.expected)
		  assert_3.testAssertion(assert_3.actual, assert_3.expected)
		  assert_4.testAssertion(assert_4.actual, assert_3.expected)


		  //SETUP-5d
		  assertions.push(assert_1)
		  assertions.push(assert_2)
		  assertions.push(assert_3)
		  assertions.push(assert_4)

		  return assertions
	  },
	  
  },
	
	// ex-4: wordMatchInArray()
	{
     //(SETUP-1)
		name: 'wordMatchInArray',   							//(SETUP-2a)                          //(SETUP-2b)
		globalFunc: typeof wordMatchInArray !== 'undefined' && wordMatchInArray || 'undefined-function',
		runTests: function(){
			
		   //(SETUP-4)
			let assertions = []

			//SETUP-5a
			var sampleWordsArray_1 = ["because", "girls", "just", "want", "to", "have", "fun"]
			var sampleWordsArray_2 = ["boys", "there", "is", "no", "way", "out", "of", "here"]

			let userOutput_1 = wordMatchInArray('girls', sampleWordsArray_1)
			//SETUP-5b
			let assert_1 = new Assertion({
            assertion_description: "<code>wordMatchInArray('girls', sampleWordsArray_1) === true</code>",
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: true,
            actual: userOutput_1
         })


			//PART 2
			let userOutput_2 = wordMatchInArray('fun', sampleWordsArray_1)
			let assert_2 = new Assertion({
            assertion_description: "<code>wordMatchInArray('fun', sampleWordsArray_1) === true</code>",
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: true,
            actual: userOutput_2
         })

			let userOutput_3 = wordMatchInArray('boys', sampleWordsArray_1)
			let assert_3 = new Assertion({
            assertion_description: "<code>wordMatchInArray('boys', sampleWordsArray_1) === false</code>",
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: false,
            actual: userOutput_3
         })

			let userOutput_4 = wordMatchInArray('boys', sampleWordsArray_2)
			let assert_4 = new Assertion({
				assertion_description: "<code>wordMatchInArray('boys', sampleWordsArray_2) === false</code>",
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: true,
				actual: userOutput_4
			})

			let userOutput_5 = wordMatchInArray('girls', sampleWordsArray_2)
			let assert_5 = new Assertion({
				assertion_description: "<code>wordMatchInArray('boys', sampleWordsArray_2) === false</code>",
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: false,
				actual: userOutput_5
			})


			//SETUP-5c
			assert_1.testAssertion(userOutput_1, assert_1.expected)
			assert_2.testAssertion(userOutput_2, assert_2.expected)
			assert_3.testAssertion(userOutput_3, assert_3.expected)
			assert_4.testAssertion(userOutput_4, assert_4.expected)
			assert_5.testAssertion(userOutput_5, assert_5.expected)


			//SETUP-5d
			assertions.push(assert_1)
			assertions.push(assert_2)
			assertions.push(assert_3)
			assertions.push(assert_4)
			assertions.push(assert_5)

			return assertions
		},
		
	},
	
	// ex-05: countWordInArray
	{
     //(SETUP-1)
		name: 'countWordInArray',   							//(SETUP-2a)                          //(SETUP-2b)
		globalFunc: typeof countWordInArray !== 'undefined' && countWordInArray || 'undefined-function',
		runTests: function(){
			
		   //(SETUP-4)
			let assertions = []

			//SETUP-5a
			var sentenceArray_1 = ['i', 'saw', 'my', 'brother', 'who', 'supposedly', 'saw', 'my', 'sister', 'take', 'a', 'saw']
			var sentenceArray_2 = ["sister", "nancy", "take", 'the', 'first', 'right', 'and', 'take', 'the', 'third', 'left', 'on', 'sister', 'street']

			let userOutput_1 = countWordInArray('saw', sentenceArray_1)
			//SETUP-5b
			let assert_1 = new Assertion({
            assertion_description: "<code>countWordInArray('saw', sentenceArray1) === 3</code>",
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 3,
            actual: userOutput_1
         })

			let userOutput_2 = countWordInArray('take', sentenceArray_1)
			let assert_2 = new Assertion({
            assertion_description: "<code>countWordInArray('take', sentenceArray_1) === 0</code>",
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 1,
            actual: userOutput_2
         })

			let userOutput_3 = countWordInArray('take', sentenceArray_1)
			let assert_3 = new Assertion({
            assertion_description: "<code>countWordInArray('brother', sentenceArray_1) === 1</code>",
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 1,
            actual: userOutput_3
         })

			let userOutput_4 = countWordInArray('take', sentenceArray_1)
			let assert_4 = new Assertion({
            assertion_description: "<code>countWordInArray('sister', sentenceArray_1) === 1</code>",
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 1,
            actual: userOutput_4
         })
			

			//part 2
			let userOutput_5 = countWordInArray('take', sentenceArray_2)
			let assert_5 = new Assertion({
            assertion_description: "<code>countWordInArray('take', sentenceArray_2) === 1</code>",
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 2,
            actual: userOutput_5
         })

			let userOutput_6 = countWordInArray('brother', sentenceArray_2)
			let assert_6 = new Assertion({
            assertion_description: "<code>countWordInArray('brother', sentenceArray_2) === 1</code>",
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 0,
            actual: userOutput_6
         })

			let userOutput_7 = countWordInArray('sister', sentenceArray_2)
			let assert_7 = new Assertion({
            assertion_description: "<code>countWordInArray('sister', sentenceArray_2) === 1</code>",
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 2,
            actual: userOutput_7
         })
	

		

			//SETUP-5c
			assert_1.testAssertion(userOutput_1, assert_1.expected)
			assert_2.testAssertion(userOutput_2, assert_2.expected)
			assert_3.testAssertion(userOutput_3, assert_3.expected)
			assert_4.testAssertion(userOutput_4, assert_4.expected)
			assert_5.testAssertion(userOutput_5, assert_5.expected)
			assert_6.testAssertion(userOutput_6, assert_6.expected)
			assert_7.testAssertion(userOutput_7, assert_7.expected)

			//SETUP-5d
			assertions.push(assert_1)
			assertions.push(assert_2)
			assertions.push(assert_3)
			assertions.push(assert_4)
			assertions.push(assert_5)
			assertions.push(assert_6)
			assertions.push(assert_7	)


			return assertions
		},
		
	},
	// ex-06: reverseString()
	{
     //(SETUP-1)
		name: 'reverseString',   							//(SETUP-2a)                          //(SETUP-2b)
		globalFunc: typeof reverseString !== 'undefined' && reverseString || 'undefined-function',
		runTests: function(){
			
		   //(SETUP-4)
			let assertions = []

			//SETUP-5a

			//SETUP-5b
			let userOutput_1 = reverseString('books')
			let assert_1 = new Assertion({
            assertion_description: "<code>reverseString('books') === 'skoob'</code>",
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 'skoob',
            actual: userOutput_1
         })
			
			let userOutput_2 = reverseString('coolness')
			let assert_2 = new Assertion({
            assertion_description: "<code>reverseString('coolness') === 'ssenlooc'</code>",
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 'ssenlooc',
            actual: userOutput_2
         })
		
			let userOutput_3 = reverseString('bedtime')
			let assert_3 = new Assertion({
            assertion_description: "<code>reverseString('bedtime') === 'emitdeb'</code>",
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 'emitdeb',
            actual: reverseString('bedtime')
         })
			
			let userOutput_4 = reverseString('yah sure')
			let assert_4 = new Assertion({
            assertion_description: "<code>creverseString('yah sure') === 'erus hay'</code>",
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 'erus hay',
            actual: userOutput_4
         })
			

		

			//SETUP-5c
			assert_1.testAssertion(userOutput_1, assert_1.expected)
			assert_2.testAssertion(userOutput_2, assert_2.expected)
			assert_3.testAssertion(userOutput_3, assert_3.expected)
			assert_4.testAssertion(userOutput_4, assert_4.expected)
		
			//SETUP-5d
			assertions.push(assert_1)
			assertions.push(assert_2)
			assertions.push(assert_3)
			assertions.push(assert_4)
		


			return assertions
		},
		
	},
	
	// ex-07: isPalindrome
	{
     //(SETUP-1)
		name: 'isPalindrome',   							//(SETUP-2a)                          //(SETUP-2b)
		globalFunc: typeof isPalindrome !== 'undefined' && isPalindrome || 'undefined-function',
		runTests: function(){
			
		   //(SETUP-4)
			let assertions = []

			//SETUP-5a

			let userOutput_1 = isPalindrome('wow')
			//SETUP-5b
			let assert_1 = new Assertion({
            assertion_description: "<code>isPalindrome('wow') === true)</code>",
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: true,
            actual: userOutput_1
         })

			let userOutput_2 = isPalindrome('milk')
			let assert_2 = new Assertion({
            assertion_description: "<code>isPalindrome('milk') === false</code>",
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: false,
            actual: userOutput_2
         })

			let userOutput_3 = isPalindrome('howdy');
			let assert_3 = new Assertion({
            assertion_description: "<code>isPalindrome('howdy') === false</code>",
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: false,
            actual: userOutput_3
         })

			let userOutput_4 = isPalindrome('kayak') === true
			let assert_4 = new Assertion({
            assertion_description: "<code>isPalindrome('kayak')</code>",
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: true,
            actual: userOutput_4
         })
			

			//part 2
			let userOutput_5 = isPalindrome('tacocat') === true
			let assert_5 = new Assertion({
            assertion_description: "<code>isPalindrome('tacocat') === true</code>",
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: true,
            actual: userOutput_5
         })

			let userOutput_6 = isPalindrome('1201411')
			let assert_6 = new Assertion({
            assertion_description: "<code>isPalindrome('1201411') === false</code>",
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: false,
            actual: userOutput_6
         })

			let userOutput_7 = isPalindrome('13100131')
			let assert_7 = new Assertion({
            assertion_description: "<code>isPalindrome('13100131') === true</code>",
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: true,
            actual: userOutput_7
         })
	

		

			//SETUP-5c
			assert_1.testAssertion(userOutput_1, assert_1.expected)
			assert_2.testAssertion(userOutput_2, assert_2.expected)
			assert_3.testAssertion(userOutput_3, assert_3.expected)
			assert_4.testAssertion(userOutput_4, assert_4.expected)
			assert_5.testAssertion(userOutput_5, assert_5.expected)
			assert_6.testAssertion(userOutput_6, assert_6.expected)
			assert_7.testAssertion(userOutput_7, assert_7.expected)

			//SETUP-5d
			assertions.push(assert_1)
			assertions.push(assert_2)
			assertions.push(assert_3)
			assertions.push(assert_4)
			assertions.push(assert_5)
			assertions.push(assert_6)
			assertions.push(assert_7)


			return assertions
		},
		
	},
	

]
