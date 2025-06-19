export const getAll =(req,res)=>{
    res.status(200).json({
        message:'user fetched',
        data:[]
    })
}

export const postUser = (req,res)=>{
    res.status(201).json({
        message:'user post',
        data:[]
    })
}


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
