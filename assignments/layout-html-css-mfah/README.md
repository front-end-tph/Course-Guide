#CSS Intermediate - Creating Full Page Responsive Layouts

##Description
The Museum of Fine Arts Houston wants to create a static webpage that shows their architectural history and future projects.  

They have provided us with the copy as well as the images and logos. We will need to create a site that places that content on the page with the styles and layout that are shown in the mockups below.

<hr>
##Objectives
Create a site that has a multi-column layout.

###Learning Objectives

After completing this assignment, you should be able to create a multi-column layout in HTML and CSS and a faithful representation of a design.

##Performance Objectives

You should:
- use the inline-block technique for making the columns
- use fluid widths (%) on columns so that they dynamically adjust to screen width
- be mindful of margin and padding and when/where to use them
- be mindful of typography

##Deliverables
- an `index.html` file with the content
- a `style.css` file with the styles
- a Github repository and a live static site on Github Pages.

<hr/>
##Setup
1. In `~/TIY/assignments`, create a directory for this assignment (e.g. `assignment-05`).
2. `cd` into the new assignment directory and create your project files & folders:
  - `index.html`
  - `css/`
    - `style.css`
3. Download the images and unzip:
```
curl https://raw.githubusercontent.com/TIY-Charleston-Front-End-Engineering/Course-Guide/master/assignments/layout-html-css-mfah/image-files.zip > image-files.zip
unzip image-files.zip
```

<hr/>

##Normal Mode
Create a site based on the mockup as shown below.

###The full-screen layout
![full](https://github.com/t3patterson/TIY-2016-Q3/blob/master/assignments/layout-html-css-mfah/mfah-fullscreen.gif)

<hr>

##Adventurer Mode
Use media-queries to create a responsive site. The site should be one column on mobile screens (i.e. screen widths < 768px), and it should maintain the original layout on screen widths > 768px.

Also note that the search box at the bottom right becomes hidden on < 768px.

![mobile](https://raw.githubusercontent.com/t3patterson/TIY-2016-Q3/master/assignments/layout-html-css-mfah/mfah-mobile-layout-mockup.png)

<hr>

##Additional Information
#### Designer Specs
- The font stack for the project is: Helvetica Neue, Helvetica, sans-serif
- Blue fixed call-to-action in bottom-right background-color: #3A539B
- Anchor tag color: #3E7FBB.
- Red color: #DB4B38 


#### Copywriter's Text
The **copywriter's text** can be found [here](https://github.com/TIY-Charleston-Front-End-Engineering/Course-Guide/blob/master/assignments/layout-html-css-mfah/mfah-architecture-site-copy.txt).

#### Suggested
**NOTE: At the top of your stylesheet make sure you apply the style rule `box-sizing: border-box` to *all* elements**

```css
* {
    box-sizing: border-box
}
```

