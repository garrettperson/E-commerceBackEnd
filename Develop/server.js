const express = require('express');
const routes = require('./routes');

// const mysql = require('mysql2');
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'user',
//   password: '',
//   database: 'ecommerce_db'
// });
// connection.connect((err) => {
//   if (err) throw err;
//   console.log('Connected!');
// });

const sequelize = require('./config/connection');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync().then (() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
  