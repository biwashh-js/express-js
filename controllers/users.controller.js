import customError from "../middleware/err-handler-middleware.js"
const users = []
export const create = (req,res,next)=>{
    try{
        const{name,email,password} = req.body
        if(!name){
            throw new customError('name is required',400) 
        }
           if(!email){
           throw new customError('email is required',400) 
        }
           if(!password){
            throw new customError('password is required',400) 
        }

        console.log(req.body)
        users.push(req.body)
        res.status(201).json({
            message:'user is created',
            status:'success',
            success:true,
            data:{...req.body}
        })
    }
    catch(error){
        next(error)
    }

}

export const getAll =(req,res)=>{
    res.status(200).json({
        message:'user fetched',
        data:users
    })
}

// export const postUser = (req,res)=>{
//     res.status(201).json({
//         message:'user post',
//         data:[]
//     })
// }


export const getById = (req,res)=>{
    const {id} = req.params
    res.status(200).json({
        message:`user with ${id} fetched`,
        data:{
            
            id:id,
            name:'ram'
        }
    })
}

export const remove = (req,res)=>{
    const id= req.params.id
    const query = req.query
    console.log(query)
    res.status(200).json({
        message:`user with ${id} deleted`,
    })
}


export const update = (req,res)=>{
    const id = req.params.id
    const query = req.query
    console.log(query)
    res.status(200).json({
        message:`user with ${id} updated`,
    })
}
