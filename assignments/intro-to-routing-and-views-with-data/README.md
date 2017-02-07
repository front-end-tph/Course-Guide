#Intro to Routing and Views with Data

##Objectives

  * Effectively implement the promise pattern for fetching data asynchronously.
  * Format retrieved data into HTML
  * Primary objective is routing + fetching + rendering data to page. Styles are of secondary importance. 
  * Use `window.location.hash` and an event-listener on the `hashchange` event to implement client-side routing.
  * Implement UI-logic that changes the hash base on user interactions.


##Setup

* use the (simple-build-scss-scss)[https://github.com/t3tools/simple-build-es6-scss] tool to create a new web project. (Instructions in the link)
* `cd` into the project
* `npm install` to install project dependencies
* `npm start` to start the watcher
* import jQuery into your `app.js`
* hack away at your `app.js` to create the u.i. below.
* it is highly recommended that you use bootstrap for the grid and the table styles. 

##Resources
 * Iceland API Documentation: http://docs.apis.is/
    - no API key necessary
 
###Normal Mode

Implement hash routing to render the UI below:

![iceland-ui](./iceland-ui-demo.gif)

####Home Page
![iceland-home](./iceland-home.png)

####Concerts Page
![iceland-home](./iceland-concerts.png)

####Flights Page
![iceland-flights](./iceland-concerts.png)

####Carpools Page
![iceland-carpools](./iceland-concerts.png)


###Adventure Mode

Include a text input at the top of your page. If the user enters a ZIP code and types enter, your app should retrieve data on local legislators. See gif below: ![](./adventure_mode.gif)


###Master Mode

Reconfigure your api request so that the database only returns 10 requests at once. Add a "see more" button at the bottom of the page. If the user clicks this button, 10 additional congresspersons should be *appended* to the bottom of the list. The user should be able to click for more legislators repeatedly until they exhaust the database (there are 540 legislators total).

Note that for this feature you'll have to use the optional `per_page` and `page` parameters that can be sent with the request.