const express = require('express');
const User = require('../models/User');
const Account = require( '../models/Accounts');
const router = express.Router();


router.post('/register', (req, res) => {

      try {

            const { username, email, password } = req.body;

            // Simple validation
            if (!username || !email || !password) {
                  return res.status(400).json({ msg: 'Please complete all fields.' });
            }

            User.findOne({ username }).then((user) => {
                  if (user) return res.status(400).json({ msg: 'User already exists.' });
            });


            User.create({ username, email, password });
            //const newUser = { username,  email,   password  };


            res.status(201).json({ messege: "registered successfully" });
      } catch (err) {
            res.send(500).json({ messege: "something went  wrong on server side " });
      }
})


//Login Request 

router.post('/login', (req, res) => {
      try {

            const { username, password } = req.body;

            if (!username || !password) {
                  return res.status(400).json({ msg: 'Please Provide The Credentials.' });
            }


            User.findOne({ username }).then((user) => {
                  if(user){
                        if (password === user.password) {
                              res.status(200).send({ messege: "Logged In Successfuly..." });
                        }else{
                           return res.status(404).send({ messege: "Incorrect Password..." });  
                        }
                  }else{
                    return res.status(404).send({ messege: "User Not Found" });
                  }
            }).catch(err =>{
                  return res.status(400).json({messege:"Something Went Wrong on server side"})
            })


      }catch(err){
                return  res.send(500).json({ messege: "something went  wrong on server side " });
            }
      })


// Add Accountne      
            
router.post('/account' , (req , res)=>{

      const { username , account , password  } = req.body;

      try{

            if(!username || !account || !password){
                  return res.status(400).json({messege:"Fields Cant be Empty"});
            }
            Account.create({username , account , password }).then((account)=>{
                  if(account){
                        res.status(201).send({messege:"Account Added SuccessFully..."})
                  }
            }).catch(err =>{
            return res.status(500).json({messege:"Internal server Error , Accont cannot be added" , err});
            })

      }catch(err){
            return res.status(500).json({messege:"Internal server Error"});
      }
})

//  Get All Account 

router.get(`/getaccount/:id` , (req , res)=>{

      try{

          const { id } = req.params;
         
          Account.findOne({id}).then((data)=>{
                res.status(200).send({data});
          }).catch(err =>{
                return res.status(404).json({messege:" Data Not Found..."});
          })

      }catch(err){
            return res.status(500).json({messege:"Internal server Error"});
      }
})



module.exports = router;