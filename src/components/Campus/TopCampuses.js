import React from 'react';
import {useSelector} from 'react-redux'
import CampusListing from './CampusListing';
import StudentListing from '../Student/StudentListing';

const TopCampuses = ()=>{
  const {campuses, students} = useSelector(state=>state);
  const topStudents = students.sort((a,b)=>b.gpa-a.gpa).slice(0,5)
  const topCampuses = campuses.sort((a,b)=>b.totalGpa - a.totalGpa).slice(0,3)
  
  return (
    <>
      <h3>Top 3 Campuses</h3>
      <CampusListing campuses={topCampuses} students={students}/>
      <h3>Top 5 Students</h3>
      <StudentListing campuses={campuses} students={topStudents}/>
    </>
  )
}

export default TopCampuses