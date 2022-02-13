# PoC Software Pool 2022 - Day 01 - Typescript

Welcome to the Software pool 2022! :rocket:

During this week, you will learn the base of the modern web programming, core
concept of frontend, backend, data storage... with a piece of devops.

**Day purposes**

:heavy_check_mark: Setup a NodeJS project.

:heavy_check_mark: Learn basics of Typescript.

:heavy_check_mark: Discover software development good practises.

:heavy_check_mark: Introduce you to design pattern, specially MVC.

:heavy_check_mark: Create an interactive application using your terminal.


## Introduction

### Requirements

Typescript run using a Javascript runtime called [NodeJS](https://nodejs.org/en/).
To begin, install NodeJS using [nvm](https://github.com/nvm-sh/nvm).

> It's really complex to manage Node version manually, nvm exist to help you
> manage it without any complexity.<br>
> :warning: If you meet any issue, call staff.

You can verify that node is correctly installed using the command below.

```shell
# Version must be at least >= 14
node -v
# v16.13.1
```

We will also need a package manager! Indeed, we will not code things that's
already working well, we will just import it.
To do so, we will use [npm](https://www.npmjs.com) for _node package manager_.

You should already have it installed on your computer if you used nvm.

```shell
# Get npm version
npm -v
# 8.1.2
```

### Why Typescript?

You certainly know [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript),
for several years, Javascript was very popular in Software world, mostly for
web development.<br>
At the beginning, it was created to make web page interactive. No you can
code almost everything in Javascript, even backend and standalone app thanks
NodeJS.

> If you can read that page, it's thanks Javascript that will transform
> markdown into human-readable text.

However, Javascript is not perfect and many cons come with it. His
weak type system, syntax liberty, undefined variable and the lack of rigor
can lead to disasters.

> An agnostic list of Javascript default is available [here](https://serokell.io/blog/why-typescript#typescript-vs.-javascript).

Typescript solves recurrent problems of Javascript :
- Typescript has a strong static type system.
- Auto-completion is much faster and accurate.
- Codebase are cleaner and better defined.
- Objet oriented programming is easier in Javascript than Typescript.
- Frameworks and applications much more resilient and maintainable.

:warning: Even if Typescript is better than Javascript, don't forget
that Typescript is still a superset of Javascript, NodeJS can only
understand Javascript so the final Typescript code will be transpiled in
Javascript.<br>
The benefit of Typescript mostly comes during development.

> If you are looking for a Typescript runtime, see [Deno](https://deno.land).

You've understood it, you'll learn both Typescript and Javascript.

### Warm up

To begin with Typescript, it's important to understand core concepts.

Start by reading [Typescript for new programmer](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html).

> You can also take few minute to read [Javascript building blocks](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks).

Take your time to read documentation, it will help you to understand what
you are doing when you will code.

It's also recommended reading more about [types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html),
[functions](https://www.typescriptlang.org/docs/handbook/2/functions.html) and [objects](https://www.typescriptlang.org/docs/handbook/2/objects.html).

You can also use the official [Typescript playground](https://www.typescriptlang.org/play)
to test and share piece of code.

Finally, it's important to use an IDE to help you.
We recommend you [VSCode](https://code.visualstudio.com) or [WebStorm](https://www.jetbrains.com/webstorm/).

> You can get a free Jetbrains license using your [school account](https://console.bocal.org/#/login).

## Step 0 - Setup

As usual, every exercices must be pushed to a git repository.<br>
To make it easier, we will use a GitHub classroom! Follow this [link](https://classroom.github.com/a/_7vegqir) to create your git repository.

You can then clone your repository.

```shell
git clone https://github.com/PoC-Community/software-pool-days-{YOUR-GITHUB-USERNAME}
```

For each day, we will create a new folder. Start with the `day01`.

```shell
mkdir -p day01
```

## Step 1 - Hello World

It's time to start coding! We will start with a simple `Hello World` program.

### Initialization

First, we must create a new NodeJS project and setup Typescript in.

You can create a NodeJS project with npm.

```shell
# Init your project
npm init
```

It will create a file named `package.json`. You can consider it as a `Makefile`.
It can store commands, but also register dependencies, version and special metadata.

Now, install Typescript in your project

```shell
npm install -D typescript ts-node @types/node
```

If you open your `package.json`, you should see them in `devDependencies`.

A new file named `package.lock` should also appear. Don't remove it, it's a
file that list all dependencies required by your installed dependencies.

> We use `-D` flag to specify that our dependencies are only for development
> purpose. Remember, our final code will be Javascript, so we don't need those
> dependencies in production.<br>
> See more about dependency management [here](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies).

:warning: Don't forget to create a [`.gitignore`](https://stackoverflow.com/questions/27850222/what-is-gitignore-exactly)
to do not push the `node-modules` directory.

### Say hello

You can now create a `src` directory and a file `helloWorld.ts` in it.

> Typescript files have `ts` extension while Javascript files have `js` extension.

In this file, create a function `helloWorld` that will [display](https://nodejs.org/api/console.html) 
`Hello World!` in your terminal.

Don't call it directly in this file, instead [export it](https://www.typescriptlang.org/docs/handbook/modules.html).

### Where's the main?

Now create a file `index.ts`, then import and call `helloWorld` in it.

> Typescript and Javascript doesn't have a concept of entrypoint like `C` or
> `Golang` have with the `main` function.<br>
> To keep code clean, it's common to create a `index.ts` that will be the
> entrypoint of your program.
> You can also use `index.ts` in subdirectories to aggregate imports.

### Start program

OK, now we will set up a `start` script to launch the project.

There is a section called `scripts` in your `package.json`. It's where you
can define commands to manage your projects. For example, you can run the code,
run your tests, deploy infrastructure or whatever required to manage your project.

Write a script `start` that will execute the command `ts-node src/index.ts`.

You can a script defined in your `package.json` using `npm run <script name>`.<br>
To run your program, tip `npm run start` in your terminal.

> Discover more about scripts [here](https://docs.npmjs.com/cli/v8/using-npm/scripts).

Congratulation! You have run your first Typescript program :rocket:

## Step 2 - Sort my numbers

Print stuff is great but a program is composed of logic. This is what we will
learn here.

Let's start with a `sort numbers`!

The goal is to : 
1. Sort a list in ascending order
2. Remove odd numbers.
3. Display the result.

This way, you'll be familiar with loop, conditions, arrays and methods.

### Sort like a pro

Still in `src`, create the file `getSortedEvenNumbers.ts`.

In it, create the function `getSortedEvenNumbers` :
- She takes an `array` of `number` as parameter.
- She returns a `string` composed of all even numbers in ascendant order split by a `-`.

> :bulb: You should have a look at methods [sort](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort),
> [filter](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
> and [join](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/join).

Update `src/index.ts` to call your function.

Here's an example for the following input: `[1, 0, 19, 17, 16, 8, 13, 24]`.

```text
0 - 8 - 16 - 24
```

You can try other combinations by manually change your code or, you can write **tests**.

### Test like a pro

It's really important to correctly test your code, a code not tested can lead
you to unpredictable bug and the time lost to debug it could be avoided by testing.

To do so, we will use [Jest](https://jestjs.io), the most popular Javascript testing tool.

Start by installing it

```shell
npm install -D jest ts-jest @jest/globals @types/jest
```

> Yes, it's again a development dependencies.

In your `package.json`, add those rules :
- `test`: `jest tests --env=node`
- `test:cov`: `jest --coverage tests --env=node`
- `test:watch`: `jest --watchAll tests --env=node`

> It's common to add a subcommand with `:` to change the behavior of a command.

Now we will [configure Jest](https://jestjs.io/docs/configuration).
Create the file `jest.config.js` with the following content 

```js
module.exports = {
	roots: ['<rootDir>'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	testMatch: ['**/tests/**/*.ts?()'],
	moduleFileExtensions: ['ts', 'js'],
};
```

Create the directory `tests`, this is where we will write our tests.

Inside, create the file `getSortedEvenNumbers.tests.ts`.

> Suffix files with `<file tested>.tests.ts` is a standard way to name your unit tests.

You can write a test with :
- Only positive numbers
- Only negative numbers
- Mixe numbers

<Details>
  <Summary>
  <strong>Example of test</strong>
  </Summary>

  Imagine you want to test a simple `sum` function :

  ```ts
  // sum.ts
  /**
  * Simply do an addition
  *
  * @param nbOne first number to compute
  * @param nbTwo second number to compute
  * @return result of nbOne + nbTwo
  */
  export default (nbOne: number, nbTwo: number): number => {
    return nbOne + nbTwo;
  };
  ```

  Your test file will be :

  ```ts
  // sum.tests.ts
  import { describe, expect, it } from '@jest/globals';
  
  import sum from '../src/sum';
  
  /**
   * Test sum function
   * Compute some number to verify if sum is working well
   */
  describe('Test sum function', () => {
    it('Simply 1 + 1', () => {
      expect(sum(1, 1)).toBe(2);
    });
  
    it('The answers of the Universe !', () => {
      const result: number = sum(21, 21);
      expect(result).toBe(42);
    });
  });
  ```
</Details>

Execute your tests with `npm run test`

```shell
npm run test

# Below an example of result
# PASS  tests/getSortedEvenNumbers.tests.ts
# Test getSortedEvenNumbers function
#   ✓ Case positive numbers (1 ms)
#   ✓ Case negative numbers (1 ms)
#   ✓ Case positive and negative numbers
# 
# Test Suites: 1 passed, 1 total
# Tests:       3 passed, 3 total
# Snapshots:   0 total
# Time:        1.637 s, estimated 2 s
```

:warning: Don't forget to add the directory `coverage` in your `.gitignore`.

## Step 3 - Hello asynchronicity

You should have understood Typescript core concept, now it's time for the
most important concept and unfortunately, the hardest : **asynchronicity**.

### Theory

> :warning: Take your time to read links given in this part before coding.
> If you do not understand asynchronicity, you will not be able to understand
> more complex program.

In Javascript/Typescript, your program is executed following an [event loop](https://www.digitalocean.com/community/tutorials/understanding-the-event-loop-callbacks-promises-and-async-await-in-javascript),
so NodeJS doesn't wait the end of a function before calling the next one.

It can be strange if you are used to `C` but in a NodeJS program, if you run
a function which takes 5 seconds to finish and another that takes 1 second.
You'll see the result of the second before the first one.

This fact raises a lot of constraints because sometime, you need to get the
result of a function to send it to another.

To solve this issue, the [callback](https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced)
system appeared, unfortunately it creates new problems and huge codebase met
the [callback hell](https://www.geeksforgeeks.org/what-is-callback-hell-in-node-js/).

A new concept then appear and definitely saved codebase from the hell : [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises).

Promises allow a function to be waited before calling the next function.
To use it, we use [async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function).

### Practice

Let's practice, you'll create a program that display `Hello` and the name
wrote by the user in the terminal.

To retrieve inputs from the terminal, we will need external dependencies.

Let's install them

```shell
# Install module prompts
npm install prompts

# Install types as development dependencies
npm install -D @types/prompts
```

Still in `src`, create the file `helloName.ts`.

In it, create the function `askName` :
- She does not take parameters
- She returns the username retrieves from the terminal.

> Read the doc of [prompts](https://www.npmjs.com/package/prompts) to read input from terminal.<br>
> Don't forget that your function must be waited, correctly type it with `async`.

You can then create the function `helloName` that will display `Hello ${name}!`
where `${name}` is the result of `askName`.

> To use `await`, your function muse be asynchrone.
> Don't forget to [handle errors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch).

To test your function, update `src/index.ts` to call `helloName`.

You should get the following result :

```text
✔ What is your name? … Slim Shady
Hello Slim Shady
```

> To see the effect of the asynchronicity, remove some `await` in your program.

## Step 4 - Clean Code

Before going through complex exercice, we are going to set up guardians of clean code.

There are two tools :
- [Eslint](https://eslint.org) set rules to make your code follow a standard.
It will help to ensure the codebase is clean and spot errors before you run your code.
- [Prettier](https://prettier.io) set rules to keep the same coding style in
the codebase.

### ESLint - Quality guardian

First, install `eslint` to your development dependencies

```shell
npm install -D eslint
```

Let's configure it with the CLI

```shell
# Initialize eslint
npx eslint --init
```

<Details>
  <Summary><strong>Follow those steps when configuring ESLint</strong></Summary>

  <pre>
  ? How would you like to use ESLint?
  <b>To check syntax, find problems, and enforce code style</b>
  ? What type of modules does your project use?
  <b>JavaScript modules (import/export)</b>
  ? Which framework does your project use?
  <b>None of these</b>
  ? Does your project use TypeScript?
  <b>Yes</b>
  ? Where does your code run?
  <b>Node</b>
  ? How would you like to define a style for your project?
  <b>Use a popular style guide</b>
  ? Which style guide do you want to follow?
  <b>Airbnb: https://github.com/airbnb/javascript</b>
  ? What format do you want your config file to be in?
  <b>JavaScript</b>
  Checking peerDependencies of eslint-config-airbnb-base@latest
  The config that you've selected requires the following  dependencies:
  
  @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint@^5.16.0 || ^6.8.0 || ^7. 2.0
  eslint-plugin-import@^2.21.2 @typescript-eslint/parser@latest ? Would you like to install them now with npm?
  <b>Yes</b>
  </pre>
</Details>

> Those steps are configuring ESLint rules, during the pool we will follow
> [AirBnB](https://airbnb.io/javascript/#objects--prototype-builtins) convention.

Let's add some rules in the `package.json` to run the linter :
- `lint`: `eslint src/**/*.ts`.
- `lint:format`: `eslint --fix src/**/*.ts`.

> You will certainly find syntax errors.

As you'll see, call to `console.log` are considered as warning. To remove it
we will update our ESLint configuration with the one below 

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts'],
      },
    },
  },
  rules: {
    'no-console': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
      },
    ],
  },
};
```

Be sure that you have the following modules in your `devDependencies`

```json
"@typescript-eslint/eslint-plugin": "^5.3.1",
"@typescript-eslint/parser": "^5.3.1",
"eslint": "^8.0.0",
"eslint-config-airbnb-base": "^15.0.0",
"eslint-plugin-import": "^2.25.3",
"prettier": "^2.4.1",
```

If a dependency is missing, install it. Indeed, it's not a problem if your
versions are different.

As well, ESLint extensions are available in your favorite IDE :
- [VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Webstorm](https://www.jetbrains.com/help/webstorm/eslint.html)

With those, you will see errors and warning directly in your terminal.

### Prettier - Clean guardian

Indeed, add `prettier` to your development dependency

```
npm install -D prettier
```

Create a file `.prettierrc.json` at the root of your projet and [configure](https://prettier.io/docs/en/configuration.html)
it as you like!

There are also extensions available :
- [VSCode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Webstorm](https://www.jetbrains.com/help/webstorm/prettier.html)

## Step 5 - Artists Book v1.0

You are ready for a complex exercice. Let's create our first application!

It will be a program that help you manage your favorite artists from your terminal.

We will not code everything in one step, that would be too huge for this moment.

:warning: Read the **whole** step before coding, it will help you understand
what to do and how to do it

Let's start with a simple implementation. The goal is to have a CLI similar to the one below

```text
Welcome into your Artists Book!

What do you want to do?
1 - List my favorite artists
2 - Leave

# User tip input
> 3

Tip 1 or 2.

# User tip input
> 1

Here's your favorite artists:
-- 1 -- B2O
-- 2 -- SCH
-- 3 -- Laylow
-- 4 -- Billie Eilish

What do you want to do?
1 - List my favorite artists
2 - Leave

# User tip input
> 2

See you!
```

To do this, we must build a program that follows a strong architecture.
We will use one of the most popular : [MVC](https://www.calhoun.io/using-mvc-to-structure-go-web-applications/).

MVC stands for **Model - View - Controller**. It's an architecture where your
code logic is split into smaller part to easily maintain and scale a project.

We will now adapt MVC to our need, don't worry if we do not strictly follow the architecture.

Here's a schema of your architecture

![Artists Book architecture](../../../.github/assets/software_mvc.png)

Let's code step by step

### Router

Router corresponds to the entrypoint of your program and the main loop.<br>
She has different roles :
- Display actions to user.
- Catch user's input.
- Call `controllers` to execute action asked by the user.

A good architecture also required a good folder management in your code. 
Each _resources_ must be in his own folder and the `router` made the link
between them.

- Create a directory `artistsBook` in the directory `src` and create the file
`router.ts` in it.
- Create a function `router` that will do the loop describe in the example.
> You are big boy/girl now, you got the keys to do it by yourself.
- Update `index.ts` to call `router`.

### Controllers

A controller is in charge of the business logic that manage your resources.

Is only purpose is to create the link between the function that manage your
data storage (for now it will be a simple `JSON` file) and functions exposed
to the user.

- Create a directory `controllers` in `artistsBook` folder. 
- Create a directory `artists` in it.
- Create a file `display.ts`
- Write the function `displayAll` that control the display of user's favorite artists

### Repositories

A repository is responsible for all interactions with the data storage.

- Create a directory `repositories` in `artistsBook` folder. 
- Create a directory `artists` in it.
- Create a file `get.ts`
- Write the function `GetAll` that retrieves user's favorite artists

### Views

A view expose a list of functions to the user to make it interact with a resource.

- Create a directory `views` in `artistsBook` folder.
- Create a directory `artists` in it.
- Create a file `display.ts`
- Write the function `displayAll` that display user's favorite artists in the terminal.

### Models

A model define the type of the stored data.

- Create a directory `models` in `artistsBook` folder.
- Create a file `artist.ts`
- Export a type `Artist` that contains a field `name` of type `string`

### Data

Data define your storage, it can be a database, an Excel file or whatever that
can store data. Here, it will be a simple `JSON` file.

> [JSON](https://en.wikipedia.org/wiki/JSON) stands for JavaScript Object Notation.
> It's a standard like `CSV`, `XML` or `YAML` used to define a structured data.

- Create the directory `data` in `artistsBook` folder.
- Create the file `artists.json` with the following content :

```json
[
  {
    "name": "B2O"
  },
  {
    "name": "SCH"
  },
  {
    "name": "Laylow"
  },
  {
    "name": "Billie Eilish"
  }
]
```

You will need to write a [`tsconfig.json`](https://www.typescriptlang.org/tsconfig)
that [allow you to import `.json` file](https://www.typescriptlang.org/tsconfig#resolveJsonModule).

### Resume

Finally, you should have the following architecture :

```text
artistsBook/
  router.ts
  controllers/
    artists/
       display.ts
  repositories/
    artists/
      get.ts
  views/
    artists/
       display.ts
  models/
    artist.ts
  data/
    artists.json
```

This exercice seem hard but if you write your code step by step, it will
be a piece of cake :cake:!

## Step 6 - Artists Book v2.0

You've built the base of your MVC architecture, it's time to improve it!

For now, you can only read data, let's add operation to create, update or delete it.

Those four primitive operations are mandatory to manage a resource in a data storage.
They are usually called [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete),
it stands for **CREATE - READ - UPDATE - DELETE**.

Let's add missing operations

### CREATE

Update your codebase to allow user **add** a new artist to his list.

#### Repository

Add a file `create.ts` in your artists' repository.

In it, write the function `create` that will add a given artist in the data storage.<br>

> :warning: You'll need to [write data](https://medium.com/@osiolabs/read-write-json-files-with-node-js-92d03cc82824)
> into `artists.json`.<br>
> Take care to not **lose data** when you rewrite the file. 

It must have the prototype below :

```ts
function create(name: string, callback: (found: boolean, err: NodeJS.ErrnoException) => void) {}
```

`found` must be set to `true` if an `Artist` match the given name.

> `found` help you to know what to do after calling `create`, for example if
> `found` is true, you'll display `<artist name> already exists!` in the terminal.

If you meet an error when using `NodeJS.ErrnoException`, add those lines in 
your ESLint config file :

```js
globals: {
  NodeJS: true,
},
```

As you seen in the prototype, you will use a [`callback`](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function).

> Even if you know `async/await` and could do it with, it's important to understand callback.

Now that you have update `repository`, you must update other part of your mvc.

#### View

- Create the file `ask.ts` in the `views` directory.
- Write the function `askName` that retrieve an artist's name from the terminal.

> You can copy code from other step to win time 

#### Controller

- Create the file `create.ts` in the `controllers` directory.
- Write the function `create` that controls artist addition.

#### Routing

Add the possibility to create an artist in `router.ts`.

#### Result

You can code other functions to make your code works. For example, a function to
display the artist name if it has been correctly added to the list.<br>
This function should be in the views, in `display.ts` for example.


You should get the following result 

```text
Welcome into your Artists Book!

What do you want to do?
1 - List my favorite artists
2 - Add an artist to my favorite
3 - Leave

# User tip input
> 2

What's the artist's name?

# User tip input
> Bob Marley

Bob Marley has been added to your favorite artists!

What do you want to do?
1 - List my favorite artists
2 - Add an artist to my favorite
3 - Leave

# User tip input
> 1

Here's your favorite artists:
-- 1 -- B2O
-- 2 -- SCH
-- 3 -- Laylow
-- 4 -- Billie Eilish
-- 5 -- Bob Marley

What do you want to do?
1 - List my favorite artists
2 - Add an artist to my favorite
3 - Leave

# User tip input
> 2

What's the artist's name?

# User tip input
> Bob Marley

Bob Marley already exists!

What do you want to do?
1 - List my favorite artists
2 - Add an artist to my favorite
3 - Leave

# User tip input
> 3

See you!
```

### Update

Update your application to allow user **update** an artist in his list.

#### Repository

Create the file `update.ts` in your `repository` folder.

Add the function `update` to modify an artist in the data storage.

The function must follow the prototype below :

```ts
function update(name: string, newName: string, callback: (found: boolean, err: NodeJS.ErrnoException) => void) {}
```

> :warning: Same as create, take care when you rewrite the file.

#### Views

Add the function `askNewName` in your `view`.

> I'm sure you have understood the logic :brain:

#### Result

Don't forget to update your `controller`, the `router` and add anything
required to correctly update an artist.

You should have the following result :

```text
Welcome into your Artists Book!

What do you want to do?
1 - List my favorite artists
2 - Add an artist to my favorite
3 - Leave

# User tip input
> 2

What's the artist's name?

# User tip input
> Bob Marley

Bob Marley has been added to your favorite artists!

What do you want to do?
1 - List my favorite artists
2 - Add an artist to my favorite
3 - Update an artist in my favorite
4 - Leave

# User tip input
> 3

What's the name of the artist you want to update?

# User tip input
> unknown

What will be the new name of unknown?

# User tip input
> Mac Miller

unknown is not in your favorite list.

What do you want to do?
1 - List my favorite artists
2 - Add an artist to my favorite
3 - Update an artist in my favorite
4 - Leave

# User tip input
> 3

What's the name of the artist you want to update?

# User tip input
> B20

What will be the new name of unknown?

# User tip input
> Booba

B2O has been successfully updated.

What do you want to do?
1 - List my favorite artists
2 - Add an artist to my favorite
3 - Update an artist in my favorite
4 - Leave

# User tip input
> 1

Here's your favorite artists:
-- 1 -- Booba
-- 2 -- SCH
-- 3 -- Laylow
-- 4 -- Billie Eilish
-- 5 -- Bob Marley

What do you want to do?
1 - List my favorite artists
2 - Add an artist to my favorite
3 - Update an artist in my favorite
4 - Leave

# User tip input
> 4

See you!
```

## Step 7 - Artists Book v3.0

You have implemented a complete MVC architecture, that's excellent :rocket:

Only one thing is missing, our data is too basic, she only has a name.

Let's add some field, update `Artist` with :
- `id`: A [unique identifier](https://www.npmjs.com/package/nanoid) of type `string`
- `top`: Best song, as a `string`
- `fans`: `number` of fans
- `listenedTime`: the amount of time you listened this artist. It must be stored as a [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

> It's common to put a unique identifier when you store data, this way, you can easily distinguish them.

You'll have to update all your codebase to supports those new fields.

> Do not worry, it's not that hard because you have build a strong architecture!

## Bonus

First, congratulation! You've survived day 1 :clap:

Below you'll see two bonus to challenge you.

### Music

Your MVC currently manages only one resource : `Artist`.

You can create a new resources named `Music` containing the following data :
- `id`: Resource unique identifier
- `artist`: Owner of the music 
- `name`: Music's title
- `listened`: Number of listening
- `link`: A link to the music (E.g: `spotify`, `youtube`...)

You're free to add any features to your application.

You can maybe start by adding the **CRUD** for your new `Music` resource.

### Object Oriented Programming

Your MVC is build in imperative paradigm. 

But actually, when you are managing resource, it's much more natural to do it
in an [oriented object](https://codaholic.sillo.org/2016/04/05/typescript-poo-et-espaces-de-noms/) way.

Try to do it in that way, merge your `repository` and your `model` into a [Class](https://www.typescriptlang.org/docs/handbook/classes.html).

> You do not need more help if you reach this step, be strong soldat!

## Additional resources

- [Transpile Typescript to Javascript](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
- [Typescript type explanations](https://betterprogramming.pub/understanding-typescripts-type-system-a3cdec8e95ae)
- [Decorators](https://www.typescriptlang.org/docs/handbook/decorators.html)
- [Templating](https://refactoring.guru/design-patterns/template-method/typescript/example)
- [Contribute to Typescript](https://github.com/microsoft/TypeScript)
- [Type a Javascript module](https://github.com/DefinitelyTyped/DefinitelyTyped)