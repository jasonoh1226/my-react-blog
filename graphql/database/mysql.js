const dotenv = require('dotenv');
dotenv.config();

let config = {
    client: 'mysql2',
    connection: {
        host:process.env.MYSQL_HOST,
        user:process.env.MYSQL_USER,
        password:process.env.MYSQL_PASS,
        database:process.env.MYSQL_DB,
        multipleStatements: true
    }
}

// Once we have a connection configuration, we pass it to knex JS,
// and we are going to return the connection that we get from knex JS.
module.exports = require('knex')(config)




// https://medium.com/@at0dd/install-mysql-5-7-on-mac-os-mojave-cd07ec936034


// brew services start mysql@5.7
// mysql -u root -p
// create database if not exists react_blog;
// show databases;
// exit;
// node ./database/actions/db-connect.js


// https://stackoverflow.com/questions/14235362/mac-install-and-open-mysql-using-terminal

// Uninstall mysql
// https://gist.github.com/vitorbritto/0555879fe4414d18569d

