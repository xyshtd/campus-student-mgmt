import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { Link, useNavigate} from 'react-router-dom';
import StudentListing from '../Student/StudentListing';
import {deleteCampus} from '../../store/campuses';


const TopCampuses = ()=>{
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {campuses, students} = useSelector(state=>state);
  const topStudents = students.sort((a,b)=>b.gpa-a.gpa).slice(0,10)
  
  const avgGpa = (campus) => {
    const campusStudents = students.filter(student=>student.campusId == campus.id) || {}
    const totalStudents = campusStudents.length
    if (!totalStudents) return 0
    else return (campusStudents.reduce((acc, cur) => acc + cur.gpa*1, 0) / totalStudents).toFixed(1) 
  };

  const topCampuses = campuses.sort((a,b)=>avgGpa(b)-avgGpa(a)).slice(0,3)

  return (
    <>
      <h5>As of {new Date().toLocaleDateString()}</h5>
      <h3>Top 3 Campuses</h3>
      <ul >
      {
        topCampuses.map( campus => {
          const enrolled = students.filter(student=>student.campusId===campus.id)
          return (
            <li key={ campus.id } className='listing'>
              <button onClick={ ()=>dispatch(deleteCampus(campus)) }>Delete</button>
              <button onClick={ ()=>navigate(`/campuses/${campus.id}`) }>Edit</button>
              { campus.name }
              
              <br />
              <span>{enrolled.length} enrollments </span> <span>Average GPA: {avgGpa(campus)}</span>
              <span><Link to={`/campuses/${campus.id}`}>View Campus Details</Link></span>
            </li>
          );
          })
        }
      </ul>
      <h3>Top 10 Students</h3>
      <StudentListing campuses={campuses} students={topStudents}/>
    </>
  )
}

export default TopCampuses