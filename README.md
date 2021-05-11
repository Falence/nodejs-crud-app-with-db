# nodejs-crud-app-with-db
Zuri NodeJS Track Task 3

## API Documentation
**API is hosted at:** https://ancient-castle-80560.herokuapp.com/

### Available Routes and Verbs 
```
GET: /api/interns
GET: /api/intern/:id
POST: /api/intern/:id
PUT: /api/intern/:id
DELETE: /api/intern/:id
```
An error message is returned for any other route

1. #### GET: /api/interns
```
- Gets all interns from the database
- If no intern is found in the database, it returns a "No Intern Found!" message
- If interns found in the database, it returns a message and data of all interns
```
> <https://ancient-castle-80560.herokuapp.com/api/interns>


2. #### GET: /api/interns/:id
```
- Gets an intern from the database by his/her unique id
- If intern is not found in the database, it returns a message
- If intern is found, it returns a message and intern data
```
For example:
> <https://ancient-castle-80560.herokuapp.com/api/interns/609a74d1389e310015bdce05>


3. #### POST: /api/interns
```
- Creates an intern
- Returns an error message if the Model Schema Requirements (name, email and country)
are not met
- If Model Schema Requirements are met, the intern is created. It returns a message
and the created intern's data
```


4. #### PUT: /api/interns/:id
```
- Updates data of an intern with unique id
- If intern does not exist in the database, it returns an error message
- If intern with the specified id exist, its data is updated. After update,
a message and intern's old data are returned
```
For example:
> <https://ancient-castle-80560.herokuapp.com/api/interns/609a74d1389e310015bdce05>


4. #### DELETE: /api/interns/:id
```
- Deletes an intern with unique id
- If intern does not exist in the database, it returns an error message
- If intern with the specified id exist, that intern is then deleted.
After deleted, a message and the deleted intern's  data are returned
```
