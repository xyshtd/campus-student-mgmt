const router = require('express').Router();
const { Student } = require('../db/associations');

/*---------URL Prefix: /api/students ----------*/

//get
router.get('/', async(req, res, next)=> {
  try {
    res.send(await Student.findAll({order:[['createdAt','DESC']]}));
  }
  catch(ex){
    next(ex);
  }
});

//post
router.post('/', async(req, res, next)=> {
  try {
    res.status(201).send(await Student.create(req.body));
  }
  catch(ex){
    next(ex);
  }
});

//put
router.put('/:id', async(req, res, next)=> {
  try {
    const student = await Student.findByPk(req.params.id);
    await student.update(req.body);
    res.send(student);
  }
  catch(ex){
    next(ex);
  }
});

//delete
router.delete('/:id', async(req, res, next)=> {
  try {
    const student = await Student.findByPk(req.params.id);
    await student.destroy();
    res.sendStatus(204);
    
  }
  catch(ex){
    next(ex);
  }
});

module.exports = router