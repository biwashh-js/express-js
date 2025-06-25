import express from 'express'
import userRoutes from './routes/users.routes.js'
import productRoutes from './routes/products.route.js'
import { postProduct } from './controllers/product.controller.js'
import customError, { errorHandler } from './middleware/err-handler-middleware.js'

const app = express()

//using middleware
app.use(express.urlencoded({extended:true}))

//middleware
//category - custom , inbuilt  , third party


// - app level , - route level

//md1 - > md2 ->md3 
// app.use((req, res, next) => {
//     console.log('middleware 1')
//     next()
// })

// app.use((req, res, next) => {
//     console.log('middleware 2')
//     next()
// })

// app.use((req, res, next) => {
//     console.log('middleware 3')
//     next()
// })

// app.use((req, res, next) => {
//     console.log('middleware 4')
//     next()
// })


// app.use((req, res, next) => {
//     console.log('middleware 5')
//     next()
// })


// without using routes

// app.get('/user',(req,res)=>{
//     res.setHeader('Content-Type','text/html')
//     res.setHeader('Cache-Control','No-Cache')
//     res.send('<h1>home</home>')
// })
// app.post('/user',(req,res)=>{
//     res.send('<h1>home post </h1>')
// })

// app.get('/user',(req,res)=>{
//     res.send('<h1>user</h1>')
// })


// app.delete('/user',(req,res)=>{
//     res.send('<h1>Delete user')
// })

//dynamic routing
// app.get('/user/:id',(req,res)=>{
//     const id = req.params.id
//     const query = req.query
//    console.log(query)
//     res.send(`<h1>user ${id}</h1>`)
// })


// app.put('/user/:id',(req,res)=>{
//     const id = req.params.id
//     const query = req.query
//    console.log(query)
//     res.send(`<h1> put user ${id}</h1>`)
// })


//grouping
// app.route('/user/:id')
// .get((req,res)=>{
//      const id = req.params.id
//     const query = req.query
//    console.log(query)
//     res.send(`<h1>user ${id}</h1>`)
// })
// .put((req,res)=>{
//     const id = req.params.id
//     const query = req.query
//    console.log(query)
//     res.send(`<h1> put user ${id}</h1>`)
// })
// .delete((req,res)=>{
//     const id = req.params.id
//     const query = req.query
//    console.log(query)
//     res.send(`<h1> delete user ${id}</h1>`)
// })
// .post((req,res)=>{
//     const id = req.params.id
//     const query = req.query
//    console.log(query)
//     res.send(`<h1> post user ${id}</h1>`)
// })


//product

// app.get('/product/:id',(req,res,next)=>{
//     res.json({
//         message:'product fetched',
//         data:[]
//     })
// })

//using routes
app.get('/',(req,res)=>{
    res.status(200).json({
        message:`server is up and running`,
        success:true,
        status:`success`
    })
})
app.use('/users', userRoutes)
app.use('/products', productRoutes)


//error handler middleware

app.all('{*spalt}',(req, res, next) => {
    const message = `cannot ${req.method} on ${req.url}`
    const error = new customError(message,404)
    next(error)
})
app.listen(8080, () => {
    console.log('server is running at http://localhost:8080')
})


//error handler middleware
// error handler is not called itself like other,, we have to call it, to call it some parameter should be passed in next()

app.use(errorHandler)
