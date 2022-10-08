import React from 'react';
import { Link,useLocation } from 'react-router-dom';

const Nav = ({campuses,students})=>{
  const {pathname} = useLocation();
  
  const selected = (path)=>{
    return  pathname === path ? 'selected' : ''
  };

  return (
    <nav>
      <Link to='/'><img src='../public/NH_logo_white.png'/></Link>
      <Link to='/' className= { selected('/') }> HOME</Link>
      <Link to='/campuses' className= { selected('/campuses') }>ALL CAMPUSES ({campuses.length})</Link>
      <Link to='/students' className ={ selected('/students') }>ENROLLED STUDENTS ({students.filter(student=>student.campusId).length})</Link>
      <Link to='/search' className ={ selected('/search') }>SEARCH</Link>
    </nav>
  )

};

export default Nav;
