import React from 'react';
import {useDispatch} from 'react-redux'
import {deleteStudent} from '../../store/students';
import {Link, useNavigate} from 'react-router-dom';

const StudentListing = ({campuses,students})=>{
  const dispatch = useDispatch();
  const navigate = useNavigate()
  return (
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
  )
}

export default StudentListing
// if want unerolled in the view
//<span>Enrolled in {campus.name || <span className='warning'>no campus</span>} </span>