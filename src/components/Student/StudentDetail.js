import React from 'react';
import { useSelector } from 'react-redux'
import { Link, useParams} from 'react-router-dom';
import StudentUpdate from './StudentUpdate';

const StudentDetail = ()=>{
  const {id} = useParams()
  const {campuses, students} = useSelector(state=>state);
  const {fullName,email,imageUrl,gpa} = students.find(student=>student.id === id) || {}
  const student = students.find(student=>student.id === id) || {}
  const campus  = campuses.find(campus=>campus.id === student.campusId) || {}
  
  return (
  <>
    <div className='fullContainer detailCard'>
      <img src={imageUrl} className = 'studentImg' alt='student image'/>
      <div>
        <h2>{fullName}</h2>
        <p>
        Enrolled in <Link to = {`/campuses/${campus.id}`}>{campus.name}</Link> <br />
        Email: {email} <br />
        GPA: {gpa} <br />
        </p>
      </div>
    </div>
    <StudentUpdate/>
  </>
  )

}

export default StudentDetail