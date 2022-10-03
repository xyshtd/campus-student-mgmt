import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {deleteStudent} from '../../store/students';
import {Link, useNavigate} from 'react-router-dom';
import StudentCreate from './StudentCreate';

const StudentListing = ()=>{
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {students, campuses} = useSelector(state=>state);

  return (
    <div className='flexBox'>
      <div className='leftColumn'>
      <ul>
      {
        students.map( student => {
          const campus = campuses.find(campus=>campus.id===student.campusId) || {}
          return (
            <li key={ student.id } className='listing'>
              <button onClick={ ()=>dispatch(deleteStudent(student)) }>Delete</button>
              <button onClick={ ()=>navigate(`/students/${student.id}`) }>Edit</button>
              { student.fullName}
              <br />
              <span>Enrolled in {campus.name} </span>
              <span><Link to={`/students/${student.id}`}>View Student Details</Link></span>
            </li>
          );
        })
      }
    </ul>
    </div>
    <StudentCreate/>
  </div>
  )
}

export default StudentListing