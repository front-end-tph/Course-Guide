# Convert 'Intro to API' Assignment to React Components

## Objectives
  * Get familiar with React JSX Syntax
  * Pass data into a React component and access it through `props`
  * Map over an array of objects and generate JSX components
  * Get an overall view of how React + Async fetches behave together.

## Instructions

* clone the **simple-server** repository
* `cd` into the project
* `git init`
* `git remote remove origin`
* hub create [repoName]
* convert your html strings to React components in your `./src/scripts/app.js` 

## Resources

 * Sunlight Foundation API: https://sunlightfoundation.com/api/

### Normal Mode

Retrieve data on all legislators, reproducing the page shown below as **React Components**: ![](https://raw.githubusercontent.com/TIY-Charleston-Front-End-Engineering/Course-Guide/master/assignments/18-intro-to-apis/static.png)

At a minimum, you should have two components: one for the `<HomeView/> and each congressperson's data in the `<ProfileView/> 


### Master Mode

Create another component for a text input. If the user enters a ZIP code and types enter, your app should respond to the event and retrieve data on local legislators. See gif below: 

![](https://raw.githubusercontent.com/TIY-Charleston-Front-End-Engineering/Course-Guide/master/assignments/18-intro-to-apis/adventure_mode.gif)

You will have to study how synthetic events in react work to implement this functionality.


### Deliverables

A github repository and a link to a live site on heroku showcasing your work.