let problemGroup = [
   // ex-1: findIndexesOfCapitals()
	{
     //(SETUP-1)
		name: 'findIndexesOfCapitals',   							
		globalFunc: typeof findIndexesOfCapitals !== 'undefined' && findIndexesOfCapitals || 'undefined-function',
		runTests: function(){
			
		   //(SETUP-4)
			let assertions = []
				

			var userOutput_1 = findIndexesOfCapitals('abCdE')

			//SETUP-5b
			let assert_1 = new Assertion({
            assertion_description: `<code>output_1.length === 2</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 2,
            actual: userOutput_1.length
         })

			let assert_2 = new Assertion({
            assertion_description: `<code>output_2[0] === 2</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 2,
            actual: userOutput_1[0]
         })
			
			let assert_3 = new Assertion({
            assertion_description: `<code>output_1[1] === 4</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 4,
            actual: userOutput_1[1]
         })



			//PART 2
			var userOutput_2 = findIndexesOfCapitals('Down with OPP')
		
			let assert_4 = new Assertion({
            assertion_description: `<code>output_2.length === 4</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 4,
            actual: userOutput_2.length 
         })

			let assert_5 = new Assertion({
            assertion_description: `<code>output_2[1] === 10</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 10,
            actual: userOutput_2[1] 
         })

			let assert_6 = new Assertion({
            assertion_description: `<code>output_2[2] === 11</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 11,
            actual: userOutput_2[2] 
         })


			var userOutput_3 = findIndexesOfCapitals('in3FXLs3xnQ. PoLLWx73,X')
			
			let assert_7 = new Assertion({
            assertion_description: `<code>output_3.length === 9</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 9,
            actual: userOutput_3.length 
         })

			let assert_8 = new Assertion({
            assertion_description: `<code>output_3[1] === 4 </code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 3,
            actual: userOutput_3[0] 
         })

			let assert_9 = new Assertion({
            assertion_description: `<code>output_3[4] === 13</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 13,
            actual: userOutput_3[4] 
         })

			//SETUP-5c
			assert_1.testAssertion(assert_1.actual , assert_1.expected)
			assert_2.testAssertion(assert_2.actual, assert_2.expected)
			assert_3.testAssertion(assert_3.actual, assert_3.expected)
			assert_4.testAssertion(assert_4.actual, assert_4.expected)
			assert_5.testAssertion(assert_5.actual, assert_5.expected)
			assert_6.testAssertion(assert_6.actual, assert_6.expected)

			assert_7.testAssertion(assert_7.actual, assert_7.expected)
			assert_8.testAssertion(assert_8.actual, assert_8.expected)
			assert_9.testAssertion(assert_9.actual, assert_9.expected)


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

		
			return assertions
		},
		
	},
	
	//ex-2 sumDigits()
	{
     //(SETUP-1)
		name: 'sumDigits',   							
		globalFunc: typeof sumDigits !== 'undefined' && sumDigits || 'undefined-function',
		runTests: function(){
			
		   //(SETUP-4)
			let assertions = []
			
			let assert_1 = new Assertion({
            assertion_description: `<code>sumDigits(1234) === 10</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 10,
            actual: sumDigits(1234)
         })

			let assert_2 = new Assertion({
            assertion_description: `<code>sumDigits(8391) === 21</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 21,
            actual: sumDigits(8391)
         })

			let assert_3 = new Assertion({
            assertion_description: `<code>sumDigits(18) === 9</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected:  9 ,
            actual:  sumDigits(18) 
         })


			let assert_4 = new Assertion({
            assertion_description: `<code>sumDigits(71) === 8</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 8,
            actual: sumDigits(71)
         })


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
	
	// ex-3: createTuples()
	{
     //(SETUP-1)
		name: 'createTuples',   							
		globalFunc: typeof createTuples !== 'undefined' && createTuples || 'undefined-function',
		runTests: function(){
			
		   //(SETUP-4)
			let assertions = []
			
			
			var statsObj = {
				name: "Lebron James",
				ppg: 25.6,
				apg: 8.7,
				rpg: 7.7,
			}

			var billboardHits = {
				1995: "Coolio - Gangsta's Paradise",
				1996: "Los del Rio - Macarena",
			 	2002: "Nickelback - How you Remind Me",
			}


			var userOutput_1 = createTuples(statsObj)
		
			
			
			//SETUP-5b
			let assert_2 = new Assertion({
            assertion_description: `<code>tuples_1.length === 4</code>`,
            assertion_predicate:  function(arg1, arg2){ return typeof arg1 === typeof arg2 },
            expected:  4,
            actual:  userOutput_1.length
         })

			let assert_1 = new Assertion({
            assertion_description: `<br/><code>tuples_1[0][0] === "name"  && tuples_1[0][1]==="Lebron James" <br/>|| <br/>
				tuples_1[0][0] === "ppg"  && tuples_1[0][1]=== 25.6 <br/>|| <br/>
				tuples_1[0][0] === "apg"  && tuples_1[0][1]=== 8.7 <br/>|| <br/> 
			   tuples_1[0][0] === "rpg" && tuples_1[0][1]=== 7.7  </code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2  },
            expected: true,
            actual:  tuples_1[0][0] === "name"  && tuples_1[0][1]==="Lebron James"|| 
				tuples_1[0][0] === "ppg"  && tuples_1[0][1]=== 25.6|| 
				tuples_1[0][0] === "apg"  && tuples_1[0][1]=== 8.7 || 
			   tuples_1[0][0] === "rpg" && tuples_1[0][1]=== 7.7 
         })
			

			var userOutput_2 = createTuples(billboardHits)

			let assert_3 = new Assertion({
            assertion_description: `<code>tuples_1.length === 3</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2  },
            expected: 3,
            actual:  userOutput_2.length
         })
			
			let assert_4 = new Assertion({
            assertion_description: `<br/><code>tuples_2[0][0] === '1995' && tuples_2[0][1] === "Coolio - Gangsta's Paradise" <br/>||<br/> 
				tuples_2[0][0] === '1996' && tuples_2[0][1] === "Los del Rio - Macarena"<br/> || <br/>
				tuples_2[0][0] === '2002' && tuples_2[0][1] === "Nickelback - How you Remind Me" </code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: true,
            actual:  userOutput_2[0][0] === '1995' && userOutput_2[0][1] === "Coolio - Gangsta's Paradise" ||  
				userOutput_2[0][0] === '1996' && userOutput_2[0][1] === "Los del Rio - Macarena" || 
				userOutput_2[0][0] === '2002' && userOutput_2[0][1] === "Nickelback - How you Remind Me"
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
	
	//ex-4: createClassManager()
	{
     //(SETUP-1)
		name: 'createClassManager',   							
		globalFunc: typeof createClassManager !== 'undefined' && createClassManager || 'undefined-function',
		runTests: function(){
			
		   //(SETUP-4)
			let assertions = []
			var userOutput_1 = createClassManager("Phys Ed - 1st Period")

			userOutput_1.add({student: "Jimmy", grade: "A"})
			userOutput_1.add({student: "Sally", grade: "B"})
			userOutput_1.add({student: "Tammy", grade: "C"})
			userOutput_1.add({student: "Sherry", grade: "B"})
			userOutput_1.add({student: "Kenny", grade: "B"})
			userOutput_1.add({student: "Jenny", grade: "B"})
			userOutput_1.add({student: "Kelly", grade: "C"})
			userOutput_1.add({student: "Romy", grade: "D"})
			userOutput_1.add({student: "Roxy", grade: "A"})
			userOutput_1.add({student: "Johnny", grade: "A"})

			//SETUP-5b
			let assert_1 = new Assertion({
            assertion_description: `<code>classManager.className === "Phys Ed - 1st Period"</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected:  "Phys Ed - 1st Period",
            actual: userOutput_1.className
         })

			let assert_2 = new Assertion({
            assertion_description: `<code>typeof classManager.studentGrades === 'object'</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 'object',
            actual: typeof userOutput_1.studentGrades
         })
			
			let assert_3 = new Assertion({
            assertion_description: `<code>typeof classManager.add === 'function'</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 'function',
            actual: typeof userOutput_1.add
         })

			let assert_4 = new Assertion({
            assertion_description: `<code>classManager.studentGrades['A'].length === 3</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 3,
            actual: userOutput_1.studentGrades['A'].length 
         })

			let assert_5 = new Assertion({
            assertion_description: `<code>classManager.studentGrades['A'].indexOf('Roxy') >= 0</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: true,
            actual: userOutput_1.studentGrades['A'].indexOf('Roxy') >= 0
         })

			let assert_6 = new Assertion({
            assertion_description: `<code>classManager.studentGrades['B'].length === 4 </code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 4,
            actual: userOutput_1.studentGrades['B'].length
         })

			let assert_7 = new Assertion({
            assertion_description: `<code>classManager.studentGrades['B'].indexOf('Sherry') >= 0</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: true,
            actual: userOutput_1.studentGrades['B'].indexOf('Sherry') >= 0
         })
			
			let assert_8 = new Assertion({
            assertion_description: `<code>classManager.studentGrades['C'].length === 2</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 2,
            actual: userOutput_1.studentGrades['C'].length 
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

	//ex-5: getCentury()
	{
     //(SETUP-1)
		name: 'getCentury',   							
		globalFunc: typeof getCentury !== 'undefined' && getCentury || 'undefined-function',
		runTests: function(){
			
		   //(SETUP-4)
			let assertions = []
			

			//SETUP-5b
			let assert_1 = new Assertion({
            assertion_description: `<code>getCentury(38) === '1st'</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: "1st",
            actual: getCentury(38) 
         })

			let assert_2 = new Assertion({
            assertion_description: `<code>getCentury(138) === '2nd'</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: '2nd',
            actual: getCentury(138)
         })
			
			let assert_3 = new Assertion({
            assertion_description: `<code>getCentury(389) === '4th' </code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: '4th',
            actual:  getCentury(389)

         })
			
			let assert_4 = new Assertion({
            assertion_description: `<code>getCentury(907) === '10th'</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected:  '10th',
            actual: getCentury(907)
         })

			let assert_5 = new Assertion({
            assertion_description: `<code>getCentury(1002) === '11th' </code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: '11th',
            actual: getCentury(1002)
         })

			let assert_6 = new Assertion({
            assertion_description: `<code>getCentury(1134) === '12th'</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: '12th',
            actual: getCentury(1134) 
         })
			

			let assert_7 = new Assertion({
            assertion_description: `<code>getCentury(1238) === '13th'</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: '13th',
            actual: getCentury(1238)
         })
			
			let assert_8 = new Assertion({
            assertion_description: `<code>getCentury(1452) === '15th'</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: '15th',
            actual: getCentury(1452)
         })

			let assert_9 = new Assertion({
            assertion_description: `<code>getCentury(1948) === '20th'</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: '20th',
            actual: getCentury(1948)
         })
			
			let assert_10 = new Assertion({
            assertion_description: `<code>getCentury(2016) === '21st'</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: '21st',
            actual: getCentury(2016)
         })

			let assert_11 = new Assertion({
            assertion_description: `<code> getCentury(2136) === '22nd'</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: '22nd',
            actual:  getCentury(2136) 
         })

			let assert_12 = new Assertion({
            assertion_description: `<code> getCentury(3299) === '33rd'</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: '33rd',
            actual:  getCentury(3299)
         })

			let assert_13 = new Assertion({
            assertion_description: `<code> getCentury(3299) === '33rd'</code>`,
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: '85th',
            actual:  getCentury(8436)
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
			assert_9.testAssertion(assert_9.actual, assert_9.expected)
			assert_10.testAssertion(assert_10.actual, assert_10.expected)
			assert_11.testAssertion(assert_11.actual, assert_11.expected)
			assert_12.testAssertion(assert_12.actual, assert_12.expected)
			assert_13.testAssertion(assert_13.actual, assert_13.expected)


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
			assertions.push(assert_11)
			assertions.push(assert_12)





		
			return assertions
		},
		
	},
]
