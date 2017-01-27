let problemGroup = [
   // ex-01: getLast()
	{
     //(SETUP-1)
		name: 'getLast',   							
		globalFunc: typeof getLast !== 'undefined' && getLast || 'undefined-function',
		runTests: function(){
			
		   //(SETUP-4)
			let assertions = []
			
			//SETUP-5a
			let userOutput_1 = getLast([1,8,4,3])
			let assert_1 = new Assertion({
            assertion_description: `<code>getLast([1,8,4,3]) === 3 </code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 3,
            actual: userOutput_1
         })
		

			//PART 2
 			let userOutput_2 = getLast([1,8,4,3,5])
			let assert_2 = new Assertion({
            assertion_description: `<code>getLast([1,8,4,3,5])=== 5</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 5,
            actual: userOutput_2
         })

			let userOutput_3 = getLast(['a','b','c','d','e','f'])
			let assert_3 = new Assertion({
            assertion_description: `<code>getLast(['a','b','c','d','e','f']) === 'f'</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 'f',
            actual: userOutput_3
         })
			
			let userOutput_4 = getLast([true, false, false, true, false])
			let assert_4 = new Assertion({
            assertion_description: `<code>getLast([true, false, false, true, false]) === false</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: false,
            actual: userOutput_4
         })

			//SETUP-5c
			assert_1.testAssertion(assert_1.actual, assert_1.expected)
			assert_2.testAssertion(assert_2.actual, assert_2.expected)
			assert_3.testAssertion(assert_3.actual, assert_3.expected)
			assert_4.testAssertion(assert_4.actual, assert_4.expected)


			//SETUP-5d
			assertions.push(assert_1)
			assertions.push(assert_2)
			assertions.push(assert_3)
			assertions.push(assert_4)

		
			return assertions
		},
		
	},
	
	// ex-02: isEven()
	{
     //(SETUP-1)
		name: 'isEven',   							
		globalFunc: typeof isEven !== 'undefined' && isEven || 'undefined-function',
		runTests: function(){
			
		   //(SETUP-4)
			let assertions = []
			
			
			//SETUP-5a
			let userOutput_1 = isEven(1)
			let assert_1 = new Assertion({
            assertion_description: `<code>isEven(1) === false</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: false,
            actual: userOutput_1
         })
		

			//PART 2
 			let userOutput_2 = isEven(4)
			let assert_2 = new Assertion({
            assertion_description: `<code>isEven(4) === true</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: true,
            actual: userOutput_2
         })
			
			
			let userOutput_3 = isEven(10)
			let assert_3 = new Assertion({
            assertion_description: `<code>isEven(10) === true</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: true,
            actual: userOutput_3
         })
			
			let userOutput_4 = isEven(17)
			let assert_4 = new Assertion({
            assertion_description: `<code>isEven(17) === false </code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: false,
            actual: userOutput_4
         })

			//SETUP-5c
			assert_1.testAssertion(assert_1.actual, assert_1.expected)
			assert_2.testAssertion(assert_2.actual, assert_2.expected)
			assert_3.testAssertion(assert_3.actual, assert_3.expected)
			assert_4.testAssertion(assert_4.actual, assert_4.expected)


			//SETUP-5d
			assertions.push(assert_1)
			assertions.push(assert_2)
			assertions.push(assert_3)
			assertions.push(assert_4)

		
			return assertions
		},
		
	},

	// ex-03: getCapitalLetters()
	{
     //(SETUP-1)
		name: 'getCapitalLetters',   							
		globalFunc: typeof getCapitalLetters !== 'undefined' && getCapitalLetters || 'undefined-function',
		runTests: function(){
			
		   //(SETUP-4)
			let assertions = []

			let userOutput_1 = getCapitalLetters('I called Xiu Chang and he sent the original Super Mario Bros through FedEx')
			let assert_1 = new Assertion({
            assertion_description: `<code>output_1.length === 8</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 8,
            actual: userOutput_1.length
         })
		
			let assert_2 = new Assertion({
            assertion_description: `<code>output_1[3] === 'S'</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 'S',
            actual: userOutput_1[3]
         })
			
			
			let assert_3 = new Assertion({
            assertion_description: `<code>output_1[4] === 'M'</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 'M',
            actual: userOutput_1[4]
         })
			let userOutput_2 = getCapitalLetters('TLDR My mother gave Nancy nothing for Xmas')

			let assert_4 = new Assertion({
            assertion_description: `<code>output_2.length === 7</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 7,
            actual: userOutput_2.length
         })

			let assert_5 = new Assertion({
            assertion_description: `<code> output_2[3] === 'R' </code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 'R',
            actual: userOutput_2[3]
         })

			let assert_6 = new Assertion({
            assertion_description: `<code>output_2[6] === 'X'</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 'X',
            actual: userOutput_2[6]
         })

			//SETUP-5c
			assert_1.testAssertion(assert_1.actual, assert_1.expected)
			assert_2.testAssertion(assert_2.actual, assert_2.expected)
			assert_3.testAssertion(assert_3.actual, assert_3.expected)
			assert_4.testAssertion(assert_4.actual, assert_4.expected)
			assert_5.testAssertion(assert_5.actual, assert_5.expected)
			assert_6.testAssertion(assert_6.actual, assert_6.expected)


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

	// ex-04: makeAcronym()
	{
     //(SETUP-1)
		name: 'makeAcronym',   							
		globalFunc: typeof makeAcronym !== 'undefined' && makeAcronym || 'undefined-function',
		runTests: function(){
			
		   //(SETUP-4)
			let assertions = []

			let userOutput_1 = makeAcronym('Portable Document Format')
			let assert_1 = new Assertion({
            assertion_description: `<code>makeAcronym('Portable Document Format') === 'PDF'</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 'PDF',
            actual: userOutput_1
         })
		
			let userOutput_2 = makeAcronym('be right back')
			let assert_2 = new Assertion({
            assertion_description: `<code>makeAcronym('be right back') === 'BRB' </code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 'BRB',
            actual: userOutput_2
         })
			
			let userOutput_3 = makeAcronym('National Broadcasting Company')
			let assert_3 = new Assertion({
            assertion_description: `<code>makeAcronym('National Broadcasting Company') === 'NBC'</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 'NBC',
            actual: userOutput_3
         })

			let userOutput_4 = makeAcronym('Department of Defense') 
			let assert_4 = new Assertion({
            assertion_description: `<code>makeAcronym('Department of Defense') === 'DOD'</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 'DOD',
            actual: userOutput_4
         })

			
			//SETUP-5c
			assert_1.testAssertion(assert_1.actual, assert_1.expected)
			assert_2.testAssertion(assert_2.actual, assert_2.expected)
			assert_3.testAssertion(assert_3.actual, assert_3.expected)
			assert_4.testAssertion(assert_4.actual, assert_4.expected)
		

			//SETUP-5d
			assertions.push(assert_1)
			assertions.push(assert_2)
			assertions.push(assert_3)
			assertions.push(assert_4)
		
			return assertions
		},
		
	},

	// ex-05: reverseObject()
	{
     //(SETUP-1)
		name: 'reverseObject',   							
		globalFunc: typeof reverseObject !== 'undefined' && reverseObject || 'undefined-function',
		runTests: function(){
			
		   //(SETUP-4)
			let assertions = []
			
			var object1 = {
			    occupants: 4,
			    apartment_no: "2b",
			    structuralIntegrity: "failing",
				 squareFeet: 700
			}

			var object2 = {
				name: "Abby",
				gender: "female",
				description: "dog",
			   paws: 4
			}

			let userOutput_1 = reverseObject(object1)
			let assert_1 = new Assertion({
            assertion_description: `<code>reversedObj_1['2b'] === 'apartment_no'</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 'apartment_no',
            actual: userOutput_1['2b']
         })
		
			let assert_2 = new Assertion({
            assertion_description: `<code>reversedObj_1.failing === 'structuralIntegrity' </code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 'structuralIntegrity',
            actual: userOutput_1.failing
         })
			
			let userOutput_2 = reverseObject(object2)
			let assert_3 = new Assertion({
            assertion_description: `<code>reversedObj_2.dog === 'description'</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 'description',
            actual: userOutput_2.dog
         })

			let assert_4 = new Assertion({
            assertion_description: `<code>reversedObj_2.female === 'gender'</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 'gender',
            actual: userOutput_2.female
         })

			
			//SETUP-5c
			assert_1.testAssertion(assert_1.actual, assert_1.expected)
			assert_2.testAssertion(assert_2.actual, assert_2.expected)
			assert_3.testAssertion(assert_3.actual, assert_3.expected)
			assert_4.testAssertion(assert_4.actual, assert_4.expected)
		

			//SETUP-5d
			assertions.push(assert_1)
			assertions.push(assert_2)
			assertions.push(assert_3)
			assertions.push(assert_4)
		
			return assertions
		},
		
	},
	
	// ex-06: reverseEverything()
	{
     //(SETUP-1)
		name: 'reverseEverything',   							
		globalFunc: typeof reverseEverything !== 'undefined' && reverseEverything || 'undefined-function',
		runTests: function(){
			
		   //(SETUP-4)
			let assertions = []
			
			var usersList = [
			   { willis: 'president@gmail.com',hobby: 'basketball' , favoriteFood: "pate" },
			   { benzo: 'bonjourben@yahoo.com', hobby:'dealmaking' , favoriteFood: "steak" },
			   { yammer: 'yeb@aol.com', hobby: 'portraiture',  favoriteFood: "croissant" },
			   { jimbo: 'coolguy@aol.com', hobby: 'dancing',  favoriteFood: "hotpockets" }
			]

			let userOutput_1 = reverseEverything(usersList);
			let assert_1 = new Assertion({
            assertion_description: `<code>flippedEverything[0]['coolguy@aol.com'] === 'jimbo'</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 'jimbo',
            actual: flippedEverything[0]['coolguy@aol.com']
         })
		
			let assert_2 = new Assertion({
            assertion_description: `<code>flippedEverything[1].croissant === 'favoriteFood'</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 'favoriteFood',
            actual: flippedEverything[1].croissant
         })
			
			let assert_3 = new Assertion({
            assertion_description: `<code>flippedEverything[1]['yeb@aol.com'] === 'yammer'</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 'yammer',
            actual: flippedEverything[1]['yeb@aol.com']
         })

			let assert_4 = new Assertion({
            assertion_description: `<code>flippedEverything[2].dealmaking === 'hobby'</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 'hobby',
            actual: flippedEverything[2].dealmaking
         })

			
			//SETUP-5c
			assert_1.testAssertion(assert_1.actual, assert_1.expected)
			assert_2.testAssertion(assert_2.actual, assert_2.expected)
			assert_3.testAssertion(assert_3.actual, assert_3.expected)
			assert_4.testAssertion(assert_4.actual, assert_4.expected)
		

			//SETUP-5d
			assertions.push(assert_1)
			assertions.push(assert_2)
			assertions.push(assert_3)
			assertions.push(assert_4)
		
			return assertions
		},	
	},

	// ex-07: showStats()
	{
	  //(SETUP-1)
		name: 'showStats',   							
		globalFunc: typeof showStats !== 'undefined' && showStats || 'undefined-function',
		runTests: function(){
			
			//(SETUP-4)
			let assertions = []
	
			let parkingTicketsCount = [33, 44, 22, 21, 92, 63, 12, 42, 56, 11, 99, 
			482, 42, 56, 42, 19, 20, 88, 38, 18, 12, 64, 42, 21, 
			33, 31, 10, 84, 53, 13, 42, 4493, 31, 24, 55, 32, 42, 11, 56]

			let userOutput_1  = showStats(42, parkingTicketsCount)
		
			let assert_1 = new Assertion({
				assertion_description: `<code>stats_1.setSize === 39</code>`,
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: 39,
				actual: userOutput_1.setSize
			})
		
			let assert_2 = new Assertion({
				assertion_description: `<code>stats_1.count_inputEqualTo === 6 </code>`,
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: 6,
				actual: userOutput_1.count_inputEqualTo
			})
			
			let assert_3 = new Assertion({
				assertion_description: `<code>userOutput_1.count_inputGreaterThan === 19 </code>`,
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: 19,
				actual: userOutput_1.count_inputGreaterThan
			})
			
			//==================

			var userOutput_2 =  showStats(56, parkingTicketsCount)
			let assert_4 = new Assertion({
				assertion_description: `<code>stats_2.count_inputGreaterThan === 28</code>`,
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: 28,
				actual: userOutput_2.count_inputGreaterThan
			})
			
			let assert_5 = new Assertion({
				assertion_description: `<code>stats_2.count_inputLessThan === 8</code>`,
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: 8,
				actual: userOutput_2.count_inputLessThan
			})


			
			//SETUP-5c
			assert_1.testAssertion(assert_1.actual, assert_1.expected)
			assert_2.testAssertion(assert_2.actual, assert_2.expected)
			assert_3.testAssertion(assert_3.actual, assert_3.expected)
			assert_4.testAssertion(assert_4.actual, assert_4.expected)
			assert_5.testAssertion(assert_5.actual, assert_5.expected)


			//SETUP-5d
			assertions.push(assert_1)
			assertions.push(assert_2)
			assertions.push(assert_3)
			assertions.push(assert_4)
			assertions.push(assert_5)

			return assertions
		},	
	},
	
	//ex-08: getWordCount()
	{
	  //(SETUP-1)
		name: 'getWordCount',   							
		globalFunc: typeof getWordCount !== 'undefined' && getWordCount || 'undefined-function',
		runTests: function(){
			
			//(SETUP-4)
			let assertions = []

			var sampleText = "I'm tired of trying to find happiness through lies and self-medicating. If you need me, I'll be at the bar. The only thing I found in the fridge was a dead dove in a bag. But anyhoo, can you believe that the only reason the club is going under is because it's in a terrifying neighborhood? Oh, I'm sorry, I forgot… your wife is dead! They once called me the worst audience participant Cirque du Soleil ever had. \
			I need a fake passport, preferably to France. I like the way they think. Oh, COME ON! YOU'RE the Chiclet! Not me. Caw ca caw, caw ca caw, caw ca caw! It's ok. You be with Yam. So did you see the new Poof? His name's Gary and we don't need anymore lawsuits. If this were a Lifetime Moment of Truth movie, this would be our act break. But it wasn't. Michael, look, this has got to stop. I mean, flattered? Yes. Interested? Not tonight. \
			I'm foolish and I'm funny and I'm needy. Am I needy? Are you sure I'm not needy? 'Cause I feel needy sometimes. Obviously this blue part here is the land. \
			Let's see some bananas and nuts! This was a big get for God. They don't allow you to have bees in here. I want to cry so bad, but I don't think I can spare the moisture. No, Pop-pop does not get a treat, I just brought you a [bleep]ing pizza. It walked on my pillow! I'll buy you a hundred George Michaels that you can teach to drive! A group of British builders operating outside the O.C."

			var userOutput_1 = getWordCount(sampleText)
			
			console.assert( )
			console.assert( )
			console.assert( wordFrequencyObject.you === 9 )

			let assert_1 = new Assertion({
				assertion_description: `<code> wordFrequencyObject.be === 3 </code>`,
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: 3,
				actual: userOutput_1.be
			})

		
		
			let assert_2 = new Assertion({
				assertion_description: `<code>wordFrequencyObject.need === 3 </code>`,
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: 3,
				actual: userOutput_1.need
			})
			
			let assert_3 = new Assertion({
				assertion_description: `<code>wordFrequencyObject.you === 3 </code>`,
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: 9,
				actual: wordFrequencyObject.you
			})
			
		


			
			//SETUP-5c
			assert_1.testAssertion(assert_1.actual, assert_1.expected)
			assert_2.testAssertion(assert_2.actual, assert_2.expected)
			assert_3.testAssertion(assert_3.actual, assert_3.expected)
			
			//SETUP-5d
			assertions.push(assert_1)
			assertions.push(assert_2)
			assertions.push(assert_3)
			


			return assertions
		},	
	},
	
	// ex-09: getKeys()
	{
	  //(SETUP-1)
		name: 'getKeys',   							
		globalFunc: typeof getKeys !== 'undefined' && getKeys || 'undefined-function',
		runTests: function(){
			
			//(SETUP-4)
			let assertions = []


			let userOutput_1 = getKeys({firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"});
			let assert_1 = new Assertion({
				assertion_description: `<code>output_1.length === 4 </code>`,
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: 4,
				actual: userOutput_1.length
			})

		
		
			let assert_2 = new Assertion({
				assertion_description: `<code>output_1.indexOf('age') >= 0 </code>`,
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: true,
				actual: userOutput_1.indexOf('age') >= 0
			})
			
			let assert_3 = new Assertion({
				assertion_description: `<code>output_1.indexOf('Doe') === -1</code>`,
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: true,
				actual: userOutput_1.indexOf('Doe') === -1
			})
			
			//--------------

			let userOutput_2 = getKeys({
				_id:"588b560", 
				name: 'Sally Pittman', 
				gender:"male", 
				favoriteFruit: "apple", 
				company: "Ersum" 
			})
			
			let assert_4 = new Assertion({
				assertion_description: `<code>output_2.indexOf('age') === -1 </code>`,
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: true,
				actual: userOutput_2.indexOf('age') === -1
			})
			
			let assert_5 = new Assertion({
				assertion_description: `<code>output_2.indexOf('favoriteFruit') >= 0</code>`,
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: true,
				actual: userOutput_2.indexOf('favoriteFruit') >= 0
			})

			let assert_6 = new Assertion({
				assertion_description: `<code>output_2.indexOf('company') >= 0 </code>`,
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: true,
				actual: userOutput_2.indexOf('company') >= 0
			})


			
			//SETUP-5c
			assert_1.testAssertion(assert_1.actual, assert_1.expected)
			assert_2.testAssertion(assert_2.actual, assert_2.expected)
			assert_3.testAssertion(assert_3.actual, assert_3.expected)
			assert_4.testAssertion(assert_4.actual, assert_4.expected)
			assert_5.testAssertion(assert_5.actual, assert_5.expected)
			assert_6.testAssertion(assert_6.actual, assert_6.expected)


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

	// ex-10: pluck()
	{
	  //(SETUP-1)
		name: 'pluck',   							
		globalFunc: typeof pluck !== 'undefined' && pluck || 'undefined-function',
		runTests: function(){
			
			//(SETUP-4)
			let assertions = []

			var stooges = [
			   {name: 'moe', age: 40, hairStyle: "bowl cut" },
			   {name: 'larry', age: 50, hairStyle: "balding"},
			   {name: 'curly', age: 53, hairStyle: "buzzed"},
			   {name: 'shemp', age: 62, hairStyle: "parted"},
			   {name: 'joe', age: 47, hairStyle: "bald"}
			]


			let userOutput_1 = pluck(stooges, 'name')

			let assert_1 = new Assertion({
				assertion_description: `<code>outputArray_1[0] === 'moe' </code>`,
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: 'moe',
				actual: userOutput_1[0]
			})

		
		
			let assert_2 = new Assertion({
				assertion_description: `<code>outputArray_1[3] === 'shemp'</code>`,
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: 'shemp',
				actual:userOutput_1[3]
			})

			let userOutput_2 = pluck(stooges, 'hairStyle')
			
			let assert_3 = new Assertion({
				assertion_description: `<code>outputArray_2[1] === 'balding'</code>`,
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: 'balding',
				actual: userOutput_2[1]
			})
			
			
			let assert_4 = new Assertion({
				assertion_description: `<code>outputArray_2[2] === 'buzzed'  </code>`,
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: 'buzzed',
				actual: userOutput_2[2]
			})


	   	let userOutput_3 = pluck(stooges, 'age')
						console.assert( )
						console.assert(  )

			let assert_5 = new Assertion({
				assertion_description: `<code> outputArray_3[2] === 53</code>`,
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: 53,
				actual: userOutput_3[2]
			})

			let assert_6 = new Assertion({
				assertion_description: `<code>output_2.indexOf('company') >= 0 </code>`,
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: 47,
				actual: outputArray_3[4] 
			})


			
			//SETUP-5c
			assert_1.testAssertion(assert_1.actual, assert_1.expected)
			assert_2.testAssertion(assert_2.actual, assert_2.expected)
			assert_3.testAssertion(assert_3.actual, assert_3.expected)
			assert_4.testAssertion(assert_4.actual, assert_4.expected)
			assert_5.testAssertion(assert_5.actual, assert_5.expected)
			assert_6.testAssertion(assert_6.actual, assert_6.expected)


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

	// ex-11: merge()
	{
	  //(SETUP-1)
		name: 'merge',   							
		globalFunc: typeof merge !== 'undefined' && merge || 'undefined-function',
		runTests: function(){
			
			//(SETUP-4)
			let assertions = []

			let obj1 = {name: "Shaman Tilroy", age: 33, id: 6288}
			let obj2 = {id: 6288, balance: 38832, accountActive: true }


			
			let userOutput_1 = merge(obj1, obj2)

			let assert_1 = new Assertion({
				assertion_description: `<code>mergedObj1.name === "Shaman Tilroy" </code>`,
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: 'Shaman Tilroy',
				actual: userOutput_1.name
			})
		
			let assert_2 = new Assertion({
				assertion_description: `<code>mergedObj1.id === 6288</code>`,
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: 6288,
				actual:userOutput_1.id
			})

			
			let assert_3 = new Assertion({
				assertion_description: `<code>mergedObj1.balance === 38832</code>`,
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: 38832,
				actual: userOutput_1.balance
			})
			
			
			let assert_4 = new Assertion({
				assertion_description: `<code>mergedObj1.accountActive === true</code>`,
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: true,
				actual: userOutput_1.accountActive
			})
			

			//-======---=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=
			let obj3 = {title: "How to Wear a Bowtie", artist: "Showtime", released: 1984 }
			let obj4 = {artist: "The Riverboat", released: 1980, album: "Wishy Washy", quantity: 10 }

			let userOutput_2 = merge(obj3, obj4)

			let assert_5 = new Assertion({
				assertion_description: `<code>mergedObj_2.artist === "The Riverboat"</code>`,
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: "The Riverboat",
				actual: userOutput_2.artist
			})

			let assert_6 = new Assertion({
				assertion_description: `<code>mergedObj_2.released === 1980</code>`,
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: 1980,
				actual: userOutput_2.released 
			})
			
			let assert_7 = new Assertion({
				assertion_description: `<code>mergedObj_2.title === "How to Wear a Bowtie"</code>`,
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: "How to Wear a Bowtie",
				actual: userOutput_2.title 
			})

			let assert_8 = new Assertion({
				assertion_description: `<code>mergedObj_2.quantity === 10</code>`,
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: 10,
				actual: userOutput_2.quantity 
			})



			
			//SETUP-5c
			assert_1.testAssertion(assert_1.actual, assert_1.expected)
			assert_2.testAssertion(assert_2.actual, assert_2.expected)
			assert_3.testAssertion(assert_3.actual, assert_3.expected)
			assert_4.testAssertion(assert_4.actual, assert_4.expected)
			assert_5.testAssertion(assert_5.actual, assert_5.expected)
			assert_6.testAssertion(assert_6.actual, assert_6.expected)
			assert_7.testAssertion(assert_7.actual, assert_7.expected)
			assert_8.testAssertion(assert_8.actual, assert_8.expected)


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
		},	
	},
	
	// ex-12: where()
	{
	  //(SETUP-1)
		name: 'where',   							
		globalFunc: typeof where !== 'undefined' && where || 'undefined-function',
		runTests: function(){
			
			//(SETUP-4)
			let assertions = []

			let plays = [
		       { title: "Cymbeline", author: "Shakespeare", year: 1623 },
		       { title: "The Tempest", author: "Shakespeare", year: 1623 },
		       { title: "Hamlet", author: "Shakespeare", year: 1603 },
		       { title: "1984", author: "George Orwell", year: 1949 },
		       { title: "A Midsummer Night's Dream", author: "Shakespeare", year: 1600 },
		       { title: "Macbeth", author: "Shakespeare", year: 1620 },
		       { title: "Death of a Salesman", author: "Arthur Miller", year: 1949 },
		       { title: "Two Blind Mice", author: "Samuel and Bella Spewack", year: 1949 }
		   ]

		   let userOutput_1 = where(plays, {author: "Shakespeare"})

			let assert_1 = new Assertion({
				assertion_description: `<code>sh8sprQuery instanceof Array</code>`,
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: true,
				actual: userOutput_1 instanceof Array
			})
		
			let assert_2 = new Assertion({
				assertion_description: `<code>sh8sprQuery.length === 5</code>`,
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: 5,
				actual: userOutput_1.length
			})

			let assert_3 = new Assertion({
				assertion_description: `<code>sh8sprQuery[0]['title'] === "Cymbeline"</code>`,
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: "Cymbeline",
				actual: userOutput_1[0]['title']
			})

			
		   let userOutput_2 = where(plays, {author: "Shakespeare", year: 1611})
			
			
			let assert_4 = new Assertion({
				assertion_description: `<code>sh8sprQuery2.length === 0</code>`,
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: 0,
				actual: userOutput_2.length
			})
			

			//-======---=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=
			
			
		   let userOutput_3 = where(plays, {author: "Shakespeare", year: 1623})

			let assert_5 = new Assertion({
				assertion_description: `<code>sh8sprQuery3.length === 2</code>`,
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: 2,
				actual: userOutput_3.length
			})

			let userOutput_4 = where(plays, {year: 1949})
 		   console.assert(  )

			let assert_6 = new Assertion({
				assertion_description: `<code>midCentPlays.length === 3</code>`,
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: 3,
				actual: userOutput_4.length 
			})
			
			



			
			//SETUP-5c
			assert_1.testAssertion(assert_1.actual, assert_1.expected)
			assert_2.testAssertion(assert_2.actual, assert_2.expected)
			assert_3.testAssertion(assert_3.actual, assert_3.expected)
			assert_4.testAssertion(assert_4.actual, assert_4.expected)
			assert_5.testAssertion(assert_5.actual, assert_5.expected)
			assert_6.testAssertion(assert_6.actual, assert_6.expected)


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
