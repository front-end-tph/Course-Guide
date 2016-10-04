
document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var answerPTagWithValue = document.querySelector('#compoundInvestment')
  console.log(answerPTagWithValue.innerHTML += "woahwoah")


})


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
})

var value = 1
document.querySelector("#cycle-image button").addEventListener('click',function(){
   // TASK #8
   var imgEl = document.querySelector('#city-img')
   imgEl.src="./images/city-photo-"+ (value % 10 + 1)    +".jpg"
   value +=1

})
