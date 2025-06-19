export const getAll = (req,res)=>{
    res.json({
        message:'product fetched',
        data:['fan','ac','tv']
    })
}

export const getById = (req,res)=>{
    const {productId} = req.params
    res.json({
        message:`product with id ${productId} fetched`,
        data:{
            productId:productId,
            title:'fan',
            price:1400,
            category:'electronics',
        }
    })
}


export const postProduct = (req,res)=>{
    res.status(201).json({
        message:'product post',
        data:[]
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