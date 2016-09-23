#CSS Framework

###Description
Room.me is a company that offers a service of connecting potential roommates based on interests, user preferences, and lifestyle. The company is expanding their user base, and pairings are determined using a proprietary matching algorithm. We are looking to rebuild a slightly enhanced version their current landing page.

###Objectives
####Learning Objectives
After completing this assignment you should:
- Understand how CSS frameworks help us quickly prototype common components on the page.
- Understand how CSS frameworks and custom CSS styles work together.
- More experience with layout and positioning.

####Performance Objectives
After completing this assignment you should be able to
- Create a static web page that links to a CSS stylesheet
- Use a CSS framework (i.e. Bootstrap) to create the layout
- Use SCSS to make CSS coding quicker and easier.
- Create a mobile-first layout.


##Deliverables
- an `index.html` file with the content
- a `style.css` file inside a `css` directory whose CSS are processed and compiling from `main.scss` in a `scss` directory
- a site that displays responsively as shown below
- a Github repository and a live static site on Github Pages.
- **Note:** the mobile menu doesn't have to be toggle-able

<hr>

##Mockups

###Mobile
[link to mobile mockup](https://github.com/TIY-Charleston-Front-End-Engineering/Course-Guide/blob/master/assignments/07-css-frameworks-room-me/mockups/room-me-mockup-mobile.png)
<hr/>

###Full Screen
[link to full-screen mockup](https://github.com/TIY-Charleston-Front-End-Engineering/Course-Guide/blob/master/assignments/07-css-frameworks-room-me/mockups/room-me-mockup-tablet-plus.png)


<hr>
##Additional
####Designer notes
- the general body-font is Google Font: _Source Sans Pro_
- make sure to add the *Featured Rooms* section at the bottom.


####Image Assets
[link to zip file](https://github.com/TIY-Charleston-Front-End-Engineering/Course-Guide/blob/master/assignments/06-css-frameworks-solrod-strandd/image-assets.zip)
<small>(you will have to download from github and move it to your project directory)</small>

####Make sure you include Bootstrap and fontawesome in your `<head/>` *before* your `style.css` file
```html
<head>
      ...<!--  your title, meta tags, etc. -->
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css">
      <link rel="stylesheet" href="./css/styles.css">
</head>
```

####To configure SCSS
1. Use the `gen-scss-project` script to create the files and folders for the project.
2. Use the `watch-scss` command in the project's root to compile the scss to css as you make changes watcher


**NOTE: At the top of your stylesheet make sure you apply the style rule `box-sizing: border-box` to *all* elements**

```css
* {
    box-sizing: border-box
}
```

##Adventurer Mode
