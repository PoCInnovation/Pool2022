# PoC Software Pool 2022 - Day 01 - Golang

Welcome to the Software pool 2022! :rocket:

During this week, you will learn the base of the modern web programming, core
concept of frontend, backend, data storage... with a piece of devops.

**Day purposes**

:heavy_check_mark: Setup a Golang project.

:heavy_check_mark: Learn basics of Golang.

:heavy_check_mark: Discover software development good practises.

:heavy_check_mark: Introduce you to design pattern, specially MVC.

:heavy_check_mark: Create an interactive application using your terminal.

## Introduction

### Requirements

Golang is a powerful language with many features and capabilities, you can
manage any Go project from his [complete CLI](https://go.dev/doc/install).

With it, you can build go binary, download dependencies, format your code...
If you are curious, you can [look at the CLI documentation](https://pkg.go.dev/cmd/go).

Start by [installing the CLI](https://go.dev/doc/install), you can verify that
everything works using the command below

```shell
# Version must be at least 1.16
go version
# go version go1.17.5 darwin/arm64
```

### Why Golang?

Go is an open source programming language created and maintained by Google.<br>
He solves several problems of the modern software world thanks his simplicity
and incredible standard library. It's also really strong to build
[microservices](https://www.encora.com/insights/building-microservices-with-golang-and-go-kit)
and [software that required high level of performance](https://www.willowtreeapps.com/craft/the-pros-and-cons-of-programming-in-go).

Go has many usage, you can write powerful cloud & networks, CLI, 
API or Devops tools.<br>
Because it's a compiled langage, it's really fast, much faster than [Javascript
for instance](https://qvault.io/golang/node-js-vs-go/).

Here's an exhaustive list of Golang killer feature :
- Easily solve complex concurrency issues with [go routine](https://gobyexample.com/goroutines).
- Strongly statically typed
- Amazing dependency management with [go module](https://medium.com/@adiach3nko/package-management-with-go-modules-the-pragmatic-guide-c831b4eaaf31)
- Multi-paradigm with [OOP](https://www.toptal.com/go/golang-oop-tutorial) to [functional](https://medium.com/@geisonfgfg/functional-go-bc116f4c96a4)

### Warp up

Let's begin this pool with a simple warp up : [The Go Tour](https://go.dev/tour/welcome/1)<br>
This tour is a set of exercice to learn Go basic.

You can also try the [Go Playground](https://go.dev/play/), a useful tool to test or share piece of codes.

You will also need a good IDE, we recommend [Visual Studio Code](https://code.visualstudio.com)
or [Goland](https://www.jetbrains.com/fr-fr/go/).

In summary, here's a bunch of links that will be very useful during the pool
- [Go Docs](https://go.dev/doc/)
- [Go Playground](https://go.dev/play/)
- [Go Tour](https://go.dev/tour/list)
- [Visual Studio Code Go plugin](https://code.visualstudio.com/docs/languages/go)
- [Goland](https://www.jetbrains.com/fr-fr/go/)
- [Standard Library](https://pkg.go.dev/std)

## Step 0 - Setup

As usual, every exercices must be pushed to a git repository.<br>
To make it easier, we will use a GitHub classroom! Follow this [link](https://classroom.github.com/a/_7vegqir) to create your git repository.

Then, you can clone your repository.

```shell
git clone https://github.com/PoC-Community/software-pool-days-{YOUR-GITHUB-USERNAME}
```

For each day, we will create a new folder. Start with the `day01`.

```shell
mkdir -p day01
```

In it, let's initialize a Go project

```shell
go mod init SoftwareGoDay1
# go: creating new go.mod: module SoftwareGoDay1
```

You should see a [`go.mod`](https://faun.pub/understanding-go-mod-and-go-sum-5fd7ec9bcc34?gi=7a3186a145d6) file appear in your directory.

You can now create your first go file : `main.go`

```golang
package main

import "fmt"

func main() {
  fmt.Println("You are ready to start 2022 PoC software pool!")
}
```

If you are curious, check [fmt package documentation](https://pkg.go.dev/fmt), but no worry,
you'll understand everything.

Let's execute it

```shell
# Use `go run` to execute your program without building the binary
go run SoftwareGoDay1 # Or go run ./main.go

# You can also build and run it in separate command
go build SoftwareGoDay1
./SoftwareGoDay1

# You should get the following output
You are ready to start 2022 PoC software pool!
```

Before going further, do the [Go Tour](https://go.dev/tour/basics/1) and read
the [package documentation](https://medium.com/rungo/everything-you-need-to-know-about-packages-in-go-b8bac62b74cc).

## Step 1 - Hello World

It's time to start coding! We will start with a simple `helloWorld` package.

Let's create a folder `helloWorld`, in it, add the file `helloWorld.go`.

```shell
mkdir -p helloWorld
```

You will implement a function `HelloWorld` that will display `Hello World !`
in your terminal.

*Don't forget to add the correct package's name at the top of `helloWorld.go`.*

Update the file `main.go` to call `HelloWorld`.

Here's a couple of slide about [what is a good naming in Go.](https://talks.golang.org/2014/names.slide#1)

## Step 2 - Loops, conditions, array and unit tests

The purpose is to use what you have learn during the 
[Go Tour](https://go.dev/tour/welcome/1).

Let's create a function to sort numbers

You must :
1. Sort a list in ascending order
2. Remove odd numbers
3. Format result to return

### Sort like a pro

Create a new package `getEvenNumbers` with a file `getEvenNumbers.go`.

```shell
mkdir - p getEvenNumbers
```

Create a function `GetEvenNumbers` that will take as parameter an
array of int.<br>
It must sort the array in ascending order and return a string that
contains only pairs number in ascending order split by a `-`.

Update `main.go` to call `GetEvenNumbers` and display the result

```go
array := []int{
  	1,
  	0,
  	19,
  	17,
  	16,
  	8,
  	13,
  	24,
  }

fmt.Prinln(getEvenNumbers.GetEvenNumbers(array))
```

You should get the following result

```shell
0 - 8 - 16 - 24
```

### Test like a pro

It's really important to correctly test your code, a code not tested can lead
you to unpredictable bug and the time lost to debug it could be avoided by testing.

To do so, Golang provides a [built-in to test package](https://pkg.go.dev/testing),
with a [clean way to organize your tests](https://dave.cheney.net/2019/05/07/prefer-table-driven-tests).

Let's create a test file named `getEvenNumbers_test.go`.

You can write a test with :
- Only positive numbers
- Only negative numbers
- Mixe numbers

Execute test using `go test`

```
go test ./getEvenNumbers -v

=== RUN   TestGetEvenNumbersCasePositive
--- PASS: TestGetEvenNumbersCasePositive (0.00s)
=== RUN   TestGetEvenNumbersCaseNegative
--- PASS: TestGetEvenNumbersCaseNegative (0.00s)
=== RUN   TestGetEvenNumbersCasePositiveAndNegative
--- PASS: TestGetEvenNumbersCasePositiveAndNegative (0.00s)
PASS
ok      SoftwareGoDay1/getEvenNumbers     0.001s
```

## Step 3 - My name is

The purpose is to learn how to read input from terminal.

Create a new package `whatIsYourName`.

```shell
mkdir -p whatIsYourName
```

Create the file `whatIsYourName.go` that will contain the function `WhatIsYourName`.<br>
This function must display a prompt in the terminal to retrieve ask a user
to fill his name.

To do so, you can use [bufio](https://pkg.go.dev/bufio) and [os](https://pkg.go.dev/os) packages.

You should code a function that will have the following behavior

```shell
What is your name ?
# User fill input
> Slim Shady

# Display input
Your name is Slim Shady
```

Don't forget to call it from `main.go` and [correctly manage errors](https://medium.com/gett-engineering/error-handling-in-go-53b8a7112d04).

*:bulb: Don't forget to display your errors using [log package](https://pkg.go.dev/log)
and [`fmt.Errorf`](https://pkg.go.dev/fmt#Errorf).*

### Testing time

It's really hard to test I/O with unit test, but that's why functional tests exist!

[Download them from GitHub](https://github.com/PoCInnovation/Correction-Pool2022/blob/master/Software/day01/Go/resources/testWhatIsYourName.zip)
and extract sources in your directory.

Then, create a binary of your project using `go build`.

You can now simply execute `testWhatIsYourName` to verify your program
```shell
OK - TEST 1 PASSED
OK - TEST 2 PASSED
OK - TEST 3 PASSED
```

Indeed, don't hesitate to add more test and work on your program until 
everything works!

## Step 4 - Make it the cutest that I have ever seen

As we said in the introduction, Golang come with great built-ins to help you
during your development.

One of those tools is [gofmt](https://pkg.go.dev/cmd/gofmt), it's a powerful
tool that will help you format your codes according to standard coding style
rules.

Indeed, it helps on the format, but having a [clean code architecture](https://en.wikipedia.org/wiki/SOLID)
is up to you :rocket:

To use [gofmt](https://pkg.go.dev/cmd/gofmt), just tip `go fmt .` at the
root of your module.

You can also configure [VSCode](https://code.visualstudio.com/docs/languages/go#_formatting)
or [Goland](https://www.jetbrains.com/help/go/integration-with-go-tools.html#gofmt)
to format your code on save.

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
Each _resources_ must be in his own package and the `router` made the link
between them.

- Create a package `artistsBook` with a file `router.go` in it.
- Create a function `Router` that will do the loop describe in the example.
> You are big boy/girl now, you got the keys to do it by yourself.
- Update `main.go` to call `Router`.

### Controllers

A controller is in charge of the business logic that manage your resources.

Is only purpose is to create the link between the function that manage your
data storage (for now it will be a simple `JSON` file) and functions exposed
to the user.

- Create a package `controllers` in `artistsBook` folder.
- Create a sub-package `artists` in it.
- Create a file `display.go`
- Write the function `DisplayAll` that control the display of user's favorite artists

### Repositories

A repository is responsible for all interactions with the data storage.

- Create a package `repositories` in `artistsBook` folder.
- Create a sub-package `artists` in it.
- Create a file `get.go`
- Write the function `GetAll` that retrieves user's favorite artists

You will need [os](https://pkg.go.dev/os) and [json](https://pkg.go.dev/encoding/json)
packages to read file (see more information below).

### Views

A view expose a list of functions to the user to make it interact with a resource.

- Create a package `views` in `artistsBook` folder.
- Create a sub-package `artists` in it.
- Create a file `display.go`
- Write the function `DisplayAll` that display user's favorite artists in the terminal.

### Models

A model define the type of the stored data.

- Create a package `models` in `artistsBook` folder.
- Create a sub-package `artist`
- Create a file `artist.go` in it
- Export a [struct](https://www.geeksforgeeks.org/structures-in-golang/)
`Artist` that contains a field `name` of type `string`

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

### Resume

Finally, you should have the following architecture :

```text
artistsBook/
  router.go
  controllers/
    artists/
       display.go
  repositories/
    artists/
      get.go
  views/
    artists/
       display.go
  models/
    artist.go
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

Add a file `create.go` in your artists' repository that will contain
the function `Create` to add an artist to the database.

*:warning: You will need to write the whole `artists.json` file*<br>
*Take care to not **lose data** when you rewrite the file.*

#### View

- Create the file `ask.go` in `views/artists` directory.
- Write the function `AskName` that retrieve an artist's name from the terminal.

*You can copy code from other step to win time*

#### Controller

- Create the file `create.go` in `controllers/artists` directory.
- Write the function `Create` that controls artist addition.

#### Routing

Add the possibility to create an artist in `router.go`.

#### Result

You can code other functions to make your code works. For example, a function to
display the artist name if it has been correctly added to the list.<br>
This function should be in the views, in `display.go` for example.


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

Create the file `update.go` in your `repository/artists` folder.

Add the function `Update` to modify an artist in the data storage.

#### View

Add the function `AskNewName` in your `views/artists` directory.

*I'm sure you have understood the logic :brain*

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

### DELETE

Update your codebase to allow user to **remove** an artist from his list.

It's up to you to find the best way to do it :rocket:

## Step 7 - Artists Book v3.0

You have implemented a complete MVC architecture, that's excellent :rocket:

Only one thing is missing, our data is too basic, she only has a name.

Let's add some field, update `Artist` with :
- `id`: A [unique identifier](https://pkg.go.dev/github.com/aidarkhanov/nanoid) of type `string`
- `top`: Best song, as a `string`
- `fans`: `number` of fans
- `listenedTime`: the amount of time you listened this artist. It must be stored as a [`Time`](https://pkg.go.dev/time)

*It's common to put a unique identifier when you store data, this way, you can easily distinguish them*.

You'll have to update all your codebase to supports those new fields.

*Do not worry, it's not that hard because you have build a strong architecture!*

## Step 8 - Interface

It's time to learn another important concept in Go : [interfaces](https://go.dev/tour/methods/9).

To do so, we will do a simple example with geometric shapes :red_square:.

Let's create a package `geometricShape`.

```shell
mkdir -p geometricShape
```

### Definition

In it, create an interface `GeometricShape` with a method `CalcPerimeter`.<br>
This method must have the following prototype `CalcPerimeter() float64`.

Create a function `CalcPerimeter` that will take this time an interface
`GeometricShape` **as parameter** and return the result of the function
`CalcParameter` called from the interface.

Here's a prototype to help you `func CalcPerimeter(shape GeometricShape) float64`.

### Shapes

Create the struct `Circle` with a field `Radius`.<br>
Create the struct `Rectangle` with a field `X` and `Y`.<br>
Create the struct `Triangle` with a field `X`, `Y` and `Z`.

For each shape, implement the method `CalcParameter` that will return
the parameter of the shape.

Here's an example of prototype for a `Square`

```go
func (square Square) CalcPerimeter() float64 {}
```

### Appreciate

Update the file `main.go` to create 3 shapes :
- A `Circle` with `radius`: `12.0`
- A `Rectable` with `X`: `2.0` and `Y`: `3.0`
- A `Triangle` with `X`: `5.0`, `Y`: `2.0` and `Z`: `1.0`

For each shape, display their perimeter using `CalcPerimeter` from
package `geometricShape`.

Here's an example of output

```shell
&{12} has perimeter of 75.398224
&{2 3} has perimeter of 10.000000
&{5 2 1} has perimeter of 8.000000
```

As you can see, it's not clear... Let's use the power of interface to
fix that.

The package fmt call the method [`String`](https://go.dev/tour/methods/17) of given argument to display
it properly.<br>
So if our structures implement the method `String`, you can control the 
way it's displayed by fmt.

Update your structures to print it correctly, here's an example of prototype 
with `Square`

```go
func (square Square) String() string {}
```

Thanks interface, you do not have to change anything in `main.go`,
just rerun the program and appreciate.

```shell
# You can configure `String()` to display this
Circle: { radius = 12 } has perimeter of 75.398224
Rectangle: { X = 2, Y = 3 } has perimeter of 10.000000
Triangle: { X = 5, Y = 2, Z = 1 } has perimeter of 8.000000
```

## Step 9 - Artists Book v4.0

Since you know interface, why do not use it in MVC?

The purpose is to update `Artist` to correctly display it with `fmt` package.

In your `artist` model, implement the method `String`.

You can also update `DisplayAll` from your `views` to use a simple `fmt.Printf`
to display `Artist`.

## Bonus

First, congratulation! You've survived day 1 :clap:

Your MVC currently manages only one resource : `Artist`.

You can create a new resources named `Music` containing the following data :
- `id`: Resource unique identifier
- `artist`: Owner of the music
- `name`: Music's title
- `listened`: Number of listening
- `link`: A link to the music (E.g: `spotify`, `youtube`...)

You're free to add any features to your application.

You can maybe start by adding the **CRUD** for your new `Music` resource.

## Additional resources

- [Clean code in Go](https://github.com/Pungyeon/clean-go-article#Clean-Go)
- [Go benchmark](https://dave.cheney.net/2013/06/30/how-to-write-benchmarks-in-go)
- [Go amazing project](https://github.com/avelino/awesome-go)
- [Generics](https://go.dev/doc/tutorial/generics)
- [Go routines](https://medium.com/technofunnel/understanding-golang-and-goroutines-72ac3c9a014d)
- [Courses](https://www.calhoun.io)

> Made with :heart: by PoC