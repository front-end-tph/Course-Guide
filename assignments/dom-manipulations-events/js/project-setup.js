
var qs = function(cssSelct){
  return document.querySelector(cssSelct);
}

var qsAll = function(cssSelct){
  return document.querySelectorAll(cssSelct);
}

function answerQuestionFor(qId,fn){
  qs(qId+' button').addEventListener('click',function(){
    fn();
  })
}


function generatePromptAndDemoHTML(obj, index){
  var htmlString  = "<div class='prompt'>"
      htmlString +=   "<h3>Task #"+(index+1)+"</h3>"
      htmlString +=   "<p>"+obj.task+"</p>"
      htmlString += "</div>"
      htmlString += "<div class='content-box teacher-demo'>"
      htmlString +=   "<h4>Demo</h4>"
      htmlString +=   "<img src='"+obj.link+"' alt='effect'>"
      htmlString += "</div>"

  return htmlString
}

var tasks = [
  {
    html_id: "hide-nav",
    task: "Add a button into the answer-box that, when clicked, will toggle the visibility of the nav menu.\
	 <br/><br/><u>Hint</u>\
	 <br/><span class='hint'>The easiest way is probably to add/remove the class <code>nav-menu-hidden</code> on the nav element.</hint>",
    link: "gifs/toggle-vis.gif"
  },
  {
    html_id: "select-items",
    task: "When you click on an element it should add or remove a class of <code>'selected'</code> to the element that was clicked.\
	 <br/><br/><u>Hint</u>\
	 <span class='hint'>You will likely want to use <code>evt.currentTarget</code> rather than <code>evt.target</code></span> ",
    link: "gifs/select-items.gif"
  },
  {
	 html_id: "add-vals",
	 task: "When you click on a button with a number, it should increase the total by that amount.",
	 link: "gifs/add-vals.gif"
  },
  {
    html_id: "list-2-list",
    task: "When you click on an element it should be put on the other list\
	  <br/><br/><u>Hint</u>\
     <br/><span class='hint'>To solve this you will need to select all of the <code>&lt;li&gt;</code> elements,\
     <br/> iterate over them and put an event listener (<code>.addEventListener</code>)  on each element.</em> \
	  <br/><br/>Some properties/methods you may want to consider: <code>.parentNode</code> and <code>.appendChild</code>.</span>",
    link: "gifs/move-list-items.gif"
  },
  {
    html_id: "change-colors",
    task: "When you click on the appropriate <code>&lt;span class='bg-«color»'&gt</code> element,\
 		<br/>you should take the value for that element's <code>bg-«color»</code> class and \
		<br/> add it as another class on the <code>&lt;p class='msg'&gt'</code> element to change its background. \
	  <br/><br/><u>Hint:</u><span class='hint'> \
		<br/><br/>To get started, you will need to select all of the <code>&lt;span&gt;</code> elements,\
 	  <br/> iterate over them and put an event listener (<code>.addEventListener</code>) on each element.\
 		<br/><br/>When an element is clicked, you will first need to remove whatever <code>bg-«color»</code> \
     <br/>class that exists on the <code>&lt;p class='msg'&gt'</code> before adding \
	  <br/> the new <code>bg-«color»</code> class from the clicked element.</span>",
    link: "gifs/change-colors.gif"
  }
]

function findEl(els, fn){
  var foundEl = {}
  for (var i = 0; i < els.length; i++){

    if (fn(els[i],i,els) === true){
      foundEl = {
        el: els[i],
        index: i
      }
      break;
    }
  }
  return foundEl
}

var exercises =  qsAll('.exercise-container')
tasks.forEach(function(t, i){
  var cssSelector="#"+t.html_id

  var el = findEl( exercises , function(el,i){
    return el.id === t.html_id
  })

  qs(cssSelector).innerHTML = generatePromptAndDemoHTML(t,el.index ) + qs(cssSelector).innerHTML
})
