#Solrod Strand Agency - Page Mockup with CSS Framework

###Description
Solrod Strand is a digital product and advisory agency that serves indie producers that are trying to increase their distribution and fanbase. They offer highly customizable web and mobile solutions for creators who want control over their brand, image, content, and message. 

The company is looking to rebuild the Team Profiles section of their company website to be on-brand with the rest of their site. The designer has created a mockup of the Team Profiles site and has provided image assets and a color palette. 

###Objectives
####Learning Objectives
After completing this assignment you should:
- Understand how CSS frameworks help us quickly prototype common components on the page.
- Understand how CSS frameworks and custom CSS work together.
- More experience with layout and positioning.

####Performance Objectives
After completing this assignment you should be able to
- Create a static web page that links to a CSS stylesheet
- Use a CSS framework (like Bootstrap) to create the layout
- Use SCSS to make CSS coding more robust.
- Create a mobile-first layout.


##Deliverables 
- an `index.html` file with the content
- a `style.css` file inside a `css` directory whose CSS are processed and compiling from `style.scss` in a `scss` directory
- a site that displays responsively as shown below 
- a Github repository and a live static site on Github Pages. 
- **Note:** you will only be using 12 of the images from the example shown above
<hr>

##Mockups
###Full Screen
**NOTE:** make sure you reduce this to one column for the mobile view
![full screen](https://github.com/t3patterson/TIY-2016-Q3/blob/master/assignments/06-css-frameworks-solrod-strandd/mockup/solrod-landing-full-layout.png)

<hr>
###Mobile Menu

![full](https://github.com/t3patterson/TIY-2016-Q3/blob/master/assignments/mockup/solrod-mobile-menu.gif)

<hr>
##Additional
####To configure SCSS
1. Use the `gen-project.sh` script to create the files and folders for the project. 
2. Create an `scss` directory and create a `style.scss` file within. 
3. From the project's root directory, run: 
  ```
  sass --watch scss/styles.scss:css
  ```
4. Do your CSS in the `/scss/style.scss` file.
5. Open a new tab in your terminal (one tab for watching, another tab for navigating and operating on your file system)

####CSS Configuration

**NOTE: At the top of your stylesheet make sure you apply the style rule `box-sizing: border-box` to *all* elements**

```css
* {
    box-sizing: border-box
}
```