#Solrod Strand Agency - Page Mockup with CSS Framework

###Description
Solrod Strand is a digital product and advisory agency that serves indie producers that are trying to increase their distribution and fanbase. They offer highly customizable web and mobile solutions for creators who want control over their brand, image, content, and message.

The company is looking to rebuild the Team Profiles section of their company website to be on-brand with the rest of their site. The designer has created a mockup of the Team Profiles site and has provided image assets and a color palette.

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
[link to mobile mockup](./mockup/solrod-landing-mobile-layout.png)
<hr/>

###Full Screen
[link to full-screen mockup](./mockup/solrod-landing-full-layout.png)


<hr>
##Additional
####Designer notes
- ignore the bottom right circle w/ the triangle on the profile-picture mockup
- the general body-font is _sans-serif_
- the fancy header fonts are  _Palatino_

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

Create a mobile CSS navigation menu that toggles between showing and hidden when clicked. [Link to example.](https://github.com/TIY-Charleston-Front-End-Engineering/Course-Guide/blob/master/assignments/06-css-frameworks-solrod-strandd/mockup/solrod-mobile-menu.gif)
