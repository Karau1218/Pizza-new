//Import the express module
import express from 'express';
//create an instance of an Express application
const app = express();

//Define the port number where our server will listen
const PORT = 3000;

// Enable static file serving
app.use(express.static('public'));

//Define a default "route" ('/')
//req: contains information about the incoming request
//res: allows us to send back a response to the client
app.get('/', (req, res) => {
    // Send "Hello, World!" as a response to the client
    //let name = 'Poppa\'s Pizza';
    //res.send(`<h1>Welcome to ${name}!</h1>`);
    res.sendFile(`${import.meta.dirname}/views/home.html`)
});

//Start the server and make it listen to the port specified above
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});