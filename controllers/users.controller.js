import customError from "../middleware/err-handler-middleware.js"
import mongoose from "mongoose"
import { userSchema } from "../models/user.models.js"
// const users = []

const User = mongoose.model('user',userSchema);

export const create = async (req,res,next)=>{
    try{
        const{name,email,password,phone} = req.body
        console.log(req.body)
        const user = await User.create({name,email,password,phone})
        res.status(201).json({
            message:'user registered.',
            status:'success',
            success:true,
            data:users,
        })
    }
    catch(error){
        next(error)
    }

}

export const getAll =async (req,res,next)=>{
    try{
        const users = await User.find()
        res.status(200).json({
        message:'user fetched',
        status:'success',
        success:true,
        data:users,
    })
    }
    catch(error){
    next(error)
}
}

// export const postUser = (req,res)=>{
//     res.status(201).json({
//         message:'user post',
//         data:[]
//     })
// }


export const getById = async (req,res,next)=>{
    const {id} = req.params
    try{
        const users = await User.findById(id)
        res.status(200).json({
        message:`user with ${id} fetched`,
        data:users
    })
}catch(error){
    next(error)
}
   
}

export const remove = async (req,res,next)=>{
    const {id }= req.params
    const query = req.query
    try{
        const deletedUser = await User.findByIdAndDelete(id)
        const updatedUsers = await User.find()
        res.status(200).json({
            message:`user with id ${id} deleted`,
            data:updatedUsers
        })
    }catch(error){
        next(error)
    }
}


export const update = async(req,res,next)=>{
    const {id}= req.params
    const query = req.query
    try{    
     const users = await User.findByIdAndUpdate(id)
    console.log(query)
    res.status(200).json({
        message:`user with ${id} updated`,
        data:users
    })
}catch(error){
    next(error)
}
}
