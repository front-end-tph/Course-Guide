#Stride - Basic Layout + Element Positioning with CSS 

###Description
Momofuku means lucky peach in Japanese. It is also a restaurant holding group with critically acclaimed and widely popular restaurants in various world class cities. For each restaurant, the company partners with a renowned chefs who support local farmers, sustainable food systems, and innovative  

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
- Load a font-family into your stylesheet from a CDN (google-fonts).
- Load a font-icon set into your stylesheet from a CDN. 
- Understand the CSS box-model with respect to `border`, `padding`, `margin`
- Understand how to use CSS positioning for precise placement of elements
  + `fixed`
  + `absolute`
  + `relative`
- Create a responsive website

####Performance Objectives
To receive a passing grade on this assignment, you must
- Create a static web page that links to a `.css` stylesheet
- Create a faithful representation of the design-mockup with respect to fonts, colors + spacing.
- Have content displayed in multiple columns where shown per the mockup.
- Utilize the `position` property to manipulate the positioning of: 
  + the fixed navbar on the left

##Deliverables
- an `index.html` file with the content
- a `style.css` file
- a repository on github titled `basic-layout-and-positioning-stride`

<hr>

##Mockups
![mockup](./mockups/stride-mockup-demo.gif)


<hr>
##Additional
####Designer notes
+ Font for the project is **Hind** from Google fonts. Make sure you load the google font in your `<head/>` *before* your `style.css` file:
  ```
  <link href="https://fonts.googleapis.com/css?family=Hind:600" rel="stylesheet">
  ```

####Image Assets
[link to zip file](./images.zip)

####Configuration
**NOTE: At the top of your stylesheet make sure you apply the style rule `box-sizing: border-box` to *all* elements**

```css
* {
    box-sizing: border-box
}
```

##Adventure Mode
+ Use the `:hover` pseudo class to apply hover-styles to the elements shown below 
   + *Note*: When you hover over the images it should reveal additional content.



##Epic Mode

+ Create a mobile menu for the that shows and hides additional navigation elements through a dropdown when the user clicks the toggleable navigation option.