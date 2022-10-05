import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Route, Routes} from 'react-router-dom';

import { fetchCampuses } from '../store/campuses';
import { fetchStudents } from '../store/students';

import Nav from './Global/Nav'
import AllCampuses from './Campus/AllCampuses';
import AllStudents from './Student/AllStudents';
import CampusDetail from './Campus/CampusDetail';
import StudentDetail from './Student/StudentDetail';
import TopCampuses from './Campus/TopCampuses';
import Search from './Global/Search';
import StudentsByPage from './Student/StudentsByPage'


const App = ()=>{
  const {campuses,students}= useSelector(state=>state);
  const dispatch = useDispatch();

  //initialize data loading
  useEffect(()=>{
    dispatch(fetchCampuses());
    dispatch(fetchStudents())
  },[]);

  return (
    <>
    <Nav campuses = {campuses} students = {students} />
    <h1> Campus Student Management Portal</h1>
    <Routes>
      <Route path = '/' element ={< TopCampuses />}/>
      <Route path = '/campuses' element ={< AllCampuses />}/>
      <Route path = '/students' element ={< AllStudents />}/>
      <Route path = '/campuses/:id' element ={< CampusDetail />}/>
      <Route path = '/students/:id' element ={< StudentDetail />}/>
      <Route path='/students/page/:index' element={ <StudentsByPage/> } />
      <Route path='/search' element={ <Search /> } />
      <Route path='/search/:filter' element={ <Search /> } />
    </Routes>
    </>
  );
};

export default App;