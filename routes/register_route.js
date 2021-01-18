const express = require('express')
const router=express.Router()
const Register=require('../model/register_model')

router.post('/register',function(req,res){
    const name = req.body.name
    const phone = req.body.phone
    const address = req.body.address
    const email = req.body.email
    const password = req.body.password
    const confirmPassword = req.body.confirmPassword

    const register = new Register({
        name:name,
        phone:phone,
        address:address,
        email:email,
        password:password,
        confirmPassword:confirmPassword
    })
    register.save()
})
// for delete
router.delete('/deleteRegister/:id',function(req,res){
    const id = req.params.id;
    Register.deleteOne({_id:id}).then(function(){
        res.send("Deleted")
    })
})

// for update
router.put('/updateRegister/:id',function(req,res){
    const id = req.params.id
    const name = req.body.name
    const phone = req.body.phone
    const address = req.body.address
    const email = req.body.email
    const password = req.body.password

    Register.findByIdAndUpdate(id, 
        {$set : {
        name : name,
        phone : phone,
        address : address,
        email : email,
        password : password
    }}
        
        ).then(function(){
        res.send("Updated ")
    })
})
module.exports=router;