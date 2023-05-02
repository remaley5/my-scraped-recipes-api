Tutorials:
[medium postgresql jwt react](https://medium.com/@rachealkuranchie/node-js-authentication-with-postgresql-sequelize-and-express-js-20ae773da4c9)
[GitHub bezkoder node js jwt authentication postgresql](https://github.com/bezkoder/node-js-jwt-authentication-postgresql)
[NodeJS REST API with Express and PostgreSQL](https://medium.com/bb-tutorials-and-thoughts/how-to-build-nodejs-rest-api-with-express-and-postgresql-674d96d5cb8f)

## Testing:

Start Server:

```
npm run start
```

Go to Postman:

```
http://localhost:3030/recipes/
```

POST:

```
[
    {
        "id": 1,
        "title": "test",
        "url": "test",
        "createdAt": "2023-04-06T03:56:16.424Z",
        "updatedAt": "2023-04-06T03:56:16.424Z"
    }
]
```

<!--
add error handling to user
add userid onto recipe model

fe
using local storage for refresh - clear with page close
connect to db
refactor with context -->
