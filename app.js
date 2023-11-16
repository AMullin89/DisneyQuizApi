const express = require('express');

const db = require('./database')

const princessRoutes = require('./routes/princess-routes');
const enableCors = require('./middlewares/cors')

const app = express();
app.use(enableCors);
app.use(express.json())

app.use(express.urlencoded({extended: true}));

app.use(princessRoutes);



db.connectToDatabase().then(function(){
    app.listen(3000);
})
.catch(function (error){
    console.log('Failed to connected to the database');
    console.log(error);
})
