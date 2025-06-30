import customError from "../middleware/err-handler-middleware.js"
import mongoose from "mongoose"
import  User from "../models/user.models.js"
// const users = []



export const create = async (req,res,next)=>{
    try{
        const{name,email,password,phone} = req.body
        // if(!name){
        //     throw new customError('name is required',400)
        // }
        // if(!email){
        //     throw new customError('email is required',400)
        // }
        // if(!password){
        //     throw new customError('password is required',400)
        // }
        console.log(req.body)
        const users = await User.create({name,email,password,phone})
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

export const getAll = async (req,res,next)=>{
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

export const getById = async (req,res,next)=>{
    const {id} = req.params
    try{
        const users = await User.findById(id)
        if(!users){
            throw new customError('user not found',404);
        }

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
         if(!deletedUser){
            throw new customError('user not found',404);
        }
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
      if(!users){
            throw new customError('user not found',404);
        }
    
    const updatedUsers = await User.find()
    console.log(query)
    res.status(200).json({
        message:`user with ${id} updated`,
        data:updatedUsers
    })
}catch(error){
    next(error)
}
}
