#Day 2 - HTML + CSS Layouts + Git

**Learning objectives:**

*(1) Students get more practice with the terminal*

*(2) Students learn difference between block, inline-block, & inline elements*

*(3) Students learn difference between margin + padding*

*(4) Students learn how to use id and class selectors*

*(5) Students start committing to git*

<hr/>
###Pre Lesson-- Terminal Review & Practice __ INCOMPLETE

**Scenario**: I have a zipped file in my `~/Downloads` that I need to unzip and organize.

#####Student Task -- Terminal Warmup

Presetup-- Drop zipped file in slack
[Zipped File for Exercise](https://github.com/t3patterson/TIY-2016-Q3/blob/master/assignments/preclass-terminal-review/terminal-warmup-my-media-zipped.zip)

```
1. navigate to Downloads
2. move the `terminal-warmup-my-media-zipped` to ./TIY/warmups with `mv` and `mkdir`
3. navigate to `./TIY/warmups` 
4. unzip the file: `unzip terminal-warmup-my-media-zipped`
5. Organize the files/folders accordingly :
  - major categories: *Music*, *Movie*, *Books*
  - in Music : by artist
6. Delete the junk folder
```

<hr>

###Git - An Overview and Explanation
*The idea behind git - version control*

Work Area --> Staging Area ---> Commit

1. `git init` to create repo
2. `git add .`
3. `git commit -m "« 

#####Student Task -- Create a Repo for Warmup & Previous Homework

<hr/>

### Intro to CSS - Create CSS to style HTML-Rothko assignment
####(A) Review The HTML
```html
  <h1><em>Mark Rothko</em></h1>
  <h2>September 20, 2015–January 24, 2016</h2>

  <img alt="river oaks district" src="./assets/mark-rothko-seagram-mural.jpg">

  <p>Experience one of the 20th century's most iconic artists. The MFAH is the sole U.S. venue to present <strong>Mark Rothko: A Retrospective</strong>, featuring more than 60 paintings that trace the development of Rothko's signature syle. Discover the humanism and beauty of each painting and see how Rothko became one of the foremost figures of the Abstract Expressionist movement</p>

  <h3>Details and Programs: <a href="https://www.mfah.org/exhibitions/mark-rothko-retrospective/">mfah.org/rothko</a></h3>

  <hr>

  <p>The exhibition is organized by the National Gallery of Art, Washington and the Museum of Fine Arts, Houston. This exhibition is supported by an indemnity from the Federal Council on the Arts and the Humanities.</p>
  
  <p>Lead corporate sponsor: <img alt="river oaks district" src="./assets/river-oaks-district-img.png"></p>

  <p>Generous funding is provided by Sotheby's; Norton Rose Fulbright; Oliver Wyman; the Robert Lehman Foundation; and Mr and Mrs. Rodney Margolis.</p>

  <p>Official Media Partner:<img alt="river oaks district" src="./assets/houston-public-media-logo.jpg"></p>

   <p>Mark Rothko, Untitled (Seagram Mural Sketch), 1959. National Gallery of Art, Washington. Copyright 1998 by Kate Rothko Prizel and Christopher Rothko
  </p>

  <img alt="mfa logo" src="./assets/mfah-logo-sm.png">
```

####(B) The CSS
What needs to be styled?
 - Fonts
 - Spacing
 - Image sizes
 - Width of Container

(0) Wire up `<link href="./css/styles.css" rel="stylesheet" type="text/css">`

(1) Style the `h2` -- what needs to change? 
(change to red, change font size, change font family, change spacing)

(2) Let's observe the syntax: `h2 { `
- selector
- curly braces
- a series of    `«style property» : «value» ;`

(3) Create a **wrapper div** with and give it an `id`.

(4) go through and add styles

(5)  **Explain CSS classes** : not ideal to target tags; used to group elements for styles

add 'fine-print' class to the copyright text

add 'sponsor-inline' class to the  *river oaks district* image and the 
*Houston Public Media* image.

create a div with a class of "featured-work" and show  `.featured-work img` **descendant selectors**

<hr/> 
### CSS Box Model -- border,margin,padding + block, inline & inline-block elements


###Homework: 

Web Components Exercises