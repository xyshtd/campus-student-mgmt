import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {deleteCampus} from '../../store/campuses';
import {useLocation, Link, useNavigate} from 'react-router-dom';
import CampusCreate from './CampusCreate';

const CampusListing = ()=>{
  const dispatch = useDispatch();
  let {campuses, students} = useSelector(state=>state);
  const {pathname} = useLocation();
  const navigate = useNavigate()
  /* TO EDIT FOR HOMEPAGE */
  /* Add a home page which lists the top performing campuses based on the average gpa of the enrolled students */

  if (pathname === '/') campuses = campuses.filter(t =>t);
  
  return (
    <div className='flexBox'>
      <div className='leftColumn'>
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
      </div>
    <CampusCreate/>
  </div>
  )
}

export default CampusListing