#Simple API for Backend 
###Task Description
Set up a backend API that will read data from + write data to a backend database.

You will create an API where you can save and retrieve product information. We will want to store information about each product's:
- name (string, required)
- description (string)
- imgLink(string)
- price (number, required)
- warranty (boolean, default: false)


###Guidelines

You'll need to:
  - (Server side) Define a new schema in `/db/schema.js`, and export it.
  - (Server side) Import the schema in `routes/apiRouter.js`
  - (Server side) Write some routes in `routes/apiRouter.js` to handle GET and POST requests, find records in the database, and send those records back in the body of the response. The template code in simple-db includes example routes to "get many", "get one", "write one", "update one", and "delete one." All you really need to do for this initial exercise is "get many" and "write one." 
  - **NOTE** all routes on the `apiRouter` will be located at `/api/«route-name»`
  
###Checking Your Work
- (Terminal) in a separate tabstart Mongo database in terminal: `mongod`
- (Terminal) Any time you make changes to `/db/schema.js` or `routes/apiRouter.js`

- (Postman) ensure that GET requests to `http://localhost:3000/api/products` return all the records
- (Postman) ensure that POST requests to `http://localhost:3000/api/products` create a new record.
  - Note: for the POST request to work you will have to submit the data in the request body and specify that the Content-Type header be 'application/json'. 
 

