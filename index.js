const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Route = require('./routes/route');
const bodyParser = require('body-parser');

dotenv.config();

mongoose.connect(process.env.MONGO_URI,()=> console.log("Database is connected Successfully!"));

const port  = process.env.PORT

app.use(bodyParser.json());
app.use('/',Route);


app.listen(port, ()=> {
    console.log(`The Server is uo and Running on PORT ${port}`);
});