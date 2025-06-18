import express from 'express'

const app = express()

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/html')
    res.setHeader('Cache-Control','No-Cache')
    res.send('<h1>home</home>')
})
app.post('/',(req,res)=>{
    res.send('<h1>home post </h1>')
})
app.get('/about',(req,res)=>{
    res.send('<h1>about</1>')
})
app.post('/about',(req,res)=>{
    res.send('<h1>about post</h1>')
})
app.get('/services',(req,res)=>{
    res.send('<h1>services</h1>')
})
app.post('/services',(req,res)=>{
    res.send('<h1>services post</1>')
})

app.get('/user',(req,res)=>{
    res.send('<h1>user</h1>')
})


app.delete('/user',(req,res)=>{
    res.send('<h1>Delete user')
})

//dynamic routing
app.get('/user/:id',(req,res)=>{
    const id = req.params.id
    const query = req.query
   console.log(query)
    res.send(`<h1>user ${id}</h1>`)
})

app.listen(8080,()=>{
    console.log('server is running at http://localhost:8080')
})
