const { STRING, UUID, UUIDV4, DECIMAL, VIRTUAL } = require("sequelize");
const {conn} = require('.')


const Student = conn.define('student', {
  id:{
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true
  },
  firstName:{
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  lastName:{
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  fullName:{
    type: VIRTUAL,
    get(){
      return `${this.firstName} ${this.lastName}`;
    }
  },
  email:{
    type: STRING,
    allowNull:false,
    unique: true,
    validate:{
      notEmpty:true,
      isEmail: {
        msg:'Not a valid Email'}
    }
  },
  imageUrl:{
    type: STRING,
    validate: {
      isURL: {
        msg: 'Not a valid URL',
        protocols: ['https'],
        require_protocol: true
      }
    }
  },
  gpa:{
    type: DECIMAL,
    validate:{
      max:4.0,
      min:0.0
    }
  } 
})

Student.beforeCreate((student) => {
  student.firstName =
    student.firstName[0].toUpperCase() + student.firstName.slice(1).toLowerCase();
  student.lastName =
    student.lastName[0].toUpperCase() + student.lastName.slice(1).toLowerCase()
  student.gpa = parseFloat(student.gpa).toFixed(1)
})

module.exports = Student