#!/bin/bash

#add this ....
if [ "$#" -lt 1 ]; then
    echo "Please Give a Project Name"
    exit
fi
# ...........

mkdir $1
cd $1
touch index.html
mkdir scss css js images
touch ./scss/main.scss ./js/app.js ./css/styles.css

# add <link> for bootstrap + fontawesome, add <script> at bottom of body
cat <<EOT >> index.html
<html>
   <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>PROJECT</title>
      <!--<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css"> -->
      <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"> -->
      <link rel="stylesheet" href="./css/styles.css">
   </head>
   <body>
      <div id="app-container">
         <h1>YOLO</h1>
      </div>
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

# Add console.log(script)
cat <<EOT >> ./js/app.js
console.log('wired up!')
EOT

mkdir ./scss/imports
curl https://necolas.github.io/normalize.css/4.1.1/normalize.css > ./scss/imports/_normalize.scss
