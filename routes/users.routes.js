import express from 'express'
import { getAll,getById,postUser,remove,update } from '../controllers/users.controller.js'
const router = express.Router()

//route middleware
const routeMiddleware =((req,res,next) =>{
    console.log('route middleware')
    next()
})

router.get('/',routeMiddleware,getAll)
router.post('/',postUser)
router.get('/:id',getById)
router.delete('/:id',remove)
router.put('/:id',update)

export default router



// without controller
// router.get('/',(req,res)=>{
//     res.json({
//         message:'user fetched',
//         data:[]
//     })
// })


// router.get('/:id',(req,res)=>{
//     const {id} = req.params
//     res.json({
//         message:`user with ${id} fetched`,
//         data:{
            
//             id:id,
//             name:'abc'
//         }
//     })
// })

// router.delete('/:id',(req,res)=>{
//     const id= req.params.id
//     const query = req.query
//     console.log(query)
//     res.json({
//         message:`user with ${id} deleted`,
//     })
// })


// router.put('/:id',(req,res)=>{
//     const id = req.params.id
//     const query = req.query
//     console.log(query)
//     res.json({
//         message:`user with ${id} updated`,
//     })
// })
