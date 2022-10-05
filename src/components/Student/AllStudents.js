import React from 'react';
import {useSelector} from 'react-redux'
import StudentListing from './StudentListing';
import StudentCreate from './StudentCreate';


const AllStudents = ()=>{
  const {students, campuses} = useSelector(state=>state);
  let enrolledStudents = students.filter(student=>student.campusId)
  return (
    <>
    <h3>All Students</h3>
    <div className='flexBox'>
      <div className='leftColumn'>
      <StudentListing campuses={campuses} students={enrolledStudents}/>
      </div> 
      <StudentCreate/>
    </div>
  </>
  )
}

export default AllStudents
