const dotenv = require('dotenv');
const mongoos = require('mongoose');
const express = require("express");
const app = express();



dotenv.config({path:'./config.env'})

require('./db/conn');

//read data in json format
app.use(express.json());

//all route of pages in this file
app.use(require('./router/auth'))
//const User = require('./model/userSchema');



const port = process.env.PORT || 3000;
//Middleware
const middleware = (req, res, next) => {
    console.log(`hello i am middleware`);
    next();
}
//
app.get('/', (req, res) => {
    res.send("Hello from the MERN Home page");
});

app.get('/about', middleware, (req, res) => {
    console.log(`hello i am about page`);
    res.send("Hello from the MERN about page");
});

app.get('/contact', (req, res) => {
    res.send("Hello from the MERN contact page");
});

app.get('/signin', (req, res) => {
    res.send("Hello from the MERN signin page");
});

app.get('/signup', (req, res) => {
    res.send("Hello from the MERN signup page");
});

app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})