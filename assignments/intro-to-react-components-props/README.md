# Convert 'Intro to API' Assignment to React Components

## Objectives
  * Get familiar with React JSX Syntax
  * Pass data into a React component and access it through `props`
  * Map over an array of objects and generate JSX components
  * Get an overall view of how React + Async fetches behave together.

## Setup Instructions

1. `cd` into your `~/TIY/assignments` directory and clone [*webpack-simple-server*](https://github.com/t3tools/webpack-simple-server) repo into an `assignment-«XX»` project-directory

  ```sh
  git clone git@github.com:t3tools/webpack-simple-server.git assignment-xx
  ```

2. Install the project's dependencies from the `package.json`
  ```sh
  npm install
  ```

4. After installation completes, start the task runner and local webserver:
  + npm run go

5. Build the project per requirements.


## Resources

 * Sunlight Foundation API: https://sunlightfoundation.com/api/

### Normal Mode

Retrieve data on all legislators, reproducing the page shown below as **React Components**: ![](./static.png)

At a minimum, you should have two components: 
  - `<ProfileList/>` a container for the congress persons. Here, you will map over  array or data objects and return an array of React  components of each congressperson. 
  - `<SingleProfile/>` each congressperson's data in jsx/html


### Master Mode

Create another component for a text input. If the user enters a ZIP code and types enter, your app should respond to the event and retrieve data on local legislators.  See gif below: 

![img](./adventure_mode.gif)

You will have to study how synthetic events in react work to implement this functionality.


### Deliverables

A github repository and a link to a live site on heroku showcasing your work.