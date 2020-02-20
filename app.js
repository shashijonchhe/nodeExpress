const express = require('express');
const mainfile = express();
const morgan = require('morgan');
const postRoutes = require('./routes/post');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


dotenv.config()
mongoose.connect(
    process.env.MONGO_URI,
    {useNewUrlParser: true,
    useUnifiedTopology: true,
    })
.then(()=>console.log('Database connected'))

mongoose.connection.on('error',err=>{
    console.log(`Database connection error=${err.message}`)
})




mainfile.use(morgan('dev'));
mainfile.use(bodyParser.json());
mainfile.use('/',postRoutes);




const port=process.env.PORT||8080;
mainfile.listen(port,()=>{
    console.log(`App is running on:${port}`)
});

