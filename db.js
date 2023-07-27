const gada =require('pg').Pool;

const pool = new gada({
  host: 'localhost',
  port:5432,
  user: 'postgres',
  database:"bookdb",
  password:'react2022',
});

pool.connect((err)=>{
    if(err){
        console.log('your connection is faile',err)
    }else{
        console.log('your connection is success')
    }
})

module.exports=pool;