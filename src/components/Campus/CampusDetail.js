import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Link, useParams} from 'react-router-dom';
import CampusUpdate from './CampusUpdate';
import { updateStudent } from '../../store/students';

const CampusDetail = ()=>{
  const dispatch = useDispatch();
  const {id} = useParams()
  const {campuses, students} = useSelector(state=>state);
  const {name,address,description,imageUrl} = campuses.find(campus=>campus.id === id*1) || {}
  const campusStudents = students.filter(student=>student.campusId === id*1)
  //console.log(campusStudents)
  // empty [] {} is truthy
  

  if (name){
    return (
    <>
      <div className='fullContainer'>
        <h2>{name}</h2>
        <h4>Address: {address}</h4>
        <div className='detailCard'>
          <img src={imageUrl} className ='campusImg' alt='campus image'/>
          <p>{description}</p>
        </div>
        {campusStudents == false ? <h4>No Students Enrolled in This Campus</h4> : <h2>Students Enrolled in This Campus</h2>}
        <ol>
          {
          campusStudents.map(student=>{
            return(
              <li key = {student.id}>
                 <button className='unregisterButton' onClick={ ()=>{
                  const updated = {
                    ...student,
                    campusId:null
                  }
                  dispatch(updateStudent(updated))
                  //students.sort((a,b)=>a.campusId - b.campusId) 
                  }}>
                  Unregister
                </button>
                <Link to = {`/students/${student.id}`}>
                {student.fullName}
                </Link>
              </li>
            )
            })
          }
        </ol>
      </div>
    <CampusUpdate/>
    </>
    )
  } 
}

export default CampusDetail