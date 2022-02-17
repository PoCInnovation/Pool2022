# PoC Software Pool - Day 04 - Authentification

✔ Authenticate your users.

✔ Master authentification methods.

✔ Connect with Google.

## Introduction

Authentication has many purpose in this world of servers and API.<br>
Manage users' account, control activities and limit privileges required to
know the user identity.

Many system exist today, depending on the usage and the consumers : Api key,
sessions, OAuth and so on, you can multiply the way to fit with your product
and give the best possible user experience.

This subject will treat about common ways to authenticate a user and their
usages.

## Step 0 - Setup

Today, we'll get back to our Gin servers ! You can either start using the code you've written yesterday or start a brand-new project. It's up to you, you now know how do it :rocket:
> In both cases, code inside the `day04/Auth` folder.

- At the repository's root, create a `day04` and a `Auth` folders.

```shell
mkdir -p day04 && mkdir -p day04/Auth
```

## Step 1 - Sessions

### Concept

A session is a way of handling user authentication.
You'll store the data of connected users in the backend.
The server is responsible for sending a cookie to the client, which will allow him to authenticate whenever he makes a request.
If the cookie's data are the same as the one stored in the session, it means the user is authenticated.

### Practise

In order to set up this, you'll have to :

- Add a packaged able to handle Gin's sessions: `go get -u github.com/gin-contrib/sessions`
- Create a `User` struct which mocks a simple database, stored in your RAM

```go
type User struct {
  Email     string
  Password  string
}

Users := []User{}
```

- Create a **POST** route `/signup-session`
    - Takes a body, containing the user's `email` and `password`
    - Registers the user in the users variable
    - Sends back a cookie containing the signed body previously received
    - Whenever there's no message
        - Set the status as 400
        - Send back `Bad Request`

- Create a **POST** route `/signin-session`
    - Takes a body, containing the user's `email` and `password`
    - If the credentials match, sends back a `cookie` containing the signed body previously received
  - Whenever there's no message or when the credentials do not match
      - Set the status as 400
      - Send back `Bad Request`

- Create a **GET** route `/me-session`
    - If the headers contains a `cookie`
        - Sends back the authenticated user's data if it exists in the database 
        - Otherwise, sends back the status 401 and the `Unauthorized` error message
    - If there's no cookie given
        - Set the status as 403
        - Send back `Forbidden`

> :warning: Do forget to use `StatusCode` from the `http` package

## Step 2 - JWT, ou JSON Web Token

### Concept

JSON Web Token are used to share security token between entities, it can be
user or a service.<br>
It's a signed electronic signature to verify consumer's identity. It's common
to use [HMAC](https://en.wikipedia.org/wiki/HMAC) or [RSA](https://en.wikipedia.org/wiki/RSA_(cryptosystem)) to sign tokens.<br>
Those token can be store in cookies, but they can also be sent in a header.

A JWT (JSON Web Token) is composed of 3 parts : `Header`, `Payload` and `Signature`.<br>
For more information about JWT, go to [jwt.io](https://jwt.io/introduction/). You can also use a [debugger](https://jwt.io/#debugger-io) to visualize the different parts of a jwt.

The classic workflow for JWT authentication is :
1. You authenticate yourself with your credential (username, password, etc...)
2. API will sign those credentials with a secret key
3. API send back the token to the user
4. The client put the token to authenticate him in the header

### Practice

Let's create an authentication system with JWT.

To do so:
- Add a package tout generate the JWT : `go get -u github.com/dgrijalva/jwt-go`
- Create the structure `UserJWT` wich mocks a simple database, stored in your RAM

```go
type UserJWT struct {
  Email     string
  Password  string
}

var UsersJWT := UserJWT[]{}
```

- Create a route **POST** `/signup-jwt`
  - Takes a body, containing the user's `email` and `password`
  - Registers the user inside the object `userJWT`
  - Returns a token storing the received signed body
  - Whenever there's no message
    - Set the status as 400
    - Send back `Bad Request`

- Create a function that receive a token and compare in the database if the passwords match, returning a bool.

- Create a route **POST** `/signin-jwt`
  - Takes a body, containing the user's `email` and `password`
  - If the credentials match, returns a token storing the signed body
  - Whenever there's no message or that the credentials don't match
    - Set the status as 400
    - Send back `Bad Request`

- Create a route **GET** `/me-jwt`
  - If the header stors a token
    - Returns the authentificated user informations if it exists
    - Returns the status `401` and the message `Unauthorized` in the other case
  - If there is no given token
    - Returns the status `403` and the message `Forbidden`

## Step 3 - OAuth2 et Google

### Concept

[OAuth 2.0](https://oauth.net/2/) is a powerful authentication framework
to use trustworthy service to manage the authentication for you.

You have certainly already meet the button "_Login with Google_" or
"_Login with GitHub_" and you wanted to register on a website.<br>
This is exactly what you are going to create.

In sort, you will use an external service to authenticate users.

The workflow is quite complex but common for any kind of service you want
to use to create your OAuth 2.0 authentication :
- You create an OAuth application in the service you want to use (Google,
Facebook, Twitter, GitHub, Microsoft...)
- You define a redirection URL that will redirect the user to your website
after he successfully connected to the service
- From your server, retrieve from this url an authentication token
- Server can use this token to retrieve user's information and execute
action on the service.

Indeed, the user is warned about which permissions you require when he
logs him in the service.<br>
As well, the token is linked to the application, if a user log himself
in two different application, both application will have a different token.

### Practise

We will use google for this exercise and passport to simplify the process:

- Create an application with google on the [developers console](https://console.developers.google.com/)
> You will need to set the callback url which you will do in the following steps

- Add `oauth2` to the dependences: `go get -u golang.org/x/oauth2`
> **Take a moment to read the [documentation](https://pkg.go.dev/golang.org/x/oauth2/google)**.

- Create an object `userOAuth` wich mocks a simple database, stored in your RAM

```go
type UserOAuth struct {
  DisplayName   string
  GoogleId      string
}

var UsersOAuth := UserOAuth[]{}
```

- Create the needed routes to handle a google login
> First, follow the documentation.\
> Then if you're in trouble, read this [tutorial](https://medium.com/@hfogelberg/the-black-magic-of-oauth-in-golang-part-1-3cef05c28dde).

- Once you have retrieved the id of the connected user, save it in the db and return a JWT like in exercise 2 containing this id

:warning: If the user's id already exists in db, you must return its information rather than create a new user with the same id each time !

- Create a route **GET** `/me-oauth`
  - If the header stors a token
    - Returns the user's `displayName` if it exists
    - Returns the status `401` and the message `Unauthorized` in the other case
  - If there is no given token
    - Returns the status `403` and the message `Forbidden`

## Bonus

Since you now master several way of authentication, you can try to
improve your current API.

Here's some ideas...

### Link

OAuth is powerful because you do not have to take care of user authentication,
but sometimes you want to manage it yourself, you can add a feature
to link a Google account with an account created on the API.

### GitHub, Facebook, ...

Implemente the authentification with other sites, such as [GitHub](https://sharmarajdaksh.github.io/blog/github-oauth-with-go), Facebook, ...

### Persistent database

You can use a real database to stock your users

> Made with :heart: by PoC
