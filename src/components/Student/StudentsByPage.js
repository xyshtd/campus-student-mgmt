import React from 'react';
import {useSelector} from 'react-redux'
import StudentListing from './StudentListing';
import StudentCreate from './StudentCreate';
import { Link, useParams} from 'react-router-dom';


const AllStudents = ()=>{
  const {students, campuses} = useSelector(state=>state);
  const enrolledStudents = students.filter(student=>student.campusId)
  /* Pagination elements */
  let { index } = useParams();
  index = index * 1
  const PAGE_SIZE = 10;
  const count = Math.ceil(enrolledStudents.length / PAGE_SIZE); 
  const pages = Array(count)
  .fill()
  .map((_, idx)=> {
    return {
      text: `Page ${ idx + 1}`,
      idx
    };
  });
  const start = PAGE_SIZE * index;
  const end = PAGE_SIZE * (index + 1);
  const studentsPerPage = students.slice(start, end);
  /* end of pagination elements */

  return (
    <>
    <h3>All Students   </h3>
    <h5><Link to ={'/students'}> View All </Link></h5>
    <nav className = 'Pagination'>
    <Link to={`/students/page/${index-1 > 0 ? index-1 : 0}`}> Prev</Link>
      {
        pages.map( page => {
          return (
            <Link
              key={ page.idx }
              to={`/students/page/${page.idx}`}
              className= { index === page.idx ? 'selected': ''}
            >
              { page.text }
            </Link>
          );
        })
      }
    <Link to={`/students/page/${index+1 < count-1 ? index+1 : count-1}`}> Next</Link>
    </nav>
    <div className='flexBox'>
      <div className='leftColumn'>
      <StudentListing campuses={campuses} students={ studentsPerPage }/>
      </div> 
      <StudentCreate/>
    </div>
  </>
  )
}

export default AllStudents
