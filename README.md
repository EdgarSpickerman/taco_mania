# Taco Mania Eet Da Taco

## Getting started

  1. First make sure you make an `.env` file in the root directory and copy the following code with your creditentials then type npm install.

  ```
    #mysql connection
    
    MYSQL_HOST = <Your host provider>
    MYSQL_USER = <Your user name>
    MYSQL_PASSWORD = <Your user password>
    MYSQL_DB = <Your database name>
    MYSQL_PORT = <Your mysql server connection port>

 ```
 2. After making the `.env` file and typing npm install please seed the database runnning `npm run seed`. If you have your own data you would like to seed or use please replace the seed.sql with your respective data. Please pay attention to the schema's locaied in the db folder found in the root directory.After running the command please restart the application.

 3. After you have seeded your database please type either `nodemon` or `node index.js` to start the application. 

 ## Exiting the application
 1. Press `Ctrl + C` to terminate or kill the server and the application should stop working.