## Objectives

- exercise control of CSS display types, positioning, animations
- reinforce concepts of layout and `display` types

### Learning Objectives

After completing this assignment, you should be able to create a responsive layout in HTML and CSS from scratch.

### Performance Objectives

After completing this assignment, you should be able to effectively:

  - create complex, multi-column layouts 
  - implement responsive design techniques so that your site looks great on a desktop machine, tablet, or phone
  - use pseudo-selectors to add UI interactions using *pure css*

## Requirements

- a working, publicly visible website with a public URL (i.e. on Github pages, with DivShot, on Heroku, etc)

## Your Mission

Recreate the following layout in HTML and CSS:

![tshirts.gif](https://tiy-learn-content.s3.amazonaws.com/988a985f-tshirts.gif)

### Normal Mode

  - PRIMARY
    - a multi-column layout that looks, structurally, the same as the layout shown in the gif.
    - a responsive layout. i.e., when the screen shrinks to tablet size, three columns should shrink to two. in phone size, all shirt boxes should stack in a single column. 

  - SECONDARY
    - use advanced css selectors to create an interactive UI that responds to hovers or click behavior by users. 

### Adventure Mode

When a user clicks on the rotation icon at the top-right corner of a t-shirt box, the image of the t-shirt(s? hint hint) should rotate, showing the back of the shirt. Clicking again should return the front. 
[Card flip](https://desandro.github.io/3dtransforms/docs/card-flip.html)

## Setup
1. Create a new project with `gen-project-scss`
2. Create images directory
3. CD into image directory
4. curl and unzip 
```
curl https://raw.githubusercontent.com/TIY-Charleston-Front-End-Engineering/Course-Guide/master/assignments/css-layout-positioning-animations-tshirts/image-files.zip > ./image-files.zip

unzip image-files.zip
```