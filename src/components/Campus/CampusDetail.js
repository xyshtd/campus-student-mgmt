import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Link, useParams} from 'react-router-dom';
import CampusUpdate from './CampusUpdate';

const CampusDetail = ()=>{
  const dispatch = useDispatch();
  const {id} = useParams()
  const {campuses, students} = useSelector(state=>state);
  const {name,address,description,imageUrl} = campuses.find(campus=>campus.id === id*1) || {}
  const campusStudents = students.filter(student=>student.campusId === id*1) || {}
  
  if (id){
    return (
    <>
      <div className='listing'>
        <h2>{name}</h2>
        <h4>Address: {address}</h4>
        <div className='detailCard'>
          <img src={imageUrl} className ='campusImg' alt='campus image'/>
          <p>{description}</p>
        </div>
        
        <h2>Students Enrolled in This Campus</h2>
        <ul>
          {campusStudents.map(student=>{
            return(
              <li key = {student.id}>
                <Link to = {`/students/${student.id}`}>
                {student.fullName}
                </Link>
              </li>)
            })
          }
        </ul>
      </div>
    <CampusUpdate/>
    </>
    )
  }
}

export default CampusDetail