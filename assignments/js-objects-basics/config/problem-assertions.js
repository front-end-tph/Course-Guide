let problemGroup = [
   // ex-1: flipColor()
	{
     //(SETUP-1)
		name: 'flipColor',   							
		globalFunc: typeof flipColor !== 'undefined' && flipColor || 'undefined-function',
		runTests: function(){
			
		   //(SETUP-4)
			let assertions = []
			
			var tile = {
			    width: "200px",
			    height: "200px",
			    background: "black",
			    color: "blue"
			}
			//SETUP-5a
			let userOutput_1 = flipColor(tile)
			let userOutput_1_color = userOutput_1.color
			//SETUP-5b
			let assert_1 = new Assertion({
            assertion_description: `<code>tile2.color === 'red'</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: "red",
            actual: userOutput_1_color
         })


			//PART 2
			let userOutput_2_color = flipColor(userOutput_1).color

			let assert_2 = new Assertion({
            assertion_description: `<code>flipColor(tile2).color === 'blue'</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 'blue',
            actual: userOutput_2_color
         })

			//SETUP-5c
			assert_1.testAssertion(userOutput_1_color, assert_1.expected)
			
			assert_2.testAssertion(userOutput_2_color, assert_2.expected)


			//SETUP-5d
			assertions.push(assert_1)
			assertions.push(assert_2)
		
			return assertions
		},
		
	},
	
	//ex-2 makeNamesObject()
	{
     //(SETUP-1)
		name: 'makeNamesObject',   							
		globalFunc: typeof makeNamesObject !== 'undefined' && makeNamesObject || 'undefined-function',
		runTests: function(){
			
		   //(SETUP-4)
			let assertions = []
			
			
			var userOutput_1 = makeNamesObject("George Washington", "Abe Lincoln", "Kanye West")

			let assert_1 = new Assertion({
            assertion_description: `<code>greatMenObj.George === "Washington"</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: "Washington",
            actual: userOutput_1.George
         })

			let assert_2 = new Assertion({
            assertion_description: `<code>greatMenObj['John'] === "Adams"</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: "Lincoln",
            actual: userOutput_1['Abe']
         })

			let assert_3 = new Assertion({
            assertion_description: `<code>greatMenObj.Kanye === "West"</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: "West",
            actual: userOutput_1.Kanye
         })

			var userOutput_2 = makeNamesObject("Rosa Parks", "Amelia Earhart", "Charlotte Webb")

			let assert_4 = new Assertion({
            assertion_description: `<code>greatWomenObj.Rosa === "Parks"</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: "Parks",
            actual: userOutput_2.Rosa
         })

			let assert_5 = new Assertion({
            assertion_description: `<code>greatWomenObj.Charlotte === "Webb"</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: "Webb",
            actual: userOutput_2.Charlotte
         })


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
	
	// ex-3: createCarRecord()
	{
     //(SETUP-1)
		name: 'createCarRecord',   							
		globalFunc: typeof createCarRecord !== 'undefined' && createCarRecord || 'undefined-function',
		runTests: function(){
			
		   //(SETUP-4)
			let assertions = []
			
			
			var userOutput_1 = createCarRecord('Ford', 'Pinto', 1969, 'IOU7S2')
			var expectedObj_1 = {make: "Ford", model: "Pinto", year: 1969, license: 'IOU7S2'}
			//SETUP-5b
			let assert_1 = new Assertion({
            assertion_description: `<code>typeof newCar1 === 'object'</code>`,
            assertion_predicate:  function(arg1, arg2){ return typeof arg1 === typeof arg2 },
            expected:  typeof expectedObj_1,
            actual:  typeof userOutput_1
         })

			let assert_2 = new Assertion({
            assertion_description: `<code>newCar1.make === "Ford" && newCar1.model === "Pinto"</code>`,
            assertion_predicate:  function(arg1, arg2){ return userOutput_1.make === expectedObj_1.make && userOutput_1.model === expectedObj_1	.model  },
            expected: true,
            actual:  userOutput_1.make === expectedObj_1.make && userOutput_1.model === expectedObj_1.model
         })
			
			var userOutput_3 = createCarRecord('Pontiac', 'Azteca', 2001, '48NLL1' ) 
			var expectedObj_3 = {make: "Pontiac", model: "Azteca", year: 2001, license: '48NLL1'}

			let assert_3 = new Assertion({
            assertion_description: `<code>newCar2.make === "Pontiac" && newCar2.year === 2001</code>`,
            assertion_predicate:  function(arg1, arg2){ return userOutput_3.make === expectedObj_3.make && userOutput_3.year === expectedObj_3.year  },
            expected: true,
            actual:  userOutput_3.make === expectedObj_3.make && userOutput_3.year === expectedObj_3.year
         })
			
			var userOutput_4 = createCarRecord('Jeep', 'Wrangler', 1987, '8HPN02' );
			var expectedObj_4 = {make: "Jeep", model: "Wrangler", year: 1987, license: '8HPN02'}

			let assert_4 = new Assertion({
            assertion_description: `<code>newCar3.model === "Wrangler" && newCar3.license === '8HPN02'</code>`,
            assertion_predicate:  function(arg1, arg2){ return userOutput_4.make === expectedObj_4.make && userOutput_4.year === expectedObj_4.year  },
            expected: true,
            actual:  userOutput_4.make === expectedObj_4.make && userOutput_4.year === expectedObj_4.year
         })
			
			var userOutput_5 = createCarRecord()
			let assert_5 = new Assertion({
            assertion_description: `<code>newCar3 === 'new record must have make, model, year, and license values'</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2  },
            expected: "new record must have make, model, year, and license values",
            actual:  userOutput_5
         })
			
			var userOutput_6 = createCarRecord('Volkswagen', 'Beatle') 
			let assert_6 = new Assertion({
            assertion_description: `<code>newCar4 === 'new record must have make, model, year, and license values'</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2  },
            expected: "new record must have make, model, year, and license values",
            actual:  userOutput_6
         })

			var userOutput_7 = createCarRecord('Volkswagen', 'Beatle') 
			let assert_7 = new Assertion({
            assertion_description: `<code>newCar4 === 'new record must have make, model, year, and license values'</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2  },
            expected: "new record must have make, model, year, and license values",
            actual:  userOutput_7
         })

			let userOutput_8 = createCarRecord('Ferrari', true, 2015, 'K9KPL2' ) 
			
			let assert_8 = new Assertion({
            assertion_description: `<code>newCar5 === '1st, 2nd, and 4th arguments must be String'</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2  },
            expected: "1st, 2nd, and 4th arguments must be String",
            actual:  userOutput_8
         })

			var userOutput_9 = createCarRecord( true, 'Spider', 2012, 93933) 

			let assert_9 = new Assertion({
            assertion_description: `<code>newCar6 === '1st, 2nd, and 4th arguments must be String'</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2  },
            expected: "1st, 2nd, and 4th arguments must be String",
            actual:  userOutput_9
         })

			var userOutput_10 = createCarRecord( 'Ferrari', 'Spider', '2013', '8IOL32') 
			let assert_10 = new Assertion({
            assertion_description: `<code>newCar7 === '3rd argument must be a Number'</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2  },
            expected: '3rd argument must be a Number',
            actual:  userOutput_10
         })
			
			//SETUP-5c
			assert_1.testAssertion(typeof userOutput_1, typeof assert_1.expected)
			assert_2.testAssertion(userOutput_1, assert_2.expected)
			assert_3.testAssertion(userOutput_3, assert_3.expected)
			assert_4.testAssertion(userOutput_4, assert_4.expected)
			assert_5.testAssertion(userOutput_5, assert_5.expected)
			assert_6.testAssertion(userOutput_6, assert_6.expected)
			assert_7.testAssertion(userOutput_7, assert_7.expected)
			assert_8.testAssertion(userOutput_8, assert_8.expected)
			assert_9.testAssertion(userOutput_9, assert_9.expected)
			assert_10.testAssertion(userOutput_10, assert_10.expected)


			//SETUP-5d
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
	
	//ex-4: getFullNames()
	{
     //(SETUP-1)
		name: 'getFullNames',   							
		globalFunc: typeof getFullNames !== 'undefined' && getFullNames || 'undefined-function',
		runTests: function(){
			
		   //(SETUP-4)
			let assertions = []
			
			var customersList = [
			    { first: 'Joe', last: 'Blogs'},
			    { first: 'John', last: 'Smith'},
			    { first: 'Dave', last: 'Jones'},
			    { first: 'Jack', last: 'White'}
			]

			var moreCustomersList = [
				{ first: 'Ruby', last: 'Scooby'},
				{ first: 'Jen', last: 'Vin'},
				{ first: 'Dan', last: 'Theman'},
			]
			//SETUP-5a
			let userOutput_1 = getFullNames(customersList)

			//SETUP-5b
			let assert_1 = new Assertion({
            assertion_description: `<code>getFullNames(customersList)[0] === "Joe Blogs"</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: "Joe Blogs",
            actual: userOutput_1[0]
         })

			let assert_2 = new Assertion({
            assertion_description: `<code>getFullNames(customersList)[1] === "John Smith"</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 'John Smith',
            actual: userOutput_1[1]
         })
			
			let userOutput_3 = getFullNames(moreCustomersList)

			let assert_3 = new Assertion({
            assertion_description: `<code>getFullNames(moreCustomersList)[0] === "Jack White"</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 'Ruby Scooby',
            actual: userOutput_3[0]
         })

			let assert_4 = new Assertion({
            assertion_description: `<code>moreCustomersList)[2] === "Dan Theman"</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 'Dan Theman',
            actual: userOutput_3[2]
         })

			//SETUP-5c
			assert_1.testAssertion(userOutput_1[0], assert_1.expected)
			assert_2.testAssertion(userOutput_1[1], assert_2.expected)
			assert_3.testAssertion(userOutput_3[0], assert_3.expected)
			assert_4.testAssertion(userOutput_3[2], assert_4.expected)


			//SETUP-5d
			assertions.push(assert_1)
			assertions.push(assert_2)
			assertions.push(assert_3)
			assertions.push(assert_4)

		
			return assertions
		},
		
	},

	//ex-5: createListOfObjects()
	{
     //(SETUP-1)
		name: 'createListOfObjects',   							
		globalFunc: typeof createListOfObjects !== 'undefined' && createListOfObjects || 'undefined-function',
		runTests: function(){
			
		   //(SETUP-4)
			let assertions = []
			
			
			var realNinjas = [
			  'Chuck Norris',
			  'Jackie Chan',
			  'Lucy Liu',
			  'Billy Blanks',
			  'Michelle Yeoh',
			  'Jet Li'
			]

			var realSportsStars = [
				'Kenny Powers',
				'Ricky Vaughn',
				'Dottie Hinson',
				'Jesus Shuttlesworth',
				'Scotty Smalls'
			]
			//SETUP-5a
			let userOutput_1 = createListOfObjects(realNinjas)

			//SETUP-5b
			let assert_1 = new Assertion({
            assertion_description: `<code>typeof ninjaListOfObjects[0] === "object"</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: "object",
            actual: typeof userOutput_1[0]
         })

			let assert_2 = new Assertion({
            assertion_description: `<code>ninjaListOfObjects[0].firstName === "Chuck"</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 'Chuck',
            actual: userOutput_1[0].firstName
         })
			
			let assert_3 = new Assertion({
            assertion_description: `<code>ninjaListOfObjects[1].lastName === "Chan"</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 'Chan',
            actual: userOutput_1[1].lastName
         })
			
			let assert_4 = new Assertion({
            assertion_description: `<code>ninjaListOfObjects[3].firstName === "Billy"</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 'Billy',
            actual: userOutput_1[3].firstName
         })


			var userOutput_5 = createListOfObjects(realSportsStars)
			let assert_5 = new Assertion({
            assertion_description: `<code>sportStarsListOfObjects[1].firstName === "Ricky"</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 'Ricky',
            actual: userOutput_5[1].firstName
         })

			let assert_6 = new Assertion({
            assertion_description: `<code>sportStarsListOfObjects[4].firstName === "Scotty"</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 'Smalls',
            actual: userOutput_5[4].lastName
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
