# nodejs-crud-app-with-db
Zuri NodeJS Track Task 3

## API Documentation
**API is hosted at:** https://ancient-castle-80560.herokuapp.com/

### Available Routes and Verbs 

> GET: **/api/interns**
> GET: **/api/intern/:id**
> POST: **/api/intern/:id**
> PUT: **/api/intern/:id**
> DELETE: **/api/intern/:id**

An error message is returned for any other route

1. #### GET: /api/interns
```
- Gets all interns from the database
- If no intern is found in the database, it returns a "No Intern Found!" message
- If there are interns in the database, a message and data of all interns are returned
```
> <https://ancient-castle-80560.herokuapp.com/api/interns>


2. #### GET: /api/interns/:id
```
- Gets an intern from the database by his/her unique id
- If intern with the specified id is not found, an error message is returned
- If intern with the specified id is found, a success message and intern's data are returned
```
For example:
> <https://ancient-castle-80560.herokuapp.com/api/interns/609a74d1389e310015bdce05>


3. #### POST: /api/interns
```
- Creates an intern
- Returns an error message if the Model Schema Requirements (name, email and country)
are not met. The name, email and country values are required, required to be string values
and should be of 100 characters max
- If Model Schema Requirements are met, the intern is created. A success message
and the created intern's data are returned
```


4. #### PUT: /api/interns/:id
```
- Updates data about an intern with unique id
- If intern with the specified id does not exist, it returns an error message
- If intern with the specified id exist, its data is updated. After update,
a message and intern's old data are returned
```
``` https://ancient-castle-80560.herokuapp.com/api/interns/609a74d1389e310015bdce05```


4. #### DELETE: /api/interns/:id
```
- Deletes an intern with unique id
- If intern with the specified does not exist, it returns an error message
- If intern with the specified id exist, that intern is then deleted.
After being deleted, a message and the deleted intern's  data are returned
```
