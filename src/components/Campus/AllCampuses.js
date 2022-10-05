import React from 'react';
import {useSelector} from 'react-redux'
import CampusCreate from './CampusCreate';
import CampusListing from './CampusListing';

const AllCampuses = ()=>{
  const {campuses, students} = useSelector(state=>state);
  
  return (
    <>
      <h3>All Campuses</h3>
      <div className='flexBox'>
        <div className='leftColumn'>
        <CampusListing campuses={campuses} students={students}/>
        </div> 
        <CampusCreate/>
      </div>
    </>
  )
}

export default AllCampuses