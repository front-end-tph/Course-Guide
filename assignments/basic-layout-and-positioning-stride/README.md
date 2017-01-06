#Stride - Basic Layout + Element Positioning with CSS 

###Description
Stride is a start-up looking to build a web platform to connect roommates of similar interests and compatible lifestyles. They are looking to build a web application similar to Airbnb, but that is based on successful long-term roommate arrangements. They have assembled a backend team to create the business logic, database, and API for the mobile application, and they are now looking for a front-end developer to build a sample static page of the designer's mockup.

###Objectives
####Learning Objectives
After completing this assignment you should:
- Recognize sensible nesting of HTML elements
- Use CSS classes for styling elements on the page.
- Have familiarity with the syntax for common CSS properties like `font-family`, `font-size`, `color`, `background`, `margin`, `padding`, `border`, `border-radius`, `text-align`, and `line-height`.
- Understand the different kinds of display types for an HTML:
  + `block`
  + `inline-block`
  + `inline`
- Understand the CSS box-model with respect to `border`, `padding`, `margin`
- Understand how to use CSS positioning for precise placement of elements
  + `fixed`
  + `absolute`
  + `relative`


####Performance Objectives
To receive a passing grade on this assignment, you must
- Create a static web page that links to a `.css` stylesheet
- Create a faithful representation of the design-mockup with respect to fonts, colors + spacing.
- Have content displayed in multiple columns where shown per the mockup.
- Utilize the `position` property to manipulate the positioning of: 
  + the heart in the upper-right corner of the room-listing example
  + the price in bottom-left corner of the room-listing example 
  + the arrow tab for the *Got Questions* chat box.

##Deliverables
- an `index.html` file with the content
- a `style.css` file
- a repository on github titled `basic-layout-and-positioning-stride`

<hr>

##Mockups



<hr>
##Additional
####Designer notes


####Image Assets
[link to zip file](#)

####Make sure you load the google font in your `<head/>` *before* your `style.css` file
```html
<head>
      ...<!--  your title, meta tags, etc. -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css">
      <link rel="stylesheet" href="./css/styles.css">
</head>
```

####Configuration
**NOTE: At the top of your stylesheet make sure you apply the style rule `box-sizing: border-box` to *all* elements**

```css
* {
    box-sizing: border-box
}
```

##Adventure Mode
+ Use the `:hover` pseudo class to apply hover-styles to the buttons
+ Use the `:focus` pseudo class to apply styles to the border of the input box when it is selected


##Epic Mode

Use media-queries (CSS `@media` rule) so that the site works on mobile devices and at the full wide-screen desktop.

