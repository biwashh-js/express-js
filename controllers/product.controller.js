import customError from "../middleware/err-handler-middleware.js"
const product =[]


export const getById = (req,res)=>{
    const {productId} = req.params
    res.json({
        message:`product with id ${productId} fetched`,
        data: product
    })
}


export const postProduct = (req,res,next)=>{
    try{
        const{name,price,category} = req.body
        if(!name){
            throw new customError('name is required',400)
        }

         if(!price){
            throw new customError('price is required',400)
        }
         if(!category){
            throw new customError('category is required',400)
        }
     product.push(req.body)
    console.log(req.body)
    res.status(201).json({
        message:'product is created',
        success:true,
        status:'success',
        data:{...req.body}
    })
    }  catch(error){
        next(error)
    }
   
}

export const getAll = (req,res)=>{
    res.json({
        message:'product fetched',
        data:product
    })
}

export const remove = (req,res)=>{
    const productId= req.params.productId
    const query = req.query
    console.log(query)
    res.json({
        message:`product with id ${productId} deleted`,
    })
}

export const update = (req,res)=>{
    const productId = req.params.productId
    const query = req.query
    console.log(query)
    res.json({
        message:`produt with id ${productId} updated`,
    })
}