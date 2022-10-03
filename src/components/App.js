import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Route, Routes} from 'react-router-dom';

import { fetchCampuses } from '../store/campuses';
import { fetchStudents } from '../store/students';

import Nav from './Global/Nav'
import CampusListing from './Campus/CampusListing';
import StudentListing from './Student/StudentListing';
import CampusDetail from './Campus/CampusDetail';
import StudentDetail from './Student/StudentDetail';

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
      <Route path = '/' element ={< CampusListing />}/>
      <Route path = '/campuses' element ={< CampusListing />}/>
      <Route path = '/students' element ={< StudentListing />}/>
      <Route path = '/campuses/:id' element ={< CampusDetail />}/>
      <Route path = '/students/:id' element ={< StudentDetail />}/>
    </Routes>
    </>
  );
};

export default App;