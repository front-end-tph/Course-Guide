##Day 1

###The terminal & your file system
*Learning Goal -- know how to navigate the file system, inspect folders, make directories, create files, delete directories/files*

Lesson Plan -- The terminal:
1. I want you to open Finder & go to the home directory (Shift + `CMD` + H)

2. Open the terminal and go to the home directory. How do you know? Checkout the location with `pwd`. Home directory is `/Users/«you»`

3. We are going to create a folder called `TIY` with `mkdir`

4. `cd` inside `TIY`

5. Inside `TIY` mkdir `class-notes`.  Then `ls`.
  -- note make sure you always use `-` when naming files with spaces in the name because otherwise you have to escape those spaces with `\`.

6. Now `mkdir assignments explorations ` --- this will create two directories

7. NOTICE the structure: `cd «arg1»` , `mkdir «arg1» «arg2» ... ` in the terminal, we have COMMANDS & ARGUMENTS to navigate the file system, execute tasks, execute programs 

8. 


#####Unix Commands
`cd`
`pwd`
`ls`
`mkdir`
`rmdir`
`rm` / `rm -rf`
`touch`
`echo «x» > «filename».«ext»`
`clear`
`cp`
`mv`

#####Navigation
`..`
`.`
`/`
`~`

###Task : Create a gen-project tool
INPUT
`$ bash gen-project.sh`

1. Creates a new directory for a project
2. Creates index.html at root directory of new directory
3. Creates *js* and *css* folders inside root directory
4. Creates a *styles.css* inside *css* directory
5. Creates a *app.js* inside *js* directory



