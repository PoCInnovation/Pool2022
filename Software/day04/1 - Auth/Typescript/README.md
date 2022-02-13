# PoC Software Pool 2022 - Day 04 - Authentification

**Day purposes**

:heavy_check_mark: Authenticate users.

:heavy_check_mark: Master several authentication method.

:heavy_check_mark: Discover OAuth.

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

For this subject, we will return to our express servers. You can use the 
API you coded yesterday or go initialize a new empty server. It's up to you,
you now know how do it :rocket:
> In both cases, code inside the `day04/Auth` folder.

- At the repository's root, create a `day04` and a `Auth` folders.

```shell
mkdir -p day04 && mkdir -p day04/Auth
```

As well, you should use [Postman](https://www.postman.com) or
[Insomnia](https://insomnia.rest) to test your endpoints.

## Step 1 - Cookies

### Concept

Cookies are website relative data stored into your browser. These information
are then sent to the server on each request.<br>
The server will then catch these information to user's identity, improve
performance or adapt his behavior.

You can store any kind of data in cookies : signed id, JSON object etc...<br>
However, pay attention to security, cookies are not secure by default and
ìn a production application, it's importe to take time to 
[secure cookies](https://resources.infosecinstitute.com/topic/securing-cookies-httponly-secure-flags/)

Here we will use [cookies in express](https://expressjs.com/fr/api.html#res.cookie)
to figure out which user is sending a request to our server.

### Practise

####  Installation

Let's first install required dependencies and 
[apply cookie-parser](https://www.npmjs.com/package/cookie-parser)
to your express server.

```shell
npm install cookie-parser @types/cookie-parser
```

#### Store data

Create a file `utils.ts` to export a `User` type interface that
will represent the type of our future ephemeral database.

```ts
interface User {
	email:    string;
	password: string;
}
```

:bulb: To win time, the database will be a simple array stored in RAM.

If it's not already done, create a folder `endoints` in `src`. This is
where you will put all your endpoints related to cookies.

Now create a file `cookies.ts` and initialize your ephemeral database.

```ts
let users: User[] = [];
```

#### Endpoints

It's time to create endpoints!

Still in `cookies.ts` (or in another file if you want), you will
create 3 endpoints

##### Register

Create an endpoint `/cookies/register` with a resolver on method `POST`.

The resolver must take as `body` parameter : 

```json
{
  "email": "<email>",
  "password": "<password>"
}
```

It will extract these information from `body` and add it to the
`users` array.<br>
Then it should return an `httpOnly` cookie containing the user's email.

If there is no `body`, return `Bad Request` with status `400`. 

##### Login

Create an endpoint `/cookies/login` with a resolver on method `POST`.

The resolver must take as `body` parameter :

```json
{
  "email": "<email>",
  "password": "<password>"
}
```

It will extract information from `body` and check if there is a match in
the `users` array.<br>
If identifier matches, it should return an `httpOnly` cookie containing the user's email.

If there is no `body`, return `Bad Request` with status `400`.

##### Cookie

Create an endpoint `/cookies/me` with a resolver on method `GET`.

If a cookie is present, return information related to the authenticated user.<br>
If no user is found, return `Unauthorized` with status `401`.

If no cookies found, return `Forbidden` with status `403`.

## Step 2 - JSON Web Token

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

### Practise

Let's create an authentication system with JWT.

#### Installation

Use the array `users` from the previous step to store users and download
[JWT](https://www.npmjs.com/package/jsonwebtoken) dependency.

```shell
npm install jsonwebtoken @types/jsonwebtoken
```

You can also create a file `jwt.ts` with another ephemeral database.

#### Register

Create an endpoint `/jwt/register` with a resolver on method `POST`.

The resolver must take as `body` parameter :

```json
{
  "email": "<email>",
  "password": "<password>"
}
```

It will extract these information from `body` and add it to the
`users` array.<br>
Then it should return a `JWT token` containing the user's email.

If there is no `body`, return `Bad Request` with status `400`.

#### Login

Create an endpoint `/jwt/login` with a resolver on method `POST`.

The resolver must take as `body` parameter :

```json
{
  "email": "<email>",
  "password": "<password>"
}
```

It will extract information from `body` and check if there is a match in
the `users` array.<br>
If identifier matches, it should return a `JWT token` containing the user's email.

If there is no `body`, return `Bad Request` with status `400`.

#### Token

Create an endpoint `/jwt/me` with a resolver on method `GET`.

If a token is present in the header `Authorization` with the format 
`Bearer ${TOKEN}`, return information related to the authenticated user.<br>
If no user is found, return `Unauthorized` with status `401`.

If no token found, return `Forbidden` with status `403`.

## Step 3 - Hash password

At this point, users can authenticate themselves through email and password,
but it's stored as plain text.<br>
Anyone with reading access to `users` (or a hypothetical database) will
be able to read the password of every user. That's a real problem and
users can't trust a platform who do not keep his data in security.

To gain trust, we will [hash](https://en.wikipedia.org/wiki/Hash_function)
password, this way, nobody, even us, will be able to read the password.

To do so, let's install the [Bcrypt](https://www.npmjs.com/package/bcrypt),
a powerful and straight-forward hash dependency.

```shell
npm install bcrypt @types/bcrypt
```

Now you just have to update your endpoints `register` to save a hashed
password and your endpoints `login` to compare the given password
with the stored one.

## Step 4 - OAuth2 with Google

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

Here we will use [passport](https://github.com/jaredhanson/passport)
to simplify the workflow.

Let's install required dependencies.

```shell
npm install passport passport-google-oauth20 @types/passport @types/passport-google-oauth20
```

You will also need to create an application on 
[Google developers console](https://console.developers.google.com/) and
configure your **callback url** that you will write during next steps.


Indeed, create a file `OAuth.ts` to code your endpoints.

### Storage

There his no password or email logic when dealing with OAuth authentication,
instead you can store the user identifier.

Let's define a new interface for our ephemeral storage.

```ts
interface UserOAuth {
  displayName: string;
  googleId: string;
}
```

And indeed a new variable to store data

```ts
let userOAuth: UserOAuth[] = [];
```

### Strategy

Passport works with [Strategy](https://www.passportjs.org/packages/),
so you will need here to set up the [GoogleStrategy](https://www.passportjs.org/packages/passport-google-oauth20/).

You should use the application identifier, secret code and the callback url
and the function called after user being redirected to your API.

### Endpoints

You will need to create two endpoints to use 
[Google with passport](http://www.passportjs.org/packages/passport-google-oauth20/).

#### Redirect

Create an endpoint that will redirect user to the Google authentication service.

#### Callback

Create an endpoint used by Google to redirect user after authentication.
You should figure out that it will be your **callback url**.<br>
Thanks passport, you will access information returned by Google,
you can store these information in your storage and return either a
cookie or a JWT to track the ID.

Indeed, if user already exist, you don't have to insert the user in
the database.

#### User

Create an endpoint `/oauth/me` with a handler on method `GET`.

If a JWT token or cookie is present, return the `displayName`
if the user is found in storage, either return `Unauthorized` with
status `401`.

If no cookie or JWT is found, return `Forbidden` with status `403`.

## Bonus

Since you now master several way of authentication, you can try to
improve your current API.

Here's some ideas...

### Link

OAuth is powerful because you do not have to take care of user authentication,
but sometimes you want to manage it yourself, you can add a feature
to link a Google account with an account created on the API.

### OAuth mania

Your API supports authentication with Google, let's add other services
like [Facebook](https://www.passportjs.org/packages/passport-facebook/) or 
[GitHub](https://www.passportjs.org/packages/passport-github2/).

You will see that thanks [passport](https://www.passportjs.org),
it's a piece of cake!

### Things get serious

You used an ephemeral storage through an in-memory array, you can use
your knowledge from the previous day to store user in it.

You can also set up a [Redis](https://medium.com/swlh/session-management-in-nodejs-using-redis-as-session-store-64186112aa9)
to safely store session.

## Additional resources

- [Create a 2FA system](https://codeburst.io/how-to-add-two-factor-authentication-with-node-js-and-express-7cad30aac4c)
- [Reset email workflow](https://medium.com/swlh/password-workflows-with-nodejs-on-aws-736e66cee71)
- [Store sensitive data in Vault](https://codersociety.com/blog/articles/hashicorp-vault-node)
- [Other authentication workflow](https://apiacademy.co/2021/04/the-most-common-api-authentication-methods/)