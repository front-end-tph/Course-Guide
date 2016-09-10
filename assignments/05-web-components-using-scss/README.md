#CSS - Responsive Web Components and CSS Techniques

##Description
Recreate the following web components
<hr>
##Objectives

###Learning Objectives

After completing this assignment, you should be more resourceful with creating responsive components in HTML and CSS. 

##Performance Objectives

You should:
- use media-queries and inline-block for aligning columns
- use fluid widths (%) on columns so that they dynamically adjust to screen width
- use CSS selectors to target HTML classes for shared styles
- be mindful of margin and padding and when/where to use them
- be mindful of typography
- utilize `:hover` and `:focus` pseudo classes
- load a font from Google Fonts
- load an icon from fontawesome

##Deliverables 
- an `index.html` file with the content
- a `style.css` file inside a `css` directory whose CSS are processed and compiling from `style.scss` in a `scss` directory
- a site that displays responsively as shown below
- a Github repository and a live static site on Github Pages. 
- **Note:** you will only be using 12 of the images from the example shown above
<hr>

##Assignments
###Normal Mode
**The responsive form**
![mobile](https://github.com/t3patterson/TIY-2016-Q3/blob/master/assignments/05-web-components-using-scss/05-responsive-forms.gif)

<hr>
###Adventure Mode
**The responsive timeline**
![full](https://github.com/t3patterson/TIY-2016-Q3/blob/master/assignments/05-web-components-using-scss/05-responsive-timeline.gif)

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