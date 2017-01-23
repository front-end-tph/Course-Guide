let ICONS = {
	passed: `<i class="material-icons" style="color:#049372">done</i>`,
	failed: `<i class="material-icons" style="color:#C0392B">close</i>`
}

function TypeOf(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}

function makeTableRows (assertionObjectList){
	let tableRows = assertionObjectList.map(makeTableRowFromAssertion) 
	return `
		<table class="table-full-width">
			<thead>
				<tr>
					<th>Assertion</th>
					<th class="txt-right">Your<br/>Function<br/>Result</th>
					<th class="txt-right">Expected<br/>Function<br/>Result</th>
				</tr>
			</thead>
			<tbody>
				${tableRows.join('')}
			</tbody>
		</table>
	`
}

function makeTableRowFromAssertion(assertionObj){
		let userResult, testResult

		let assertionContextClass = assertionObj.assertionResult ? 'bg-success': 'bg-fail',
			 resultContextClass = assertionObj.actual === assertionObj.expected ? 'bg-success':'bg-fail',
			 assertionIcon =  assertionObj.assertionResult ? ICONS.passed : ICONS.failed,
			 resultIcon	 = assertionObj.actual === assertionObj.expected ? ICONS.passed : ICONS.failed
		
		
		return `<tr">
					<td class="${assertionContextClass}"><span class="txt-muted">${assertionIcon}</span>${assertionObj.description}</td> 
					<td class="txt-right"> <span class="txt-muted">${resultIcon}</span> <span class="answer ${resultContextClass}"> ${assertionObj.actual}</span><hr/><small>${TypeOf(assertionObj.actual)}</small></td>
					<td class="txt-right"> <span class="answer bg-info">${assertionObj.expected}</span><hr/> <small>${TypeOf(assertionObj.expected )}</small></td> 
				 </tr>`	
}

function renderAssertionResults( problemData , index){
	if ( problemData.globalFunc === 'undefined-function' ){
		// console.log(`Function ${problemData.name} is not Defined`)
		// console.log(`-------------------------`)
		return `
			<article>
				<a name="${problemData.name}"></a>
				<h1><span class='question bg-inverted'>${index+1}</span>  <code>${problemData.name}()</code></h1>
				<hr/>
				<section class="segment bg-warn">You have not written a function called <code>${problemData.name}</code></section>
			</article>`
	}
	
	let assertionObjects = problemData.runTests()

	 return `
		<article>
			<a name="${problemData.name}"></a>
			<h1><span class='question bg-inverted'>${index+1}</span>  <code>${problemData.name}()</code></h1>
			<hr/>
			${makeTableRows(assertionObjects)}
		</article>
	`
}

let html = problemGroup.map( (problemInfo, i) => renderAssertionResults( problemInfo, i) ).join('')

document.getElementById('results-container').innerHTML = html