import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import CampusListing from '../Campus/CampusListing';
import StudentListing from '../Student/StudentListing';

const Search = ()=> {
  const { campuses, students } = useSelector(state => state);
  const navigate = useNavigate();
  const { filter } = useParams();
  
  const filteredCampuses = campuses.filter(item => !filter || item.name.toLowerCase().includes(filter.toLowerCase()));

  const filteredStudents = students.filter(item => !filter || item.fullName.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div >
      <div className = 'search'>
        <h4>Search</h4>
        <input value={ filter || ''} placeholder='filter' onChange={ev => navigate(`/search/${ev.target.value}`)} />
      </div>
      <div>
        <h4 className = 'search'>Campus Search Results</h4>
        <CampusListing campuses={ filteredCampuses } students={students}/>
        <h4 className = 'search'>Students Search Results</h4>
        <StudentListing campuses={ campuses } students={filteredStudents}/>
      </div>
    </div>
  );
};

export default Search;