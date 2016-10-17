#Intro to Hash Routing - Netflix UI Clone

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

##Resources

 * TV Maze API: http://www.tvmaze.com/api
 * jquery source code: https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js




###Normal Mode

Create the functionality of the page shown below using hash routing to render the two views inside `<div id="app-container">`.

When a user thumbnail image is clicked, it should trigger a hash change for with that user's name.

Once the hash changes, it should fetch **all** of the data-records for that user's shows in the array of `showIds` array. You will be fetching the data from [TV maze](http://www.tvmaze.com/api.

**Hint:** *You may have to make a request for each show to accomplish this*

![gif demo](https://github.com/TIY-Charleston-Front-End-Engineering/Course-Guide/raw/master/assignments/19-netflix-ui-clone/netflix-ui-assignment-demo.gif)


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
Create a feature that when the user clicks on one of the images, a more full description appears along with the image in a header-div on the page. To complete this, you will need to be very deliberate with how you are manipulating the DOM and how you are adding event-listeners to the image-tiles at the bottom of the page.

![gif demo](https://github.com/TIY-Charleston-Front-End-Engineering/Course-Guide/blob/master/assignments/19-netflix-ui-clone/netflix-ui-adventure-mode.gif?raw=true)


##Deliverables

A link to a live site on gh-pages showcasing your work.
