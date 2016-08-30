##Day 1

###The terminal & your file system
*Learning Goal -- know how to navigate the file system, inspect folders, make directories, create files, delete directories/files*

###Lesson Plan -- The terminal -- Part 1:
(1) I want you to open Finder & go to the home directory (Shift + `CMD` + H)

(2) Open the terminal and go to the home directory. How do you know? Checkout the location with `pwd`. Home directory is `/Users/«you»`

(3) We are going to create a folder called `TIY` with `mkdir`

(4) `cd` inside `TIY`

(5) Inside `TIY` mkdir `class-notes`.  Then `ls`.
  -- note make sure you always use `-` when naming files with spaces in the name because otherwise you have to escape those spaces with `\`.

(6) Now `mkdir assignments explorations docs samples` --- this will create two directories

(7) NOTICE the structure: `cd «arg1»` , `mkdir «arg1» «arg2» ... ` in the terminal, we have COMMANDS & ARGUMENTS to navigate the file system, execute tasks, execute programs 

(8) So how do we reference one directory up our tree? `cd ..` -- 

(9) So far we've been creating DIRECTORIES, but many time we want to create files. How do we know the differenct between files and extensions in our terminal?  Directories are for storing things, and files are to be *read*, *written to* and *executed*. Files typically have an extension. What are some common extensions?

(10) For creating files we have the `touch` command:  `touch my-notes.txt` -- creates an empty file. 

(11) We can remove files: `rm my-notes.txt`. and folders `rm ./docs` ---- no wait `rm -rf ./docs`

NOTE: Your life will be easier the sooner you learn to tab-out file names & directores.

###Student Activity -- The Terminal -- Task 1
1. Create a new directory: terminal-sandbox
2. Inside `/terminal-sandbox` create `instructions.txt` and `about.txt` file and 3 directores: `user-data`, `current`, `archive`
3. create `data-2014.csv`, `data-2015.csv` in `/archive` 
4. create `data-2016.csv`, in `current`
5. create `steve.txt`, `shana.txt`, `stephanie.txt`, `samantha.txt`, `samir.txt`
6. remove the `/archive` directory
7. remove the `.txt` files that start with `st` in the `/user-data` directory


###Lesson Plan -- The terminal -- Part 2:
There are some additional commands, and you can use them as you get acquainted. Becoming familiar with the terminal is strange for awhile but eventually it becomes 2nd nature.

#####Other Common Commands
1. Copy with `cp`
2. Paste/rename with `mv`
3. input information into files: `echo "something to the file" > «filename.ext»`
4. show file contents `cat «filename.ext»`

#####Not only do we execute commands on our local file system but we can also run programs from our terminal. -- e.g. 
- `vim` as a text editor 
- `curl` for transferring data over http   
- `brew` for installing applications 
- `zip` for zipping up files




###Student Activity -- The Terminal -- Task 2
Create a shell script.

#####Common Unix Commands
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



