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
- Gets all intern in the database
- If no intern is found in the database, it displays a "No Intern Found!" message
```
> <https://ancient-castle-80560.herokuapp.com/api/interns>