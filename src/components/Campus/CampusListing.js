import React from 'react';
import {useDispatch} from 'react-redux'
import {deleteCampus} from '../../store/campuses';
import {Link, useNavigate} from 'react-router-dom';

const CampusListing = ({campuses,students})=>{
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  return (
    <ul >
    {
      campuses.map( campus => {
        const enrolled = students.filter(student=>student.campusId===campus.id)
        return (
          <li key={ campus.id } className='listing'>
            <button onClick={ ()=>dispatch(deleteCampus(campus)) }>Delete</button>
            <button onClick={ ()=>navigate(`/campuses/${campus.id}`) }>Edit</button>
            { campus.name }
            <br />
            <span>{enrolled.length} enrollments </span>
            <span><Link to={`/campuses/${campus.id}`}>View Campus Details</Link></span>
          </li>
        );
        })
      }
    </ul>
  )
}

export default CampusListing