const Pool = require('pg').Pool

const pool = new Pool({
  host: 'localhost',
  port:5432,
  user: 'postgres',
  database:"bookdb",
  password:'password',
});

pool.connect((err)=>{
    if(err){
        console.log('your connection is faile',err)
    }else{
        console.log('your connection is success')
    }
})

module.exports=pool;