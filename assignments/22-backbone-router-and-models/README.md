# Basic CRUD Application

## Objectives

After completing this assignment, you should be able to:

* Breakdown a simple sequence of procedural steps into a series of statements in JS
* Use Backbone Router to listen to the hash and render different UI's
* Use Backbone Models + Collections to fetch data
* Successfully render data to the page in a formatted layout


## Details

### Instructions
1. Clone this repository
2. *All* data is feteched from: `https://www.googleapis.com/books/v1/volumes?q=subject:«subject-name»`. Examples:
  - https://www.googleapis.com/books/v1/volumes?q=subject:mystery
  - https://www.googleapis.com/books/v1/volumes?q=subject:fiction

### Deliverables
* A page that dynamically fetches and renders data based on information in the hash route

### Requirements

* An application that uses Backbone Collections to fetch JSON data from the [Google Books API](https://developers.google.com/books/docs/v1/using) using AJAX requests.
* An application that shows requests data from different URL endpoints depending on what is in the hash-route

## Normal Mode

Create a simple application that fetches data from the Google Books API. It should have buttons for navigating the various endpoints. The routes should be as follows:
  - `#books/«genearl-category»/«sub-category»`
  - `#books/«general-category»`
  - `""` (home route)

## Explorer Mode
Add a search feature.

##Adventure Mode
Add the UI logic for breadcrumbs and a sidebar based on the results.
