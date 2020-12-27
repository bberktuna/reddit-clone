# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command

# Setup Postgres

1. Setup ormconfig.json file || loggin true || postgres username || db name
2. Create db -> createdb -U <postgres-username> <db-name>
3. Run the server to create entities -> npm start
4. Connect to db -> open the console and type psql then type -> \c <db-name>
5. Show the db -> \dt

# Postgres commands

&. DROP TABLE <table-name>
&. SELECT \* FROM <table-name>
&. delete from users; -> deletes user
&. \d all tables || \d <table-name>
&. \dt
&. \c <db-name> connect the table
&.
&
