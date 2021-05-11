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

1. #### GET: /api/interns
```
- Gets all interns in the database
- If no intern is found in the database, it returns a message"
```
> <https://ancient-castle-80560.herokuapp.com/api/interns>


1. #### GET: /api/interns/:id
```
- Gets an intern from the database by his/her unique id
- If intern is not found in the database, it returns a message
- If intern is found, it returns a message and intern data
```
* For example:
> <https://ancient-castle-80560.herokuapp.com/api/interns/609a74d1389e310015bdce05>