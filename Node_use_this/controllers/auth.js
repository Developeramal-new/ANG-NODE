const express = require('express')

const router = express.Router()

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const user = require('../models/user')
const check = require('../middleware/check-auth')

router.post("/register", (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then(hash => {
      const post = new user({
          phone : req.body.phone,
          password : hash,
          email : req.body.email,
          fname : req.body.fname,
          lname : req.body.lname,
          age : req.body.age,
          updated : new Date()
      });
      //.toLocaleString("en-US", {timeZone: "Asia/Kolkata"})
      post.save().then(result => {
          res.status(201).json({
            message: 'User created',
            result: true
          });
      })
      .catch(err => {
          res.status(500).json({
              message: err.message, result: false
          })
      })
    })
  
})
router.post("/login", (req, res, next) => {
    let perc = null; 
  user.findOne({phone: req.body.phone}).then(per => {
      if(!per){
          return res.status(200).json({
              message : "User not found. Sign up with us.", token: null, admin: false
          })
      }
      perc = per
      //console.log(perc.updated.toLocaleString("en-US", {timeZone: "Asia/Kolkata"}))
      return bcrypt.compare(req.body.password, per.password)
  })
  .then(result => {
      let admin = false;
      if(!result){
          return res.status(200).json({
              message : "Wrong Password. Try resetting the password", token: null, admin: admin
          })
      }
      if(perc.phone == '8056182106'){
          admin = true;
      }
      const token = jwt.sign(
          {
              userid : perc.phone,
              id: perc._id
          },
          'secret_code',
          {
              expiresIn: "1h"
          }
      )
      res.status(200).json(
          { token: token, message: "Successfull", admin: admin}
      )
  })
  .catch(err => {
      return res.status(404).json({
          message : err.message, token: null, admin: false
      })
  })
});
router.get("/users", (req, res, next) => {
  user.find().then(doc => {
      console.log(doc)
      res.status(200).json({
          message: 'Users found successfully',
          users: doc
        });
  })
  
});

module.exports = router;