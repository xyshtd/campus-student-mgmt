const {Campus, Student} = require('./associations');
const {faker} = require('@faker-js/faker');

//fake data generator
const generateCampuses = (campusNum)=>{
  const campuses = [];
  while(campuses.length<campusNum){
    campuses.push(
      {
        name:`${faker.address.state()} Campus `,
        address:`${faker.address.buildingNumber()} ${faker.address.street()} Street`,
        description:faker.lorem.paragraphs(2),
        imageUrl:faker.image.city()

      }
    )
  }
  return campuses
};

const generateStudents = (studentNum,campusNum)=>{
  const students = [];
  while(students.length<studentNum){
    students.push(
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        imageUrl: faker.image.avatar(),
        gpa: parseFloat(2+2*Math.random()).toFixed(1),
        campusId: Math.ceil(campusNum*Math.random())
      }
    )
  }
  return students
};

//seed
const seed = async (studentNum,campusNum) => {
  await Promise.all(generateCampuses(campusNum).map(data=>Campus.create(data)))
  return Promise.all(generateStudents(studentNum, campusNum).map(data=>Student.create(data)))
};

module.exports ={
 seed
};