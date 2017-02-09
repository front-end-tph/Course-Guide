# Github Clone

## Objectives

After completing this assignment, you should be able to:

* Demonstrate understanding of functions, loops/array
* Be able to breakdown a simple process of procedural steps into a series of statements in JS
* Demonstrate use of Promises and AJAX methods
* Demonstrate ability to update DOM elements and their attributes/innerHTML via JS
* Create an event listener for an input element.  
* Utilize routing and a controllerRouter() function to simplify your navigation code.

## Details

### Setup Instructions

```sh
# cd into ~/TIY/assignments folder
# git clone https://github.com/t3tools/simple-build-es6-scss assignment-XX
# cd into you assignment folder
# remove the repo's origin 
# hub create to create the repo on Github
# then setup your project files (i.e. run `npm install`)
```

### Deliverables

* A repository on github
* Site styles written in SCSS in the `src/`  and compiled to the dist
* JS written in `src/` and compiled to the dist folder

### Requirements

* No JS errors in the browser
* All functions and code should work according to the following description.


## Normal Mode


#### Part 1
Recreate the HTML and CSS for the Github tab page (https://github.com/matthiasak?tab=repositories) as your design, and using two AJAX requests/Promises, pull your own profile information from Github:

- Your profile: `https://api.github.com/users/«username»`
- Your repos: `https://api.github.com/users/«username»/repos`

After loading data from the Github API, write at least the following information to the DOM:

- name
- blog
- location
- email
- an `<img>` with its source as the avatar_url
- html_url
- for each repo owned by your user, list that repo in a `<ul>`

#### Part 2
You will also need to include an `<input>` tag on your page that will allow users to search for a particular GitHub account. Once the user presses enter in the `<input>` tag, your app should change the hash, which will trigger a new request to the GitHub server, and display information for the corresponding user.

#### Example
![demo pic](./demos/github-example.png)

<hr/>
### API Notes
Docs: https://developer.github.com/v3/

1. [Get an API key](https://github.com/settings/tokens/new)
  - Click 'Generate Token', leave all options *unselected*
2. Copy the access token
  - You won't be able to see it again from github!
3. Make sure you can fetch a user from the API with your token
  - https://api.github.com/users/t3patterson?access_token=«your-access-token»

### Roadmap to Success
1. Successfully fetch user profile data + repo data for your github profile in your `app.js`

2. In the promise-handler, render a minimal amount of data to the page. Note: you may want to use `$.when(...)` to resolve multiple promises.

3. Create a simple layout in HTML + CSS for the layout per the mockup -- initially build it with static hard-coded HTML to make sure that the elements are mostly in place.
 
4. Create a function that builds the html dynamically and returns an output string. To build the html-string, the function should accept 2 arguments, one argument for the user profile data, another argument for the repo data. The function should execute inside the promise-handler when the repo + user data has returned and it put the html-string inside `div id='app-container'`. 

5. Create the `controllerRouter()` function. The function should get the current value in the `window.location.hash`. 
  + If there is a value for a github user in the hash, it should execute the fetches for the profile data and repo data, 
  + if there is no value in the hash it should fetch + return the default github profile (i.e. your profile). 

  When the data returns, do the same as the previous step (i.e. creating an html-string from the profile + repo data that you will put as innerHTML to `app-container`) 

6. Add an eventListener that listens for the `hashchange` event type on the `window`. The callback function should be the `controllerRouter` -- the controllerRouter which will check what's in the hash, fetch the user profile/repo info, and render to the page.

7. After rendering the html to the page, put an event listener on the `<input>` tag in the navbar. It should listen for the enter-key and update the hash with whatever value is in the input -- if you've done steps 5 & 6, the user's data in the `<input>` should fetch + render to the page.  

8. Fine tune your styles.