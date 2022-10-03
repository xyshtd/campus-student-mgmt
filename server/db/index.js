const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/jpfp_student_campus',{logging:false})

module.exports = {
  conn
}