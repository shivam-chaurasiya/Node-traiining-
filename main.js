require('dotenv').config();
const express = require("express");
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const Dog = require('./models/user')

const app = express();

connectDB();


const dogs = [
    {name:"husky", breed:"husky" },
    {name:"sam", breed:"Lab"}
]

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get("/", (req, res) => {
    const dogs = Dog.find((err, dogs) =>{
        console.log("Dogs:",dogs)
        res.json(dogs)});
    });
  

app.get("/service/:id", (req, res) => res.send(`Hello World ${req.params.id}`));

app.post("/dogs",(req,res) =>{
    console.log(req.body)
    res.json({message:"ok"})
})

app.put("/dogs/:id",(req,res) =>{
    console.log(req.params.id)
    console.log(req.body)
    res.json({message:`updated dog ${req.params.id}`})
})

app.delete("/dogs/:id",(req,res) =>{
    console.log(req.params.id)
    res.json({message:`deleting dog ${req.params.id}`})
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});
