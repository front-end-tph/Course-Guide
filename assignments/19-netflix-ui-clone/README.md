#Intro-APIs

##Objectives

  * Read and explore the documentation of APIs
  * Effectively implement the promise pattern
  * Format retrieved data into HTML
  * Use a CSS Framework to organize layout.
  * Apply custom styles to the page.
  * Use hash routing
    - `window.addEventListener('hashchange', yourFunction)`
    - `window.addEventListener('hashchange', yourFunction)`

##Instructions

* use the `gen-project-scss` tool to create a new web project
* `cd` into the project
* `git init`
* hub create [repoName]
* include a script tag in your `index.html` that links to the jquery source code (make sure you put it *above* your own script)
* hack away at your `app.js` to create the patterns below!
* load the

##Resources

 * TV Maze API: http://www.tvmaze.com/api
 * jquery source code: https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js




###Normal Mode

Create the functionality of the page shown below using hash routing to render the two views inside `<div id="app-container">`.

When a user thumbnail image is clicked, it should trigger a hash change for with that user's name.

Once the hash changes, it should fetch **all** of the data-records for that user's shows in the array of `showIds` array. You will be fetching the data from [TV maze](http://www.tvmaze.com/api.

**Hint:** *You may have to make a request for each show to accomplish this*

![gif demo](./netflix-ui-assignment-demo.gif)


Here is the starting data:
```js
var userList = {
   matt: {username: "Matt", showIds: [170,169,175,318,76,270, 255]},
   ed: {username: "Ed", showIds: [5853,431,80,279,570,76,73,20540,83,17119]},
   michelle: {username: "Michelle", showIds: [83,576,735,73,749,170,112,80]},
   justin: {username: "Justin", showIds: [551,169,490,530,73,302, 547, 532]},
}
```



###Adventure Mode

Include a text input at the top of your page. If the user enters a ZIP code and types enter, your app should retrieve data on local legislators. See gif below: ![](./adventure_mode.gif)


###Master Mode

Reconfigure your api request so that the database only returns 10 requests at once. Add a "see more" button at the bottom of the page. If the user clicks this button, 10 additional congresspersons should be *appended* to the bottom of the list. The user should be able to click for more legislators repeatedly until they exhaust the database (there are 540 legislators total).

Note that for this feature you'll have to use the optional `per_page` and `page` parameters that can be sent with the request.

##Deliverables

A link to a live site on gh-pages showcasing your work.
