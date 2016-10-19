# Basic CRUD Application

## Objectives

After completing this assignment, you should be able to:

* Breakdown a simple process of procedural steps into a series of statements in JS
* Demonstrate use of Promises and AJAX methods
* Use a router-controller to read the hash, respond to hash-changes and render different HTML templates
* Utilize routing and a controllerRouter() function to simplify your navigation code.
* Run a local java server that serves `.html`, `.js`, and `.css` files out of the `/public` directory
* Save data to a backend server
* Fetch data from a backend server

## Details

### Instructions

1. Download jdk-8
2. Backend student creates a public repo on github and adds group members as collaborators
3. Group members accept invitation as collaborator.
4. Backend student creates a JAR and pushes it to the repo.
5. Frontend student clones the repo and runs `gen-project-scss public` at the root directory to setup the front-end code in a `/public` folder
  - delete '/public' if its already there
6. Run the JAR file with the command `java -jar «project-name».jar`
  - go to `http://localhost:4567` and make sure that you see 'YOLO'
7. Commit + Push to remote repository
8. To update local repo with changes on the remote master: 
   - `git pull origin master`

### Deliverables

* An application that creates + reads JSON data using AJAX requests. There should be a user interface for creating the data and displaying it.

### Requirements

* A jar file at the root of the project folder
* The frontend `gen-project-scss` project-build in the project's `/public` folder
* A repository on github with commits from all group members
* No JS errors in the browser
* All functions and code should work according to the following description.

## Normal Mode

Create a simple application that has a user interface for reading and writing data to a backend server + database.

The simplest example of this application would be tracking books. Each book would have an author, a title, a year published.

## Explorer Mode
Create an application that can edit + delete the data. The client and server code will have to be synchronized with additional routes to accomplish this.

##Adventure Mode
Add an authentication system that creates a record + session for a new user. Only allow create/update/delete operations if a user is authenticated with a current session. The server will have to prevent certain routes from executing if a non-logged in user tries to create/update/delete data and the client U.I. should provide feedback that the action is forbidden.
