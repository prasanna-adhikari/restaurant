const mongoose = require('mongoose')

const Register=mongoose.model('Register',{
    name:{
        type:String,
    },
    phone:{
        type:String,
    },
    address:{
        type:String,
    },
    email:{
        type:String
    },
    password:{
        type:String,
    },
    confirmPassword:{
        type:String
    }
})
module.exports=Register