import express from 'express'
import { getAll,getById,postProduct,remove,update } from '../controllers/product.controller.js'
const router = express.Router()

router.get('/',getAll)
router.get('/:productId',getById)
router.post('/:productId',postProduct)
router.delete('/:productId',remove)
router.put('/:productId',update)
export default router



//without controller
// router.get('/',(req,res)=>{
//     res.json({
//         message:'product fetched',
//         data:['fan','ac','tv']
//     })
// })


// router.post('/',(req,res)=>{
//     res.json({
//         message:'post method ',
//         data:['fan','ac','heater','tv']
//     })
// })
// router.get('/:productId',(req,res)=>{
//     const {productId} = req.params
//     res.json({
//         message:`product with id ${productId} fetched`,
//         data:{
//             productId:productId,
//             title:'fan',
//             price:1400,
//             category:'electronics',
//         }
//     })
// })


// router.delete('/:productId',(req,res)=>{
//     const productId= req.params.productId
//     const query = req.query
//     console.log(query)
//     res.json({
//         message:`product with id ${productId} deleted`,
//     })
// })


// router.put('/:productId',(req,res)=>{
//     const productId = req.params.productId
//     const query = req.query
//     console.log(query)
//     res.json({
//         message:`produt with id ${productId} updated`,
//     })
// })


