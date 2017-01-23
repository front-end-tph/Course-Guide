let problemGroup = [
   // ex-1: addMoreEnthusiam()
	{
     //(SETUP-1)
		name: 'addMoreEnthusiam',   							//(SETUP-2a)                          //(SETUP-2b)
		globalFunc: typeof addMoreEnthusiam !== 'undefined' && addMoreEnthusiam || 'undefined-function',
		runTests: function(){
			
		   //(SETUP-4)
			let assertions = []

			//SETUP-5a
			let userOutput_1 = addMoreEnthusiam("I want pizza")
			//SETUP-5b
			let assert_1 = new Assertion({
            assertion_description: '<code>funcOutput1  === "I want pizza!!!"</code>',
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: "I want pizza!!!",
            actual: userOutput_1
         })


			//PART 2
			let userOutput_2 = addMoreEnthusiam("Hey")

			let assert_2 = new Assertion({
            assertion_description: '<code> funcOutput2 === "Hey!!!"</code>',
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: "Hey!!!",
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
	
	// ex-2: simpleSum()
	{
		name: 'simpleSum',
		globalFunc: typeof simpleSum !== 'undefined' && simpleSum || 'undefined-function',
		runTests: function(){
			let assertions = []

			//PART 1
			let userOutput_1 = simpleSum(8, 11) 
			let assert_1 = new Assertion({
            assertion_description: '<code>simpleSum(8, 11) === 19</code>',
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 19,
            actual: userOutput_1
         })
        
			
			//PART 2
			let userOutput_2 = simpleSum(4, 101)
			let assert_2 = new Assertion({
            assertion_description: '<code>simpleSum(4, 101) === 19</code>',
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 105,
				actual: userOutput_2
         })

			
			let userOutput_3 = simpleSum(2,2);
			let assert_3 = new Assertion({
            assertion_description: '<code>simpleSum(2, 2) !== 5.</code>',
            assertion_predicate:  function(arg1, arg2){ return arg1 !== arg2 },
            expected: 4,
				actual: userOutput_3
         })


			
			assert_1.testAssertion( userOutput_1, assert_1.expected)
         assert_2.testAssertion( userOutput_2, assert_2.expected)
			assert_3.testAssertion( userOutput_3 , 5 )

			assertions.push(assert_1)
			assertions.push(assert_2)
			assertions.push(assert_3)

			return assertions
		},
	},
	
	// ex-3: getAverage()
	{
		name: 'getAverage',
		globalFunc: typeof getAverage !== 'undefined' && getAverage || 'undefined-function',
		runTests: function(){
			let assertions = []

			//PART 1
			let userOutput_1 = getAverage(18, 22) 
			let assert_1 = new Assertion({
            assertion_description: '<code>getAverage(8, 11) === 19</code>',
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 20,
            actual: userOutput_1
         })
        
			
			//PART 2
			let userOutput_2 = getAverage(100, 200)
			let assert_2 = new Assertion({
            assertion_description: '<code>getAverage(4, 101) === 19</code>',
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 150,
				actual: userOutput_2
         })
			
			assert_1.testAssertion( userOutput_1, assert_1.expected)
         assert_2.testAssertion( userOutput_2, assert_2.expected)

			assertions.push(assert_1)
			assertions.push(assert_2)

			return assertions
		},
	},
	
	// ex-4: isNegative()
	{
		name: 'isNegative',
		globalFunc: typeof isNegative !== 'undefined' && isNegative || 'undefined-function',
		runTests: function(){
			let assertions = []

			//PART 1
			let userOutput_1 = isNegative(10) 
			let assert_1 = new Assertion({
            assertion_description: '<code>isNegative(10) === false</code>',
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: false,
            actual: userOutput_1
         })
        
			
			//PART 2
			let userOutput_2 = isNegative(0)
			let assert_2 = new Assertion({
            assertion_description: `<code>isNegative(0) === false</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: false,
				actual: userOutput_2
         })

			//PART 3
			let userOutput_3 = isNegative(-999) 
			let assert_3 = new Assertion({
            assertion_description: '<code>isNegative(-999) === true</code>',
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: true,
				actual: userOutput_3
         })
			
			
			assert_1.testAssertion( userOutput_1, assert_1.expected)
         assert_2.testAssertion( userOutput_2, assert_2.expected)
         assert_3.testAssertion( userOutput_3, assert_3.expected)

			assertions.push(assert_1)
			assertions.push(assert_2)
			assertions.push(assert_3)


			return assertions
		},
	},
	
	// ex-5: makeSimpleGreeting()
	{
		name: 'makeSimpleGreeting',
		globalFunc: typeof makeSimpleGreeting !== 'undefined' && makeSimpleGreeting || 'undefined-function',
		runTests: function(){
			let assertions = []

			//PART 1
			let userOutput_1 = makeSimpleGreeting("Atushi", true) 
			let assert_1 = new Assertion({
            assertion_description: '<code>funcOutput1  === "Welcome back, Atushi."</code>',
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: "Welcome back, Atushi.",
            actual: userOutput_1
         })
        
			
			//PART 2
			let userOutput_2 = makeSimpleGreeting("Mira", false)
			let assert_2 = new Assertion({
            assertion_description: '<code>funcOutput2 === "Hello there, Mira!"</code>',
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: "Hello there, Mira!",
				actual: userOutput_2
         })
			
			let userOutput_3 = makeSimpleGreeting("Nico", false);
			let assert_3 = new Assertion({
            assertion_description: '<code>funcOutput3 !== "Welcome back, Nico.</code>',
            assertion_predicate:  function(arg1, arg2){ return arg1 !== arg2 },
            expected: "Hello there, Nico!",
				actual: userOutput_3
         })


			
			assert_1.testAssertion( userOutput_1, assert_1.expected)
			assert_2.testAssertion( userOutput_2, assert_2.expected)
			assert_3.testAssertion( userOutput_3, "Welcome back, Nico." )

			assertions.push(assert_1)
			assertions.push(assert_2)
			assertions.push(assert_3)

			return assertions
		},
	},	
	
	// ex-6: robustSum()
	{
		name: 'robustSum',
		globalFunc: typeof robustSum !== 'undefined' && robustSum || 'undefined-function',
		runTests: function(){
			let assertions = []

			//PART 1
			let userOutput_1 = robustSum(867, 5309) 
			let assert_1 = new Assertion({
            assertion_description: '<code>robustSum(867, 5309) === 6176</code>',
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 6176,
            actual: userOutput_1
         })
        
			
			//PART 2
			let userOutput_2 = robustSum('867', 5309)
			let assert_2 = new Assertion({
            assertion_description: `<code>robustSum('867', 5309) === false</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: false,
				actual: userOutput_2
         })

			//PART 3
			let userOutput_3 = robustSum(true, 5) 
			let assert_3 = new Assertion({
            assertion_description: '<code>robustSum(true, 5) === false</code>',
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: false,
				actual: userOutput_3
         })
			
			
			assert_1.testAssertion( userOutput_1, assert_1.expected)
         assert_2.testAssertion( userOutput_2, assert_2.expected)
         assert_3.testAssertion( userOutput_3, assert_3.expected)

			assertions.push(assert_1)
			assertions.push(assert_2)
			assertions.push(assert_3)


			return assertions
		}
	},

	// ex-7: getMinimum()
	{
		name: 'getMinimum',
		globalFunc: typeof getMinimum !== 'undefined' && getMinimum || 'undefined-function',
		runTests: function(){
			let assertions = []

       
			//PART 1
			let userOutput_1 = getMinimum(1,2,4,0)
			let assert_1 = new Assertion({
            assertion_description: `<code>getMinimum(1,2,4,0) === 0</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 0,
				actual: userOutput_1
         })

			//PART 2	
			let userOutput_2 = getMinimum(1000,-2,-99,50) 
			let assert_2 = new Assertion({
            assertion_description: '<code>getMinimum(1000,-2,-99,50) === -99</code>',
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: -99,
            actual: userOutput_2
         })
	
			//PART 3
			let userOutput_3 = getMinimum(-1000,-2,-99,50)
			let assert_3 = new Assertion({
            assertion_description: '<code>getMinimum(-1000,-2,-99,50) === -1000</code>',
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: -1000,
				actual: userOutput_3
         })
			
			let userOutput_4 = getMinimum(400,-11,12,-5)
			let assert_4 = new Assertion({
            assertion_description: '<code>getMinimum(400,-11,12,-5) === -11</code>',
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: -11,
				actual: userOutput_4
         })
			
			
			assert_1.testAssertion( userOutput_1, assert_1.expected)
         assert_2.testAssertion( userOutput_2, assert_2.expected)
         assert_3.testAssertion( userOutput_3, assert_3.expected)
	      assert_4.testAssertion( userOutput_4, assert_4.expected)

			assertions.push(assert_1)
			assertions.push(assert_2)
			assertions.push(assert_3)
			assertions.push(assert_4)

	
			return assertions
		},
	},
	
	// ex-8: justOneString()
	{
		name: 'justOneString',
		globalFunc: typeof justOneString !== 'undefined' && justOneString || 'undefined-function',
		runTests: function(){
			let assertions = []

       
			//PART 1
			let userOutput_1 = justOneString('a',5)
			let assert_1 = new Assertion({
            assertion_description: `<code>justOneString('a',5) === true</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: true,
				actual: userOutput_1
         })

			//PART 2	
			let userOutput_2 = justOneString(6,'dotron')
			let assert_2 = new Assertion({
            assertion_description: `<code>justOneString(6,'dotron') === true</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: true,
            actual: userOutput_2
         })
	
			//PART 3
			let userOutput_3 = justOneString('peanut','butter')
			let assert_3 = new Assertion({
            assertion_description: `<code>justOneString('peanut','butter') === false</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: false	,
				actual: userOutput_3
         })
			
			let userOutput_4 = justOneString(8,null)
			let assert_4 = new Assertion({
            assertion_description: '<code>justOneString(8,true) === false</code>',
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: false,
				actual: userOutput_4
         })
			
			
			assert_1.testAssertion( userOutput_1, assert_1.expected)
         assert_2.testAssertion( userOutput_2, assert_2.expected)
         assert_3.testAssertion( userOutput_3, assert_3.expected)
	      assert_4.testAssertion( userOutput_4, assert_4.expected)

			assertions.push(assert_1)
			assertions.push(assert_2)
			assertions.push(assert_3)
			assertions.push(assert_4)

	
			return assertions
		},
	},

	// ex-9: getSeasonForMonth()
	{
		name: 'getSeasonForMonth',
		globalFunc: typeof getSeasonForMonth !== 'undefined' && getSeasonForMonth || 'undefined-function',
		runTests: function(){
			let assertions = []

       
			//PART 1
			let userOutput_1 = getSeasonForMonth(1)
			let assert_1 = new Assertion({
            assertion_description: `<code>getSeasonForMonth(1) === "winter"</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: "winter",
				actual: userOutput_1
         })

			//PART 2	
			let userOutput_2 = getSeasonForMonth(3)
			let assert_2 = new Assertion({
            assertion_description: `<code>getSeasonForMonth(3) === "spring"</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: "spring",
            actual: userOutput_2
         })
	
			//PART 3
			let userOutput_3 = getSeasonForMonth(5)
			let assert_3 = new Assertion({
            assertion_description: `<code>getSeasonForMonth(5) === "spring"</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: "spring"	,
				actual: userOutput_3
         })
			
			let userOutput_4 = getSeasonForMonth(7)
			let assert_4 = new Assertion({
            assertion_description: '<code>getSeasonForMonth(7) === "summer"</code>',
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: "summer",
				actual: userOutput_4
         })
		
			let userOutput_5 = getSeasonForMonth(9)
			let assert_5 = new Assertion({
            assertion_description: '<code>getSeasonForMonth(9) === "fall"</code>',
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: "fall",
				actual: userOutput_5
         })

			let userOutput_6 = getSeasonForMonth(12)
			let assert_6 = new Assertion({
            assertion_description: '<code>getSeasonForMonth(12) === "winter"</code>',
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: "winter",
				actual: userOutput_6
         })

			let userOutput_7 = getSeasonForMonth(13)
			let assert_7 = new Assertion({
            assertion_description: '<code>getSeasonForMonth(13) === false</code>',
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: false,
				actual: userOutput_7
         })

			let userOutput_8 = getSeasonForMonth(32)
			let assert_8 = new Assertion({
            assertion_description: '<code>getSeasonForMonth(32) === false</code>',
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: false,
				actual: userOutput_8
         })

			let userOutput_9 = getSeasonForMonth(0)
			let assert_9 = new Assertion({
            assertion_description: '<code>getSeasonForMonth(0) === false</code>',
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: false,
				actual: userOutput_9
         })

			let userOutput_10 = getSeasonForMonth("June")
			let assert_10 = new Assertion({
            assertion_description: '<code>getSeasonForMonth("June") === false</code>',
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: false,
				actual: userOutput_10
         })
			
			
			assert_1.testAssertion( userOutput_1, assert_1.expected)
         assert_2.testAssertion( userOutput_2, assert_2.expected)
         assert_3.testAssertion( userOutput_3, assert_3.expected)
	      assert_4.testAssertion( userOutput_4, assert_4.expected)
	      assert_5.testAssertion( userOutput_5, assert_5.expected)
	      assert_6.testAssertion( userOutput_6, assert_6.expected)
	      assert_7.testAssertion( userOutput_7, assert_7.expected)
	      assert_8.testAssertion( userOutput_8, assert_8.expected)
	      assert_9.testAssertion( userOutput_9, assert_9.expected)
		   assert_10.testAssertion( userOutput_10, assert_10.expected)

			assertions.push(assert_1)
			assertions.push(assert_2)
			assertions.push(assert_3)
			assertions.push(assert_4)
			assertions.push(assert_5)
			assertions.push(assert_6)
			assertions.push(assert_7)
			assertions.push(assert_8)
			assertions.push(assert_9)
			assertions.push(assert_10)

	
			return assertions
		},
	},
	
	// ex-10: loneSum()
	{
		name: 'loneSum',
		globalFunc: typeof loneSum !== 'undefined' && loneSum || 'undefined-function',
		runTests: function(){
			let assertions = []

       
			//PART 1
			let userOutput_1 = loneSum(1,2,3)
			let assert_1 = new Assertion({
            assertion_description: `<code>loneSum(1,2,3) === 6</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 6,
				actual: userOutput_1
         })

			//PART 2	
			let userOutput_2 = loneSum(11,9,5) 
			let assert_2 = new Assertion({
            assertion_description: '<code>loneSum(11,9,5) === 25</code>',
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 25,
            actual: userOutput_2
         })
	
			//PART 3
			let userOutput_3 = loneSum(4,2,4)
			let assert_3 = new Assertion({
            assertion_description: '<code>loneSum(4,2,4) === 2</code>',
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 2,
				actual: userOutput_3
         })
			
			let userOutput_4 = loneSum(13,8,8)
			let assert_4 = new Assertion({
            assertion_description: '<code>loneSum(13,8,8) === 13</code>',
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 13,
				actual: userOutput_4
         })

			let userOutput_5 = loneSum(10,10,10)
			let assert_5 = new Assertion({
            assertion_description: '<code>loneSum(10,10,10) === 0</code>',
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 0,
				actual: userOutput_5
         })
			
			
			assert_1.testAssertion( userOutput_1, assert_1.expected)
         assert_2.testAssertion( userOutput_2, assert_2.expected)
         assert_3.testAssertion( userOutput_3, assert_3.expected)
	      assert_4.testAssertion( userOutput_4, assert_4.expected)
	      assert_5.testAssertion( userOutput_5, assert_5.expected)

			assertions.push(assert_1)
			assertions.push(assert_2)
			assertions.push(assert_3)
			assertions.push(assert_4)
			assertions.push(assert_5)

	
			return assertions
		}
	},
	
	// ex-11: calcSpeedTicket()
	{
		name: 'calcSpeedTicket',
		globalFunc: typeof calcSpeedTicket !== 'undefined' && calcSpeedTicket || 'undefined-function',
		runTests: function(){
			let assertions = []

       
			//PART 1
			let userOutput_1 = calcSpeedTicket(25, 40, false)
			let assert_1 = new Assertion({
            assertion_description: `<code>calcSpeedTicket(25, 29, true) === 0</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 150,
				actual: userOutput_1
         })

			//PART 2	
			let userOutput_2 = calcSpeedTicket(65, 72, true)
			let assert_2 = new Assertion({
            assertion_description: '<code>calcSpeedTicket(65, 72, true) === 300 </code>',
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 300,
            actual: userOutput_2
         })
	
			//PART 3
			let userOutput_3 = calcSpeedTicket(75, 97, false)
			let assert_3 = new Assertion({
            assertion_description: '<code>calcSpeedTicket(75, 97, false) === 250</code>',
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 250,
				actual: userOutput_3
         })
			
			let userOutput_4 =  calcSpeedTicket(55, 83, true)
			let assert_4 = new Assertion({
            assertion_description: '<code> calcSpeedTicket(55, 83, true) === 500</code>',
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 500,
				actual: userOutput_4
         })

			let userOutput_5 = calcSpeedTicket(25, 29, true)
			let assert_5 = new Assertion({
            assertion_description: '<code>calcSpeedTicket(25, 29, true) === 0</code>',
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 0,
				actual: userOutput_5
         })
			
			
			assert_1.testAssertion( userOutput_1, assert_1.expected)
         assert_2.testAssertion( userOutput_2, assert_2.expected)
         assert_3.testAssertion( userOutput_3, assert_3.expected)
	      assert_4.testAssertion( userOutput_4, assert_4.expected)
	      assert_5.testAssertion( userOutput_5, assert_5.expected)

			assertions.push(assert_1)
			assertions.push(assert_2)
			assertions.push(assert_3)
			assertions.push(assert_4)
			assertions.push(assert_5)

	
			return assertions
		}
	},

]
