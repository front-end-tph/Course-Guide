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
			assert_3.testAssertion(userOutput_4, assert_4.expected)


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
			let userOutput_1 = fizzbuzz(1) === "."
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
			assert_3.testAssertion(userOutput_4, assert_4.expected)
			assert_3.testAssertion(userOutput_5, assert_5.expected)
			assert_3.testAssertion(userOutput_6, assert_6.expected)


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
