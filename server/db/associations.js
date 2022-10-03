const Student = require('./Student');
const Campus = require('./Campus')

Campus.hasMany(Student);
Student.belongsTo(Campus);

/*  Add a limitation to the number of students who can be enrolled at the campus and enforce the requirement using sequelize hooks */
/*  Add a limitation to the number of students who can be enrolled at the campus and enforce the requirement using sequelize hooks */
/*  Add a limitation to the number of students who can be enrolled at the campus and enforce the requirement using sequelize hooks */

module.exports = {
  Student,
  Campus
};