const express = require('express');

const app = express();
const port = process.env.PORT || 4500;


app.set('view engine', "hbs");
app.use(express.static("./public"));

app.get('/', (req, res)=>{
    res.render('index');
})



app.listen(port, ()=> console.log("app started"));