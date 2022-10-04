const Student = require('./Student');
const Campus = require('./Campus')

Campus.hasMany(Student);
Student.belongsTo(Campus);

Student.beforeCreate(async(student)=> {
  const students = await Student.findAll({
    where: {
      campusId: student.campusId
    }
  });
  if(students.length === 10){
    throw 'reached the limit of the number of students who can be enrolled at the campus: 10';
  }
});


module.exports = {
  Student,
  Campus
};