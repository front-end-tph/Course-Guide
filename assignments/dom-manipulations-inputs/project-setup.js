
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
      html_id: "reset-field",
      task: "<p><em><u>Instructions:</u></em><br/> When the 'Push Me' <code>&lt;button&gt;</code> element is pushed, clear the value of the <code>&ltinput&gt;</code> element inside <code>&lt;div class='answer-box'&gt;</code>\
   <br/><br/><em><u>Hint:</u><br/> <span class='hint'>Checkout a DOM element's <code>.value</code> property.</span></em> </p>",
      link: "gifs/reset-field.gif"
   },
   {
     html_id: "validate-field",
     task: "<p><em><u>Instructions:</u></em><br/>If the field is less than 6 characters then insert an invalid entry alert into the <code>&lt;p class='flash-message'&gt;</code> tag that is styled as in the Demo. \
     If the input's value is 6 or more characters then use the same element to notify the user that the entry is valid.\
     <br><br><u>Hint:</u><br/> <span class='hint'>Check <code>style.css</code> for classes you could add/remove to the <code>&lt;p class='flash-message'&gt;</code> element</span></em>",
     link: "gifs/validate-field.gif"
  },
  {
    html_id: "calculate-items",
    task: "<p><em><u>Instructions:</u></em><br/>Calculate the total of whichever items are checked\
    <br><br><u>Hint:</u><br/> <span class='hint'>Check for property <code>.checked</code> on the selected <code>option</code> elements and get the <code>.value</code></p>",
    link: "gifs/calculate-fields.gif"
  },
  {
    html_id: "select-to-show-more",
    task: "<p>When you push the button, show more information into the right-hand column. <strong>Hint:</strong> you may need to inspect the <code>dataset</code> property\
     <br><br><u>Hint:</u><br/> <span class='hint'>You may want to reference the <code>.selectedIndex</code> on the <code>select</code> DOM element to get the currently selected option<br>\
     Also, check the  <code>.dataset</code> property on the selected <code>option</code> element to get the data for the field.</p>",
    link: "gifs/select-for-more-info.gif"
  },
  {
    html_id: "add-guest",
    task: "When the user hits enter while focus is on the input (i.e. while the cursor is blinking), the content of the input should be added to the list below.",
    link: "gifs/guestList.gif"
  },
  {
    html_id: "add-item-bonus",
    task: "<u>Adventure Mode </u><br/><br/>Each added item should come with a remove button. Clicking that button should remove the item from the list.",
    link: "gifs/add-to-list-and-delete.gif"
  },

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
