const Student = require('./Student');
const Campus = require('./Campus')

Campus.hasMany(Student);
Student.belongsTo(Campus);

Student.beforeSave(async(student)=> {
  const students = await Student.findAll({
    where: {
      campusId: student.campusId
    }
  });
  if(students.length === 15){
    throw ('reached the limit of the number of students who can be enrolled at the campus: 15');
  }
});


module.exports = {
  Student,
  Campus
};
