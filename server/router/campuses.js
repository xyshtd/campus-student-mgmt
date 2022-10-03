const router = require('express').Router();
const { Campus } = require('../db/associations');

/*---------URL Prefix: /api/campuses ----------*/

//get
router.get('/', async(req,res,next)=>{
  try{
    res.send(await Campus.findAll({order:[['name','ASC']]}))
  }
  catch(ex){
    next(ex)
  }
})

//post
router.post('/', async(req,res,next)=>{
  try{
    res.status(201).send(await Campus.create(req.body))
  }
  catch(ex){
    next(ex)
  }
})

//put
router.put('/:id', async(req,res,next)=>{
  try{
    const campus = await Campus.findByPk(req.params.id)
    await campus.update(req.body)
    res.send(campus)
  }
  catch(ex){
    next(ex)
  }
})

//delete
router.delete('/:id', async(req,res,next)=>{
  try{
    const campus = await Campus.findByPk(req.params.id)
    await campus.destroy()
    res.sendStatus(204)
  }
  catch(ex){
    next(ex)
  }
})

module.exports = router