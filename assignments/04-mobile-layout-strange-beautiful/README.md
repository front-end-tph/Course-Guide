#CSS Advanced - Responsive Layouts, Targeted Positioning, CSS Pseudo-Selectors

##Description
Simple & Beautiful is an archive of interesting works combined from several artists' feeds. We are tasked with the assignment of building a responsive, static site on mobile, mid-sized, and large-sized screens.

<hr>
##Objectives

###Learning Objectives

After completing this assignment, you should be able to create a responsive, mobile-first layout.

###Performance Objectives

You should:
- use media-queries and the inline-block technique for aligning columns
- use fluid widths (%) on columns so that they dynamically adjust to screen width
- use CSS selectors to target HTML classes for shared styles
- use make use of SCSS: variables, mixins, and nesting
- be mindful of margin and padding and when/where to use them

##Deliverables 
- an `index.html` file with the content
- a `main.scss` in a `/scss` folder that compiles to `style.scss` in a `styles.css`.
- a site that has a responsive layout for
  - mobile (< 768px)
  - tablet (768px - 1024px)
  - desktop (> 1024px)
- a Github repository and a live static site on Github Pages. 

<hr>

##From the Designer
###The mobile layout
![mobile]()

<hr>
###The tablet layout
![tablet]()

<hr>
###The full-screen layout
![full]()

<hr>
##Additional

####
1. Create an `scss` directory and create a `main.scss` file within. 
2. From the project's root directory, run: 
  ```
  sass --watch scss/main.scss:css/styles.css
  ```
3. Do your styles in the `/scss/main.scss` file, ideally taking advantage of  SCSS.
4. Open a new tab in your terminal (one tab for watching, another tab for navigating and operating on your file system)
5. `ctrl` + `C` will stop the SCSS watcher


####Apply the style rule `box-sizing: border-box` to *all* elements

```css
* {
    box-sizing: border-box
}
```

The font stack for the project is: Helvetica Neue, Helvetica, sans-serif

