#!/bin/bash
if [ "$#" -lt 1 ]; then
    echo "Please Give a Project Name"
    exit
fi

mkdir $1
cd $1
touch index.html
mkdir scss css js images
mkdir ./css/lib
mkdir ./css/fonts
mkdir ./js/lib

touch ./scss/main.scss ./js/app.js ./css/styles.css

# Install Bootstrap
curl https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css > ./css/lib/bootstrap.min.css

# Normalize?
mkdir ./scss/imports
curl https://necolas.github.io/normalize.css/4.1.1/normalize.css > ./scss/imports/_normalize.scss

#Install FontAwesome + FontAwesomeFonts
curl https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css > ./css/lib/font-awesome.min.css

FONTS_ARRAY=(eot svg ttf woff woff2)

for font_ext in "${FONTS_ARRAY[@]}"
do
   echo downloading $font_ext
   curl https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/fonts/fontawesome-webfont.${font_ext}?raw=true > ./css/fonts/fontawesome-webfont.${font_ext}
done

#Install jquery
curl https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js > ./js/lib/jquery.min.js

#Install underscore
curl http://underscorejs.org/underscore-min.js > ./js/lib/underscore.min.js

#Install backbone
curl http://backbonejs.org/backbone-min.js > ./js/lib/backbone.min.js


cat <<EOT >> index.html
<html>
   <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>PROJECT</title>
      <!--<link rel="stylesheet" href="./css/lib/font-awesome.min.css"> -->
      <!-- <link rel="stylesheet" href="./css/lib/bootstrap.min.css" > -->
      <link rel="stylesheet" href="./css/styles.css">
   </head>
   <body>
      <div id="app-container">
         <h1>YOLO</h1>
      </div>
      <script src="./js/lib/jquery.min.js"></script>
      <script src="./js/lib/underscore.min.js"></script>
      <script src="./js/lib/backbone.min.js"></script>
      <script src="./js/app.js"></script>
   </body>
</html>
EOT

cat <<EOT >> ./scss/main.scss
@import "./imports/_normalize.scss";

*{ box-sizing: border-box }
img {
   width: 100%;
   display: block;
}

#app-container{
}
EOT

cat <<EOT >> ./js/app.js
console.log('wired up!')
console.log($)
console.log(_)
console.log(Backbone)
EOT
