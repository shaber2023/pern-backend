const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();
const pool = require('./db')
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',async(req,res,next)=>{
    try {
        const data = await pool.query('SELECT * FROM book')
        res.status(200).json({message:'this is your all data',data:data.rows})
    } catch (error) {
        next(error)
    }
})

app.get('/:id',async(req,res)=>{
    try {
        const{id}=req.params
        const data = await pool.query('SELECT * FROM book WHERE id=$1',[id])
        res.status(200).json({message:'your singal data get',data:data.rows})
    } catch (error) {
        console.log(error)
    }
})


app.post('/',async(req,res)=>{
    try {
        const{name,description}=req.body
        const id = uuidv4()
        const mydata = await pool.query("INSERT INTO book (id,name,description) VALUES ($1, $2, $3)RETURNING *",[id,name,description])
        res.status(201).json({message:'your data is added',data:mydata.rows})
    } catch (err) {
        console.log('my error',err)
    }
})

app.put('/:id',async(req,res)=>{
    try {
        const{id}=req.params
        const{name,description}=req.body;
        const mydata = await pool.query('UPDATE book SET name=$1, description=$2  WHERE id=$3 RETURNING *',
        [name,description,id])
        res.status(200).json({message:'your info is updated',data:mydata.rows})
    } catch (error) {
        console.log(error)
    }
})


app.delete('/:id',async(req,res)=>{
    try {
        const{id}=req.params
         await pool.query('DELETE FROM book WHERE id=$1',[id])
        res.status(200).json({message:'your info is deleted'})
    } catch (error) {
        console.log(error)
    }
})


app.use((req, res, next) => {
    next("route not found");
  });
  
  app.use((err, req, res, next) => {
    res.status(403).json({ message: err });
  });

app.listen(port,()=>{
    console.log(`your server is raning http://localhost:${port}`)
})