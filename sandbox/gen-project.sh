mkdir $1
cd $1
touch index.html
mkdir css js
touch ./js/app.js ./css/styles.css

cat <<EOT >> index.html
<html>
  <head>
    <title>
      New Project
    </title>
    <link rel="stylesheet" type="text/css" href="./css/styles.css">
  </head>
  <body>
    <h1>New Project</h1>
    <script src="./js/app.js"></script>
  </body>
</html>
EOT