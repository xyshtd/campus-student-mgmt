const { STRING, TEXT, CHAR} = require("sequelize");
const {conn} = require('.')


const Campus = conn.define('campus', {
  name: {
    type: STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
      len: [1, 55]
    }
  },
  address: {
    type: CHAR,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description:{
    type: TEXT,
  },
  imageUrl:{
    type: STRING,
    validate: {
      isURL: {
        msg: 'not a valid url',
        protocols: ['https'],
        require_protocol: true
      }
    }
  },
})

module.exports = Campus;