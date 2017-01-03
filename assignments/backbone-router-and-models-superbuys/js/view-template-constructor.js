var ViewTemplateConstructor = function(domElSelector , htmlTemplFunction){
   this.domEl = domElSelector

   this.buildHTMLTemplate = htmlTemplFunction

   this.render = function(data){
      var tgtEl = document.querySelector(this.domEl)
      tgtEl.innerHTML = this.buildHTMLTemplate(data)
   }
}
