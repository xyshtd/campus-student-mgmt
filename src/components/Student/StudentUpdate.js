import React,{ useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateStudent } from '../../store/students';
import StudentForm from './StudentForm';
import {useParams} from 'react-router-dom';

const defaultInputs = {
  firstName:'',
  lastName:'',
  email:'',
  imageUrl:'',
  gpa:'',
  campusId:''
};

const StudentUpdate = ()=>{
  const dispatch = useDispatch()
  const {id} = useParams()
  const {campuses, students} = useSelector(state=>state);
  const [inputs,setInputs]= useState(defaultInputs);
  const {firstName, lastName, email, imageUrl, gpa, campusId} = inputs
  const [error, setError] = useState({});

  useEffect(()=> {
    const student = students.find( student => student.id === id) || {};
    if(student){
      setInputs({
        firstName:student.firstName,
        lastName:student.lastName,
        email:student.email,
        imageUrl:student.imageUrl,
        gpa:student.gpa,
        campusId:student.campusId
      })
    }
  }, [students]);
  
  const onSubmit = async (ev)=> {
    ev.preventDefault();
    try {
      await dispatch(updateStudent({ 
        id,
        firstName, 
        lastName, 
        email, 
        imageUrl:imageUrl || 'https://upload.wikimedia.org/wikipedia/en/b/b1/Portrait_placeholder.png',
        gpa: gpa || 0.0,
        campusId
       }));
    }
    catch(ex){
      if(ex){
      console.log(ex);
      setError(ex.response.data || {});
      }
    }
  };

  const onChange = (ev) => {
    setInputs({
      ...inputs,
      [ev.target.name]:ev.target.value
    })
  }

  
  return (
    <StudentForm 
      firstName = {firstName}
      lastName = {lastName}
      email = {email}
      imageUrl = {imageUrl}
      gpa = {gpa}
      campusId = {campusId}
      campuses = {campuses}
      onSubmit = {onSubmit}
      onChange = {onChange}
      error= { error }
      buttonLabel = 'Update'
      className='formFields-row'
      formTitle = 'Edit Student Info'
    /> 
  )
};

export default StudentUpdate;