

var fetchAndRender = function(qry, view, categoryName){
   console.log('ice...')
   $.getJSON("https://www.googleapis.com/books/v1/volumes?maxResults=12&q="+qry)
      .then(function(d){
         view.render({category: categoryName, booksList: d.items})
      })
}


var AppRouter = Backbone.Router.extend({
   routes: {
      "category/:generalCat/:specificCat" : "showSubcategory",
      "category/:generalCat" : "showGeneralCategory",
      "": "showHome"
   },

   showHome: function(){
      console.log("hey")
      var categoryListings = [
         {catName: "Fiction" , subcatList: ['Drama','Literature','Mystery', 'Poetry','Romance'] },
         {catName: "Nonfiction" ,   subcatList: ['Biography', 'Business', 'Education', 'Health', 'Philosophy', 'Self-Help'] },
         {catName: "Miscellaneous" ,   subcatList: ['Cooking','Crafts','Espanol', 'Medicine'] },
      ]

      var homePageView = new ViewTemplateConstructor('.content-area', homePageTemplateFn)
      homePageView.render(categoryListings);

   },

   showGeneralCategory: function(generalCat){
      var booksSectionView = new ViewTemplateConstructor('.content-area', booksTemplateFn)
      fetchAndRender(generalCat, booksSectionView, subCat)
   },

   showSubcategory: function(generalCat, subCat){
      var booksSectionView = new ViewTemplateConstructor('.content-area', booksTemplateFn)
      fetchAndRender(subCat, booksSectionView, subCat)
   },

   initialize: function(){
      Backbone.history.start()
   }

   _parseHashToBreadCrumbs: function(){
      var routeArr = window.location.hash.slice(1).split('/')
      var breadcrumbHTML = '<ol class="breadcrumb">'

      var route = ''
      routeArr.forEach(function(hashVal, i){
         breadcrumbHTML += "<li class='active'>" + hashVal + '</li>'}
         route += '/'
         if(i === routeArr.length - 1){
            bigStr += "<li class='active'>" + hashVal + '</li>'
         } else {
            bigStr += "<li class='active'><a=href" + hashVal + '</li>'

         }
      })
      breadcrumbHTML += '</ol>'
   }
})

var booksContainer = document.querySelector('.books-container')

var app = new AppRouter()
