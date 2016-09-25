#!/bin/bash

mkdir $1
cd $1
touch index.html
mkdir scss css js images
touch ./scss/main.scss ./js/app.js ./css/styles.css

cat <<EOT >> index.html
<html>
   <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>PROJECT</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css">
      <link rel="stylesheet" href="./css/styles.css">
   </head>
   <body>
      <div id="app-container"></div>
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
   max-width: 960px;
}
EOT

# Normalize?
mkdir ./scss/imports
curl https://necolas.github.io/normalize.css/4.1.1/normalize.css > ./scss/imports/_normalize.scss
