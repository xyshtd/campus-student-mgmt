const {conn} = require('./db')
const {seed} = require('./db/seed')
const app = require('./app');
const port = process.env.PORT || 3000;

const setup = async()=>{
  try{
    await conn.sync({force:true});
    await seed(80,8);//studentNum, campusNum
    app.listen(port, ()=> console.log(`listening on port ${port}`));
  }
  catch(ex){
    console.log(ex)
  }
}

setup();

//if(process.env.SYNC){}
//package.json
//"start:dev": "SYNC=true nodemon server",
// "start:dev:nosync": "nodemon server"
