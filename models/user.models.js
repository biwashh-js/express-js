import mongoose from "mongoose";
export const userSchema = new mongoose.Schema({
        name:{
            type:String,
            required:true,
            trim:true,
        },
        email:{
            type:String,
            required:[true,'email is requires'],
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
