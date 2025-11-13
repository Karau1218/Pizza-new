//Import the express module
import express from 'express';
import mysql2 from 'mysql2'; // import for mysql




//create an instance of an Express application
const app = express();

//Define the port number where our server will listen
const PORT = 3000;

// Enable static file serving
app.use(express.static('public'));

// install middlewear to parse form data (req.body)
app.use(express.urlencoded({extend3ed: true}));

// create an array to store orders
const orders = [];

app.set('view engine','ejs');

//Define a default "route" ('/')
//req: contains information about the incoming request
//res: allows us to send back a response to the client
app.get('/', (req, res) => {
    // Send "Hello, World!" as a response to the client
    //let name = 'Poppa\'s Pizza';
    //res.send(`<h1>Welcome to ${name}!</h1>`);
   // res.sendFile(`${import.meta.dirname}/views/home.html`)
   res.render('home');
});

//define "contact us" route
app.get('/contact-us', (req, res) => {
    //res.sendFile(`${import.meta.dirname}/views/contact.ej`)
        res.render('contact')


})

//define "confirmation" route
app.get('/confirm', (req, res) => {
    //res.sendFile(`${import.meta.dirname}/views/confirmation.html`)
    res.render('confirmation')

})


// for admin route to a new different page
//define "admin" route
app.get('/admin', (req, res) => {

    //res.send(orders);
    //res.sendFile(`${import.meta.dirname}/views/admin.html`)
res.render('admin', {orders}) // send the view to admin


})

// for submit-order route to a new different page
//define "submit" route // POST ROUTE
app.post('/submit-order', (req, res) => {
    //console.log(req.body);
    //res.sendFile(`${import.meta.dirname}/views/confirmation.html`)

// create a JSON object to store the data
const order = {
  firstname: req.body.firstname,
  lastname: req.body.lastname,
  email: req.body.email,
  method: req.body.method,
  topings: req.body.topings,  
  size: req.body.size,
  comment: req.body.comment, 
  timestamp: new Date()
};

// Add order to array
orders.push(order);
console.log(orders);

res.render('confirmation', {order}) // returns the first name in the confirmations

})


// this is for it to show up on a different webiste
//Start the server and make it listen to the port specified above
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});