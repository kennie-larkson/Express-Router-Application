const express = require('express');
const app = express();
// const indexRoute = require('./routes/index.js');
// const aboutRoute = require('./routes/about.js');
   const routes = require('./routes/index.js');
   

// app.set("view engine","jade")
app.use('/', routes);
app.use('/About', routes);

app.listen(5050,(error)=>{
    if(error){
        console.log(error);
    }
    console.log("Server running on port: 5050")
});