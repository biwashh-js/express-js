import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
        name:{
            type:String,
            required:[true,'name is required'],
            trim:true,
        },
        email:{
            type:String,
            required:[true,'email is required'],
            unique:[true,'user already exist with provided email'],
            trim:true,

        },
        password:{
            type:String,    
            required:true,
            min:[4,'password must be least 5 char long']
        },
        phone:{
            type:String,
        }
    })
const User = mongoose.model('user',userSchema);
export default User