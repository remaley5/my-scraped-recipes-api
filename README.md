Model constructs the tables for the db.
Repository interacts with the db using Sequelize & organizes data for the Route.
Services connect to 3rd parties.
Controller is where repository and service layers meet.

Tutorials:
[medium postgresql jwt react](https://medium.com/@rachealkuranchie/node-js-authentication-with-postgresql-sequelize-and-express-js-20ae773da4c9)
[GitHub bezkoder node js jwt authentication postgresql](https://github.com/bezkoder/node-js-jwt-authentication-postgresql)
[NodeJS REST API with Express and PostgreSQL](https://medium.com/bb-tutorials-and-thoughts/how-to-build-nodejs-rest-api-with-express-and-postgresql-674d96d5cb8f)

## Testing Routes:

Start Server:

```
npm run start
```

Go to Postman:

### User 

#### Sign up
route: POST: http://localhost:9000/users/signup

```json 
{
    "user": {
        "email": "test@test.com",
        "password" : "password",
        "username": "test"
    }
}
```

#### Log in
route: POST: http://localhost:9000/users/login

```json 
{
    "user": {
        "email": "test@test.com",
        "password" : "password",
    }
}
```



### Recipes
#### Create Recipe
route: POST: http://localhost:900/recipes/create
```json
{
    "recipe": {
        "title": "testing recipe", 
        "url": "test@test.com", 
        "ingredients" : "test ingredients",
        "steps": "test steps",
        "user_id": "1"
    }
}
```


#### Get Recipe For User
route: GET: http://localhost:900/recipes/create
```json
{
    "recipe": {
        "title": "testing recipe", 
        "url": "test@test.com", 
        "ingredients" : "test ingredients",
        "steps": "test steps",
        "user_id": "1"
    }
}
```
