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
        <h2>Search</h2>
        <input className ='searchBar'value={ filter || ''} placeholder='Search by name - not case sensitive :)' onChange={ev => navigate(`/search/${ev.target.value}`)} />
      </div>
      <div className='flexBox'>
        <div className = 'leftColumn'>
          <h4 className = 'search'>Campuses Search Results</h4>
          <CampusListing campuses={ filteredCampuses } students={students}/>
        </div>
        <div className = 'rightColumn'>
          <h4 className = 'search'>Students Search Results</h4>
          <StudentListing campuses={ campuses } students={filteredStudents}/>
        </div>
      </div>
    </div>
  );
};

export default Search;