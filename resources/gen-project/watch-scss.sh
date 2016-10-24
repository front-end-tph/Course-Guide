#!/bin/bash

SCSS_DIR="./scss"
SCSS_FILE="main.scss"

if [ ! -d "$SCSS_DIR" ]; then
  echo "[$SCSS_DIR] directory doesn't exist"
  exit 1
fi

if [ ! -f "$SCSS_DIR/$SCSS_FILE" ]; then
  echo "[$SCSS_FILE] file doesn't exist in $SCSS_DIR"
  exit 1
fi

scss "$SCSS_DIR/$SCSS_FILE:./css/styles.css" --watch
