let problemGroup = [
   // ex-1: sumPositives()
	{
     //(SETUP-1)
		name: 'sumPositives',   							//(SETUP-2a)                          //(SETUP-2b)
		globalFunc: typeof sumPositives !== 'undefined' && sumPositives || 'undefined-function',
		runTests: function(){
			
		   //(SETUP-4)
			let assertions = []

			//SETUP-5a
			let userOutput_1 = sumPositives([3, 4, 5, -3, -4])
			//SETUP-5b
			let assert_1 = new Assertion({
            assertion_description: '<code>sumPositives([3, 4, 5, -3, -4]) === 12</code>',
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 12,
            actual: userOutput_1
         })


			//PART 2
			let userOutput_2 = sumPositives([-11, 30,-20, 40, 100]);

			let assert_2 = new Assertion({
            assertion_description: '<code>sumPositives([-11, 30,-20, 40, 100]) === 170</code>',
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 170,
            actual: userOutput_2
         })

			//PART 2
			let userOutput_3 = sumPositives([4 ,-10,-30, -4, 201]);

			let assert_3 = new Assertion({
            assertion_description: '<code>sumPositives([4 ,-10,-30, -4, 201]) === 205</code>',
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 205,
            actual: userOutput_3
         })

			//SETUP-5c
			assert_1.testAssertion(userOutput_1, assert_1.expected)
			assert_2.testAssertion(userOutput_2, assert_2.expected)
			assert_3.testAssertion(userOutput_3, assert_3.expected)


			//SETUP-5d
			assertions.push(assert_1)
			assertions.push(assert_2)
			assertions.push(assert_3)

			return assertions
		},
		
	},
	
   // ex-2: hasDoubleLetters()
	{
		name: 'hasDoubleLetters',   							                              //(SETUP-2b)
		globalFunc: typeof hasDoubleLetters !== 'undefined' && hasDoubleLetters || 'undefined-function',
		runTests: function(){
			
		   //(SETUP-4)
			let assertions = []

			//SETUP-5a
			let userOutput_1 = hasDoubleLetters('stutter')
			//SETUP-5b
			let assert_1 = new Assertion({
            assertion_description: "<code>hasDoubleLetters('stutter') === true",
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: true,
            actual: userOutput_1
         })


			//PART 2
			let userOutput_2 = hasDoubleLetters('prospect');

			let assert_2 = new Assertion({
            assertion_description: "<code>hasDoubleLetters('prospect') === false</code>",
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: false,
            actual: userOutput_2
         })

			//PART 2
			let userOutput_3 = hasDoubleLetters('shoehorn')

			let assert_3 = new Assertion({
            assertion_description: "<code>hasDoubleLetters('shoehorn') === false</code>",
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: false,
            actual: userOutput_3
         })

			//PART 2
			let userOutput_4 = hasDoubleLetters('Aardvark')

			let assert_4 = new Assertion({
            assertion_description: "<code>hasDoubleLetters('Aardvark') === true</code>",
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: true,
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

	// ex-3: maxOfArray()
	{
		name: 'maxOfArray',   							                              //(SETUP-2b)
		globalFunc: typeof maxOfArray !== 'undefined' && maxOfArray || 'undefined-function',
		runTests: function(){
			
		   //(SETUP-4)
			let assertions = []

			//SETUP-5a
			let userOutput_1 = maxOfArray([2,7,3,4,21,0])
			//SETUP-5b
			let assert_1 = new Assertion({
            assertion_description: "<code>maxOfArray([2,7,3,4,21,0]) === 21</code>",
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 21,
            actual: userOutput_1
         })


			//PART 2
			let userOutput_2 = maxOfArray([100,9,8,7,6,10]);

			let assert_2 = new Assertion({
            assertion_description: "<code>maxOfArray([100,9,8,7,6,10]) === 100</code>",
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 100,
            actual: userOutput_2
         })

			//PART 2
			let userOutput_3 = maxOfArray([84,32,11,31,12,201])

			let assert_3 = new Assertion({
            assertion_description: "<code>maxOfArray([84,32,11,31,12,201]) === 201</code>",
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 201,
            actual: userOutput_3
         })

			//SETUP-5c
			assert_1.testAssertion(userOutput_1, assert_1.expected)
			assert_2.testAssertion(userOutput_2, assert_2.expected)
			assert_3.testAssertion(userOutput_3, assert_3.expected)


			//SETUP-5d
			assertions.push(assert_1)
			assertions.push(assert_2)
			assertions.push(assert_3)

			return assertions
		},
		
	},
	
	// ex-4: findLongestWord()
	{
		name: 'findLongestWord',   							                              //(SETUP-2b)
		globalFunc: typeof findLongestWord !== 'undefined' && findLongestWord || 'undefined-function',
		runTests: function(){
			
		   //(SETUP-4)
			let assertions = []

			//SETUP-5a
			let userOutput_1 = findLongestWord("i have baskets full of lemons")
			//SETUP-5b
			let assert_1 = new Assertion({
            assertion_description: `<code>findLongestWord('i have baskets full of lemons') === 'baskets'</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 'baskets',
            actual: userOutput_1
         })


			//PART 2
			let userOutput_2 = findLongestWord("Alexander shouldn't talk anymore");

			let assert_2 = new Assertion({
            assertion_description: `<code>findLongestWord("Alexander shouldn't talk anymore") === 'Alexander'</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 'Alexander',
            actual: userOutput_2
         })

			//PART 2
			let userOutput_3 = findLongestWord("don't mess with Texas")

			let assert_3 = new Assertion({
            assertion_description: `<code>findLongestWord("don't mess with Texas") === 'Texas'</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 'Texas',
            actual: userOutput_3
         })

			let userOutput_4 = findLongestWord('a time to act.')

			let assert_4 = new Assertion({
            assertion_description: `<code>findLongestWord('a time to act.') === 'time'</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 'time',
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
	
	// ex-5: fizzbuzz()
	{
		name: 'fizzbuzz',   							                              //(SETUP-2b)
		globalFunc: typeof fizzbuzz !== 'undefined' && fizzbuzz || 'undefined-function',
		runTests: function(){
			
		   //(SETUP-4)
			let assertions = []

			//SETUP-5a
			let userOutput_1 = fizzbuzz(1)
			//SETUP-5b
			let assert_1 = new Assertion({
            assertion_description: `<code>fizzbuzz(1) === "."`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: ".",
            actual: userOutput_1
         })


			//PART 2
			let userOutput_2 = fizzbuzz(2);

			let assert_2 = new Assertion({
            assertion_description: `<code>fizzbuzz(2) === ".."</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: '..',
            actual: userOutput_2
         })

			//PART 2
			let userOutput_3 = fizzbuzz(3)

			let assert_3 = new Assertion({
            assertion_description: `<code>fizzbuzz(3) === "..fizz"</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: '..fizz',
            actual: userOutput_3
         })


			let userOutput_4 = fizzbuzz(5)

			let assert_4 = new Assertion({
            assertion_description: `<code>fizzbuzz(5) === "..fizz.buzz"</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: "..fizz.buzz",
            actual: userOutput_4
         })


			let userOutput_5 = fizzbuzz(10)

			let assert_5 = new Assertion({
            assertion_description: `<code>fizzbuzz(10) === "..fizz.buzzfizz..fizzbuzz"</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: "..fizz.buzzfizz..fizzbuzz",
            actual: userOutput_5
         })


			let userOutput_6 = fizzbuzz(20)

			let assert_6 = new Assertion({
            assertion_description: `<code>fizzbuzz(20) === "..fizz.buzzfizz..fizzbuzz.fizz..FizZBuzZ..fizz.buzz"</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: "..fizz.buzzfizz..fizzbuzz.fizz..FizZBuzZ..fizz.buzz",
            actual: userOutput_6
         })
			
			//SETUP-5c
			assert_1.testAssertion(userOutput_1, assert_1.expected)
			assert_2.testAssertion(userOutput_2, assert_2.expected)
			assert_3.testAssertion(userOutput_3, assert_3.expected)
			assert_4.testAssertion(userOutput_4, assert_4.expected)
			assert_5.testAssertion(userOutput_5, assert_5.expected)
			assert_6.testAssertion(userOutput_6, assert_6.expected)


			//SETUP-5d
			assertions.push(assert_1)
			assertions.push(assert_2)
			assertions.push(assert_3)
			assertions.push(assert_4)
			assertions.push(assert_5)
			assertions.push(assert_6)


			return assertions
		},
		
	},

	// ex-6: hasComplements()
	{
		name: 'hasComplements',   							                              //(SETUP-2b)
		globalFunc: typeof hasComplements !== 'undefined' && hasComplements || 'undefined-function',
		runTests: function(){
			
		   //(SETUP-4)
			let assertions = []
			
			var oddsArray = [1, 3, 5, 7, 9, 11, 13]
			var anotherArray = [2, 5, 6, 8, 12]

			//SETUP-5a
			let userOutput_1 = hasComplements(6,  oddsArray)
			//SETUP-5b
			let assert_1 = new Assertion({
            assertion_description: `<code>hasComplements(6,  oddsArray) === true</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: true,
            actual: userOutput_1
         })


			//PART 2
			let userOutput_2 = hasComplements(7, oddsArray)

			let assert_2 = new Assertion({
            assertion_description: `<code>hasComplements(7, oddsArray) === false</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: false,
            actual: userOutput_2
         })

			//PART 2
			let userOutput_3 = hasComplements(14, oddsArray)

			let assert_3 = new Assertion({
            assertion_description: `<code>hasComplements(14, oddsArray) === true</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: true,
            actual: userOutput_3
         })


			let userOutput_4 = hasComplements(17, oddsArray)

			let assert_4 = new Assertion({
            assertion_description: `<code>hasComplements(17, oddsArray) === false</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: false,
            actual: userOutput_4
         })


			let userOutput_5 = hasComplements(7, anotherArray)

			let assert_5 = new Assertion({
            assertion_description: `<code>hasComplements(7, anotherArray) === true</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: true,
            actual: userOutput_5
         })


			let userOutput_6 = hasComplements(9,  anotherArray)

			let assert_6 = new Assertion({
            assertion_description: `<code>hasComplements(9,  anotherArray) === false</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: false,
            actual: userOutput_6
         })

			let userOutput_7 = hasComplements(14,  anotherArray)

			let assert_7 = new Assertion({
            assertion_description: `<code>hasComplements(14, anotherArray) === true</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: true,
            actual: userOutput_7
         })

			let userOutput_8 = hasComplements(15, anotherArray)

			let assert_8 = new Assertion({
            assertion_description: `<code>hasComplements(15, anotherArray) === false</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: false,
            actual: userOutput_8
         })
			
			//SETUP-5c
			assert_1.testAssertion(userOutput_1, assert_1.expected)
			assert_2.testAssertion(userOutput_2, assert_2.expected)
			assert_3.testAssertion(userOutput_3, assert_3.expected)
			assert_4.testAssertion(userOutput_4, assert_4.expected)
			assert_5.testAssertion(userOutput_5, assert_5.expected)
			assert_6.testAssertion(userOutput_6, assert_6.expected)
			assert_7.testAssertion(userOutput_7, assert_7.expected)
			assert_8.testAssertion(userOutput_8, assert_8.expected)


			//SETUP-5d
			assertions.push(assert_1)
			assertions.push(assert_2)
			assertions.push(assert_3)
			assertions.push(assert_4)
			assertions.push(assert_5)
			assertions.push(assert_6)
			assertions.push(assert_7)
			assertions.push(assert_8)


			return assertions
		}
	},
		// ex-7: makePairs()

	{
		name: 'makePairs',   							                              //(SETUP-2b)
		globalFunc: typeof makePairs !== 'undefined' && makePairs || 'undefined-function',
		runTests: function(){
			
		   //(SETUP-4)
			let assertions = []
			
			var pairsOutput = makePairs([10,20,30,40,50,60,70,80]) 
			var firstPair = pairsOutput[0];
			var thirdPair = pairsOutput[2];


			//SETUP-5a
			let userOutput_1 = pairsOutput.length 
			//SETUP-5b
			let assert_1 = new Assertion({
            assertion_description: `<code>pairsOutput.length === 4</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 4,
            actual: userOutput_1
         })


			//PART 2
			let userOutput_2 = firstPair.length

			let assert_2 = new Assertion({
            assertion_description: `<code>firstPair.length === 2</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 2,
            actual: userOutput_2
         })

			//PART 2
			let userOutput_3 = firstPair[0]

			let assert_3 = new Assertion({
            assertion_description: `<code>firstPair[0] === 10</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 10,
            actual: userOutput_3
         })


			let userOutput_4 = firstPair[1]

			let assert_4 = new Assertion({
            assertion_description: `<code>firstPair[1] === 20</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 20,
            actual: userOutput_4
         })


			let userOutput_5 = thirdPair[0]

			let assert_5 = new Assertion({
            assertion_description: `<code>thirdPair[0] === 50</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 50,
            actual: userOutput_5
         })


			let userOutput_6 = thirdPair[1]

			let assert_6 = new Assertion({
            assertion_description: `<code>thirdPair[1] === 60</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 60,
            actual: userOutput_6
         })

			
			//SETUP-5c
			assert_1.testAssertion(userOutput_1, assert_1.expected)
			assert_2.testAssertion(userOutput_2, assert_2.expected)
			assert_3.testAssertion(userOutput_3, assert_3.expected)
			assert_4.testAssertion(userOutput_4, assert_4.expected)
			assert_5.testAssertion(userOutput_5, assert_5.expected)
			assert_6.testAssertion(userOutput_6, assert_6.expected)


			//SETUP-5d
			assertions.push(assert_1)
			assertions.push(assert_2)
			assertions.push(assert_3)
			assertions.push(assert_4)
			assertions.push(assert_5)
			assertions.push(assert_6)



			return assertions
		},
	
	},

]
