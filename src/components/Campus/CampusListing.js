import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {deleteCampus} from '../../store/campuses';
import {Link, useNavigate} from 'react-router-dom';
import CampusCreate from './CampusCreate';

const CampusListing = ()=>{
  const dispatch = useDispatch();
  let {campuses, students} = useSelector(state=>state);
  const navigate = useNavigate()
  return (
    <>
    <h3>All Campuses</h3>
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
  </>
  )
}

export default CampusListing