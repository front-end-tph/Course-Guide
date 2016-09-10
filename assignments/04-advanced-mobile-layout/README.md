#CSS Advanced - Responsive Layouts, Targeted Positioning, CSS Pseudo-Selectors

##Description
Simple & Beautiful is an archive of interesting works combined from several artists' feeds. We are tasked with the assignment of building a responsive, static site on mobile, mid-sized, and large sized screens.

<hr>
##Objectives

###Learning Objectives

After completing this assignment, you should be able to create a responsive layout *and* responsive components in HTML and CSS. You should also be able to reproduce the faithful representation of a design.

##Performance Objectives

You should:
- use media-queries and inline-block for aligning columns
- use fluid widths (%) on columns so that they dynamically adjust to screen width
- use CSS selectors to target HTML classes for shared styles
- be mindful of margin and padding and when/where to use them
- be mindful of typography
- utilize `:hover` to toggle an overlay-div which contains the a work's explanation.
- utilize `:checked` to toggle the display of the menu in the nav bar
- make the following components change styles based on view-width:
    + the navbar styles (note the alignment of and left border on 'Filter')
    + the 'Filter' menu (note the alignment of text)
    + the footer (note the fixed positioning on wider screens and note the difference in layout of the elements inside it) 
- create a *link within the page* to scroll to the top when the user clicks the `^` element at the bottom of the page

##Deliverables 
- an `index.html` file with the content
- a `style.css` file with the styles 
- a site that has a responsive layout 
  - 1 column on mobile (< 768px)
  - multi-columns on tablet and bigger (> 768px)
- a Github repository and a live static site on Github Pages. 
- **Note:** you will only be using 12 of the images from the example shown above
<hr>

##From the Designer
###The mobile layout
![mobile](https://github.com/t3patterson/TIY-2016-Q3/blob/master/assignments/04-advanced-mobile-layout/responsive-mobile-screen.gif)

<hr>
###The full-screen layout
![full](https://github.com/t3patterson/TIY-2016-Q3/blob/master/assignments/04-advanced-mobile-layout/responsive-full-screen.gif)

<hr>
##Additional

The **copywriter's text** and **associated image filenames** can be found [here](https://github.com/t3patterson/TIY-2016-Q3/blob/master/assignments/04-advanced-mobile-layout/sb-copy.txt).

The **image assets** can be found [here](https://github.com/t3patterson/TIY-2016-Q3/tree/master/assignments/04-advanced-mobile-layout/assets). 

**NOTE: At the top of your stylesheet make sure you apply the style rule `box-sizing: border-box` to *all* elements**

```css
* {
    box-sizing: border-box
}
```

Use the `gen-project.sh` script to create the files and folders for the project. 

The font stack for the project is: Helvetica Neue, Helvetica, sans-serif