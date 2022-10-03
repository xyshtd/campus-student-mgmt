const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan')

//middlewares
app.use('/dist', express.static('dist'));
app.use('/public', express.static('public'));
app.use(morgan('tiny'))
app.use(express.json());

//api routes
app.use('/api', require('./router/api'));

//main route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
});

//error handling
app.use((req, res, next) => {
  const err = Error('page not found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send(err);
  //console.error(err.stack);
  //res.status(err.status || 500).send(err.message || 'Internal server error.');
})

module.exports = app;

/*Error Handing To Be Refactored
catch (err) {
    if (err.name === 'SequelizeValidationError') {
       const errors = err.errors

      const errorList = errors.map(e => {
        let obj = {}
        obj[e] = e.message
        return obj;
      })
      
      return res.status(400).json({
        success: false,
        msg: errorList
      })
    } else {
      next(new ErrorResponse(`Sorry, could not save ${req.body.name}`, 404))
    }
  }
*/