#CSS Basics - Creating Full Page Responsive Layouts

##Description
The Museum of Fine Arts Houston wants to create a static webpage that shows their architectural history and future projects.  

They have provided us with the copy as well as the images and logos. We will need to create a responsive site that places that content on the page with the styles and layout that are shown in the mockups below.

<hr>
##Objectives
Create a responsive layout.

###Learning Objectives

After completing this assignment, you should be able to create a responsive layout in HTML and CSS and a faithful representation of a design.

##Performance Objectives

You should:
- use media-queries and inline-block for aligning columns
- use fluid widths (%) on columns so that they dynamically adjust to screen width
- use CSS selectors to target HTML classes for shared styles
- be mindful of margin and padding and when/where to use them
- be mindful of typography

##Deliverables 
- an `index.html` file with the content
- a `style.css` file with the styles 
- a site that has a responsive layout 
  - 1 column on mobile (< 768px)
  - multi-columns on tablet and bigger (> 768px)
- a Github repository and a live static site on Github Pages. 

<hr>

##From the Designer
###The mobile layout
![mobile](https://raw.githubusercontent.com/t3patterson/TIY-2016-Q3/master/assignments/03-layout-html-css-mfah/mfah-mobile-layout-mockup.png)

<hr>
###The full-screen layout
![full](https://github.com/t3patterson/TIY-2016-Q3/blob/master/assignments/03-layout-html-css-mfah/mfah-fullscreen.gif)

<hr>
##Additional

The **copywriter's text** can be found [here](./mfah-architecture-site-copy.txt).

The **image assets** can be found [here](https://github.com/t3patterson/TIY-2016-Q3/tree/master/assignments/03-layout-html-css-mfah/assets). 

**NOTE: At the top of your stylesheet make sure you apply the style rule `box-sizing: border-box` to *all* elements**

```css
* {
    box-sizing: border-box
}
```

Use the `gen-project.sh` script to create the files and folders for the project. 

The font stack for the project is: Helvetica Neue, Helvetica, sans-serif