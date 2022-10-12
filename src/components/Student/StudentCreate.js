import React,{useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStudent } from '../../store/students';
import StudentForm from './StudentForm';

const StudentCreate = ()=>{
  const defaultInputs = {
    firstName:'',
    lastName:'',
    email:'',
    imageUrl:'',
    gpa:'',
    campusId:''
  };
  
  const [inputs,setInputs]= useState(defaultInputs);
  const {firstName, lastName, email, imageUrl, gpa, campusId} = inputs
  const [error, setError] = useState({});
  const [error2, setError2] = useState('');
  const {campuses} = useSelector(state=>state)

  const dispatch = useDispatch()

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

      //reset form
      setInputs(defaultInputs) 
      setError({})
      setError2('')
    }
    catch(ex){
      console.log(ex);
      //error2 is the reach student limit per campus error
      if (typeof ex.response.data =='string') setError2(ex.response.data)
      else setError(ex.response.data)
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
      error= {error}
      error2= {error2}
      buttonLabel = 'Create'
      className='formFields-column'
      formTitle = 'Add a Student'
    /> 
  )
};

export default StudentCreate;