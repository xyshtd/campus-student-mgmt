import React,{useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStudent } from '../../store/students';
import StudentForm from './StudentForm';

const defaultInputs = {
  firstName:'',
  lastName:'',
  email:'',
  imageUrl:'',
  gpa:'',
  campusId:''
};

const StudentCreate = ()=>{
  const dispatch = useDispatch()
  
  
  const [inputs,setInputs]= useState(defaultInputs);
  const {firstName, lastName, email, imageUrl, gpa, campusId} = inputs
  const [error, setError] = useState({});
  const {campuses} = useSelector(state=>state)


  const onSubmit = async (ev)=> {
    ev.preventDefault();
    try {
      await dispatch(createStudent({ 
        firstName, 
        lastName, 
        email, 
        imageUrl:imageUrl || 'https://upload.wikimedia.org/wikipedia/en/b/b1/Portrait_placeholder.png',
        gpa: gpa || 0.0,
        campusId
       }));
      setInputs(defaultInputs) //reset form
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
      buttonLabel = 'Create'
      className='formFields-column'
      formTitle = 'Add a Student'
    /> 
  )
};

export default StudentCreate;