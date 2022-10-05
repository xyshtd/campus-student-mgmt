import React from 'react';
import {useSelector} from 'react-redux'
import CampusCreate from './CampusCreate';
import CampusListing from './CampusListing';

const TopCampuses = ()=>{
  const {campuses, students} = useSelector(state=>state);

  const filetered = campuses
  return (
    <>
      <h3>Top Campuses</h3>
      <CampusListing campuses={filetered} students={students}/>
    </>
  )
}

export default TopCampuses