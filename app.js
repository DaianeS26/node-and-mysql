const faker = require('faker');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',     // your root username
  database : 'join_us'   // the name of your db
});


//SELECTING DATA

// var q = 'SELECT * FROM users';

// connection.query(q, function (error, results, fields) {
//    if (error) throw error;
// 	console.log(results[1].email);
// });


// const q = 'SELECT COUNT(*) AS total FROM users';

// connection.query(q, function (error, results, fields) {
//    if (error) throw error;
// 	console.log(results[0].total);
// });


//INSERTING DATA

// var q = 'INSERT INTO users (email) VALUES ("baby_the_dog@gmail.com")';
 
// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });


//INSERTING DATA TAKE 2

// const person = { email: 'daniel_calderon@gmail.com'};

// connection.query('INSERT INTO users SET ?', person, function (error, results, fields) {
//    if (error) throw error;
// 	console.log(results);
// });

//INSERTING DATA WITH FAKER

// const person = {
// 	email: faker.internet.email(),
// 	created_at: faker.date.past()
// };

// connection.query('INSERT INTO users SET ?', person, function (error, results, fields) {
//    if (error) throw error;
// 	console.log(results);
// });

// INSERTING BULK DATA

const data = [];
for (let i = 0; i < 500; i++){
	data.push([
		faker.internet.email(),
		faker.date.past()
	]);
}

// console.log(data);

const q = 'INSERT INTO users (email, created_at) VALUES ?';

connection.query(q, [data], function (error, results, fields) {
   if (error) throw error;
	console.log(results);
});


connection.end();
