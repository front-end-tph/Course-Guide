#!/bin/bash

# User's Notes
# For creating a intstructor-notes.md file with an evaluation summary.
#
# Usage:
#    - eval-submission «score» «assignment-name» «file-w/evaluation(defaults to index.html)»
#
# Assumptions:
#    - contains `__INSTRUCTOR-EVALUATION__ «...evaluation message...» __END__` in index.html
#    - contains `__INSTRUCTOR-COMMENT__` throughout the project for comments
#    - dir structure ends in .../«last»-«first»_«github»/«assignment-repo-name»
#
#    - for output:
#      + ~/Dropbox/TIY-Private/student-assessments/«$COHORT»/«last»-«first»_«github»

# Includes:
#    -
#    -
#    -
#    -
#    -

if [ "$1" == "-help" ] || [ "$#" -lt 2 ]; then
    echo ""
    echo "HOW TO USE"
    echo "------------"
    echo "eval-submission «1» «2» «3-optional»"
    echo ""
    echo "1: assignment-score"
    echo "2: assignment-name"
    echo "3_OPTIONAL: file that contains evaluation message (index.html is default)"
    echo ""
    exit
fi


EVAL_FILE=$3

if [ -z "$3" ]; then
    EVAL_FILE="./index.html"
fi

echo "Instructor Evaluation File is sourcing from: $EVAL_FILE"


ASSIGNMENT_REPO=$(echo `pwd` | sed -e 's/\/.*\///g')
STUDENT_DIR=$(dirname `pwd` | sed -e 's/\/.*\///g' )
EVALUATION=$(sed -n '/EVALUATION__/,/__END$/ { /__INSTRUCTOR-EVALUATION__/d; /__END__/d; p; }' $EVAL_FILE)

ISSUES=$(grep --exclude-dir={dist,node_modules,bower_components} -nRH "__INSTRUCTOR-COMMENT__" *| cut -d":" -f1-2)

if (($1 > 2)) ; then
  STATUS='Complete'
else
  STATUS='Incomplete'
fi     # $String is null.

case "$1" in
  0)
    RUBRIC_EXPLANATION="No recognizable attempt put forth."
  ;;
  1)
    RUBRIC_EXPLANATION="Not yet meeting exptactions for assignment."
    ;;
  2)
    RUBRIC_EXPLANATION="Approaching expectations for assignment."
    ;;
  3)
    RUBRIC_EXPLANATION="Met expectations for assignment."
    ;;
  4)
    RUBRIC_EXPLANATION="Exceeded expectations for assignment."
    ;;
esac

IN="$STUDENT_DIR"
arrSTUDENT_DIR=(${STUDENT_DIR//_/ })

cat <<EOT > instructor-notes.md
# Instructor Notes: \`$2\`
|||
|---|---|
|**Student**| ${arrSTUDENT_DIR[0]} |
|**Github Profile**| ${arrSTUDENT_DIR[1]} |
|**Repo**| https://github.com/${arrSTUDENT_DIR[1]}/$ASSIGNMENT_REPO/ |
|**Review Date**|$(date +%F)|


### Status
-------------
> **$1 / 4**

<mark>**$STATUS</mark> :** *$RUBRIC_EXPLANATION*


### Instructor Evaluation
--------------
$EVALUATION


### Instructor Code Comments
--------------
\`\`\`
$ISSUES
\`\`\`

EOT


# COPIES Assessment and sends to:
#
#    ~/Dropbox/TIY-Private/student-assessments/$COHORT/$STUDENT_DIR

COHORT="TIY-Q3-2016"
USR=$(whoami)
echo ".........."
echo "Sending assessment to: "
echo "  ~/Dropbox/TIY-Private/student-assessments/$COHORT/$STUDENT_DIR"
PATH_TO_STUDENT_ASSESSMENT_DIR="/Users/$USR/Dropbox/TIY-Private/student-assessments/$COHORT/$STUDENT_DIR"
cp ./instructor-notes.md $PATH_TO_STUDENT_ASSESSMENT_DIR
mv $PATH_TO_STUDENT_ASSESSMENT_DIR/instructor-notes.md $PATH_TO_STUDENT_ASSESSMENT_DIR/assessment-$2.md
