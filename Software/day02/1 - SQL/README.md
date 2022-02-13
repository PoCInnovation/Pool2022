# PoC Software Pool 2022 - Day 02 - SQL

**Day purposes**

:heavy_check_mark: Execute simple SQL requests.

:heavy_check_mark: Discover database management tool.

:heavy_check_mark: Understand fundamentals of relational database.

## Introduction

During the [day 01](../../day01), you learnt a programming language to 
develop software. But a software isn't only composed of a hundred thousand
line of code, it's common to use external tools to take in charge a specific
task.<br>
For example, you can use [Prometheus](https://prometheus.iogr)/[Grafana](https://grafana.com) to monitore your app, [Kafka](https://kafka.apache.org) as a queue or a [database](https://en.wikipedia.org/wiki/Database) to store huge amount of data.

### What's a database?

It's an organized space where you can store pieces of information.
Each time you need a permanent storage, for example, to store users, you will
need a database.<br>
It has many usage and ways, the most popular is [SQL database](https://en.wikipedia.org/wiki/SQL) or 
also called [relational database](https://en.wikipedia.org/wiki/Relational_database).

### Type of database

Today we will learn relational database but other exists :

- [Document](https://en.wikipedia.org/wiki/Relational_database)
- [Graph](https://en.wikipedia.org/wiki/Graph_database)
- [Column](https://en.wikipedia.org/wiki/Column-oriented_DBMS)
- [Key/Value](https://en.wikipedia.org/wiki/Key–value_database)
- [Search Engine](https://en.wikipedia.org/wiki/Database_search_engine)
- [Multi model](https://en.wikipedia.org/wiki/Multi-model_database)

> Find more information about database in this [post](https://fireship.io/lessons/top-seven-database-paradigms/).

## Requirements

There are many tools to manage a database. We give you the choice between
[Datagrip](https://www.jetbrains.com/datagrip/) and [SQL IDE Online](https://sqliteonline.com).

> We recommend Datagrip for his powerful UX and his easy adoption.

In the folder [resources](./resources), you will find a file named 
[database.sql](./resources/database.sql) to generate a new database
with artists and musics.

Here's a schema of our data

![Artists database](../../../.github/assets/software_bdd.png)

In relational database, data are stored into [table](https://www.postgresql.org/docs/9.2/ddl-basics.html)
where each information is a [column](https://www.postgresql.org/docs/8.0/ddl.html).

You can then create [relation](https://hasura.io/learn/database/postgresql/core-concepts/6-postgresql-relationships/)
between tables.

> You can find more information about PostgreSQL concepts [here](https://www.postgresql.org/docs/8.3/tutorial-concepts.html).

### Datagrip

If you don't want to download, move to the [SQL IDE Online](#sql-ide-online) setup.

First, download Datagrip using [Jetbrains Toolbox](https://www.jetbrains.com/toolbox-app/).

You can use [docker](https://www.docker.com) to run a [PostgreSQL](https://www.postgresql.org) 
database with the following command in the directory containing the file `database.sql`

```shell
docker run  --name my_database -e POSTGRES_PASSWORD=password -e POSTGRES_USER=root -e POSTGRES_DB=my_database -p 5432:5432 -v "$(pwd)"/database.sql:/docker-entrypoint-initdb.d/init.sql -d postgres:alpine
```

> Do not worry, you will learn docker during day 04.

Start Datagrip and create a new `Data Source` of type `PostgreSQL`.

Here's the information to fill in the form

- Database name : `my_database`
- Username : `root`
- Password : `password`
- Host : `localhost`
- Port : `5432`

> You will certainly have to download the PostgreSQL driver on your first connection.

Below you have an example of configuration

![datagrip configuration](../../../.github/assets/software_postresql_connection.png)


After applying the configuration, you should see a new data source in the left panel of Datagrip.

Verify you have something similar to the example below

![datagrip data source](../../../.github/assets/software_postgresql_result.png)

> :bulb: You can look a [those steps](https://www.jetbrains.com/help/datagrip/postgresql.html)
> if you meet an issue during the configuration.

> You can use [pgAdmin](https://www.pgadmin.org) or 
> [DBeaver](https://dbeaver.io) if you are already familiar with.

### SQL IDE Online

> We do not recommend that's solution because it's important to use
> professional tool, but you can use it if you want to go fast.

- Go to [SQL IDE Online]().
- Click on `PostgreSQL` database.
- Click on category `File`.
- Open `database.sql`
- Execute it with the button `Run`.

You should get the following result

![sql ide online result](../../../.github/assets/software_sql_online.png)

## Step 0 - Setup

If you correctly followed the requirements, you should already have a database
ready to use.

You will just need to create a new directory in your pool repository to
submit your work.

In your pool directory, create a directory named `day02`

```shell
mkdir -p day02
```

This day is in two part, so you will push your work in the directory `SQL`

```shell
mkdir -p day02/SQL
```

Create a file `queries.md` in wich you will write every queries to keep a track :

```shell
touch queries.md
```

## Step 1 - Basics

Your database is ready to run your first requests.

The goal of this step is to understand how read data in a database using
[SQL](https://en.wikipedia.org/wiki/SQL).

Let's try to get information from the table `artists`.

Write 3 queries to :
- Retrieve **all** informations from table `artists`.
- Retrieve **only** `name` and `genre` from table `artists`.
- Retrieve the list of all `artists` of `genre` `hip-hop/rap`.

> See how to [read data in SQL](https://sql.sh/cours/select) or in [PostgreSQL](https://www.postgresql.org/docs/9.5/sql-select.html).

## Step 2 - Relations

As we said before, a relational database is perfect to handle data with 
multiple relations between them.

Let's write 3 new queries to link information from tables :
- Retrieve `name` from `artists` and `musics`.<br>
You must specify the name of your result column with `artists_names` and `musics_names`.
- Retrieve all `artist` who singed in the music `We Are The World`.<br>
Those artists must be sort in `descending` order according to their number of fans.
- Retrieve all the `musics` from `Booba`.<br>
They must be sorted in `alphabetical` order.

> See [how sort data](https://docs.postgresql.fr/9.2/queries-order.html)
> and [join](https://sql.sh/cours/jointures) in SQL.

## Step 3 - CRUD

Yesterday, you coded the CRUD of a resource, let's learn how to do it using SQL.

Write 3 queries to :
- Add a new `artist` with his `id` set to `100`.
- Delete all musics that have `Gold` `certification`.
- Add the musics `Take What You Want` to the `artists` you previously created.

> :warning: `artists` and `musics` are linked using a relationship table, you
> will maybe need to do 2 queries to delete records.

> See how [create](https://sql.sh/cours/insert-into) or 
> [delete](https://sql.sh/cours/delete) data in SQL.

## Step 4 - Good counts make good friends

You learnt basics, let's see more advanced features with pre-processing SQL functions.

You will use functions to [count element](https://sql.sh/fonctions/agregation/count) directly from SQL.

> Database are faster than any programming language (except C) so if you can
> pre-process your data in your query, do it.

Write 4 new queries to :
- Count number of `artists`
- Count number of `artists` in each `genre`.
- Cout number of `musics` sorted by their certification and displayed in ascending order.
- Count number of `musics` of each `artists`, sorted by their certification and 
displayed in ascending order.

> :warning: Be sure you never count the same music two time.

> You'll certainly need to [group element in SQL](https://sql.sh/cours/group-by).

## Step 5 - Rap Game

You have certainly noticed, there are several kind of musics related to rap : 
the `rap` and `hip-hop/rap`.

We would like to organize a concert with all rappers in our database, but
for that, we need a list of them.

Write a query that retrieve all rappers in the database, sorted in 
descending order by their fans' number.

> You'll maybe need to [manipulate string](https://sql.sh/fonctions/chaines-de-caracteres) 
> and [cast data](https://sql.sh/fonctions/cast). 

## To go further

Congratulation, you now have solid knowledge in SQL.

Here's some link for the most courageous.

- [Organize your database with schema](https://www.postgresql.org/docs/14/ddl-schemas.html)
- [Create your own PostgreSQL function](https://www.postgresql.org/docs/14/xfunc-sql.html)
- [Automate task with triggers](https://www.postgresql.org/docs/14/trigger-definition.html)
- [Improve query performance](https://www.postgresql.org/docs/14/performance-tips.html)

> Made with :heart: by PoC