# Responsive Design with SCSS - Momofuku 

###Description
Momofuku means lucky peach in Japanese. It is also a restaurant holding group with critically acclaimed and widely popular restaurants in various world class cities. For each restaurant, the company partners with a renowned chefs who support local farmers, sustainable food systems, and innovative cuisines.

They are contracting a frontend devloper to build an attractive landing page that underscores their existing branding efforts, targeting a simple elegance and a minimalist aesthetic. 	

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
- Integrate SCSS into your workflow
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

## Normal Mode

### Mobile Version
![mobile-mockup](./mockups/demo-mobile.gif)

### Medium Screen and Desktop Version
![tablet-plus-mockup](./mockups/demo-tablet-plus.gif)


<hr>
## Additional
#### Designer notes
+ Font for the project is **Hind** from Google fonts. Make sure you load the google font in your `<head/>` *before* your `style.css` file:
  ```
  <link href="https://fonts.googleapis.com/css?family=Hind:600" rel="stylesheet">
  ```


###Setup
#### 1. Create the following directory structure
	```
	+ assignment-XX/
	|
	| - index.html
	|
	| - + css/
	|   | 
	|   | - styles.css
	|
	| - + scss/
	|   | 
	|   | - main.scss

	```

#### 2. Download the image files, move them into your project-directory, and unzip from your project-directory
  - [link to dowload image zip file](./images-momofuku.zip)
    - *Note: will likely end up in your `~/Downloads/` directory*


#### 3. Set Default Styles
At the top of your stylesheet make sure you apply the style rule `box-sizing: border-box` to *all* elements:

```css
* {
    box-sizing: border-box
}
```

#### 4. Configure `<head>` element of `index.html`
- `<meta>` tags for utf-8 charset and device-width for mobile viewing
- icon fonts + [google font](https://fonts.google.com/)
  - note: you will reference the google font in your css markup : `font-family: "Hind", "Futura", "sans-serif"`
```
<head>	
	  <meta charset="utf-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
	  <link href="https://fonts.googleapis.com/css?family=Hind:600" rel="stylesheet">
	  <link href="./css/styles.css" rel="stylesheet">
	<head>
<head>
```

#### 5. In Terminal, start your SCSS watcher
+ *IMPORTANT:* you can only execute the watch task runner from the root directory of your project.
  - Example: `cd ~/TIY/assignment-07`
```
scss ./scss/main.scss:./css/styles.css --watch
```
+ *NOTE*: You may want to have 2 tabs open : 1 for the watcher and 1 to navigate around your terminal. You can open a new tab in your terminal w/ `⌘T`.


## Adventure Mode (optional)
+ Use the `:hover` pseudo class to apply hover-styles to the elements shown below 
   + *Note*: When you hover over the images it should reveal additional content.




##Epic Mode(optional)

+ Create a mobile menu for the that shows and hides additional navigation elements through a dropdown when the user clicks the toggleable navigation option.