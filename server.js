const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyparser = require("body-parser");
const cors = require('cors');

const userRoute = require('./routes/userRoutes');

// Making app
const app = express();



// Bodyparser middleware
app.use(express.json());
app.use(cors());
const port = 5000;
app.use(bodyparser({extended:true}));        



// DB connect
mongoose.connect('mongodb://localhost:27017/pass-guard', { useNewUrlParser: true, 
 useUnifiedTopology: true }).then(() => 
    console.log('MongoDB Connected...')).catch(error => console.log(error));


 // Routes
 app.use('/api/users', userRoute);



app.listen(port, ()=>{
    console.log(`server started at ${port}`);
})