const Dog = require("../models/user");

const userget = (req, res) => {
          const dogs = Dog.find((err, dogs) =>{
            console.log("Dogs:",dogs)
            res.json(dogs)});
        }   

const userpost = (req,res) =>{
    const dog = new Dog({
        name: req.body.name,
        breed:req.body.breed,
        age:req.body.age
    })
    dog.save((err,dog) =>{
        res.json(dog);
    })
}

const userput = (req,res) =>{
    Dog.findByIdAndUpdate(req.params.id, req.body,(err) =>{
        res.json({message:`updated dog ${req.params.id}`})
    })
   
}

const userdelete = (req,res) =>{
    Dog.findByIdAndDelete(req.params.id, (err) =>{
        res.json({message:`deleting dog ${req.params.id}`})
    })
}

module.exports = {
    userget,
    userpost,
    userput,
    userdelete
}