import React from 'react';
import {useSelector} from 'react-redux'
import StudentListing from './StudentListing';
import StudentCreate from './StudentCreate';
import { Link } from 'react-router-dom';


const AllStudents = ()=>{
  const {students, campuses} = useSelector(state=>state);
  const enrolledStudents = students.filter(student=>student.campusId)
  return (
    <>
    <h3>Enrolled Students</h3>
    <h5><Link to ={'/students/page/0'} className='viewLink'> View By Page </Link></h5>
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