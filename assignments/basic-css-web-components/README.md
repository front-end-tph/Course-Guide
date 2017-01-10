#Assignment 2 - Basic CSS - Recreating Web Components
##Instructions
Use what you've learned of CSS styles and properties to recreate the site components shown below. You likely will need to use CSS properties like:

- `margin`, `padding`, `border`
- `font-family`, `font-size`, `font-weight`, `color`
- `width`, `height`
- `background-color`
- `text-align`
- `display: block` and `display: inline-block`

##Setup
```sh
cd ~/TIY/assignments
mkdir assignment-02
cd assignment-02
curl https://raw.githubusercontent.com/TIY-Charleston-Front-End-Engineering/Course-Guide/master/assignments/basic-css-web-components/assignment-files.zip > assignment-files.zip
unzip assignment-02
```

*NOTE:* You will likely want to include `*{box-sizing: border-box}` at the top of your stylesheet

##Normal Mode

###Simple Article Layout
![nice typeface](https://raw.githubusercontent.com/t3patterson/TIY-2016-Q3/master/assignments/basic-css-web-components/example-components/nice-typeface.png)

#####Design Specs

```
fonts: Georgia & Geneva
line-height: 1.25
background-color: FBF9F1
link color: 77A8D2
```

#####Hint

+ use a `<span>` tag and give it a class attribute to apply targeted styles to the 'Monotype' text

<hr/>
###Menu List
![menu list](https://raw.githubusercontent.com/t3patterson/TIY-2016-Q3/master/assignments/basic-css-web-components/example-components/menu-list.png)

#####*Design Specs*
```
fonts: Avenir
color: `#66CC99`
```


<hr/>
###Icon Set
![inline block icon set](./example-components/inline-icon-set.png)

#####*Design Specs*
```
fonts: sans-serif
images:
  facebook-icon-bw.png
  twitter-icon-bw.png
  stumbleit-icon-bw.png
  googleplus-icon-bw.png
  linkedin-icon-bw.png
```

##### Hint
- to link to the images in the `src` attribute, you may have to go up a directory (`../`) and then traverse down into `/images` 

<hr/>
###Navigation Menu
![mini nav menu](https://raw.githubusercontent.com/t3patterson/TIY-2016-Q3/master/assignments/basic-css-web-components/example-components/mini-nav-menu.png)

#####*Design Specs*
```
font: Futura
link background color: rgb(205,92,92)
```

##### Hint
- target only the top + bottom of the element with 'Currently:#summer'  with the `border-top` and `border-bottom` css-properties
- use `display: inline-block` to stack the nav-options next to each other.
- use an `<input type="text"/>` tag to create the 'Search Site' input field where a user could potentially enter information.

<hr/>

## Explorer Mode

### Simple Multi Column Layout
![multi column layout](https://raw.githubusercontent.com/t3patterson/TIY-2016-Q3/master/assignments/basic-css-web-components/example-components/basic-column-layout.png)

#####*Design Specs*
```
font: Helvetica Neue
top-bar color: #004
link color: `#DE5233`
```
##### Hint
- use `display: inline-block` to stack the columns next to each other and give each column a width of 25%.


<hr/>
## Adventurer Mode

###Complex Multi Column Layout
![layout](https://raw.githubusercontent.com/t3patterson/TIY-2016-Q3/master/assignments/basic-css-web-components/example-components/extended-layout.png)

#####*Design Specs*
```
font: Avenir
link color: `#ff5a5f`
images:
  random-user1.png
```

