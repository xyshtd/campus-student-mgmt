
import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { createCampus } from '../../store/campuses';
import CampusForm from './CampusForm';

const CampusCreate = ()=>{
  const defaultInputs = {
    name:'',
    address: '',
    imageUrl: '',
    description:'',
  };

  const [inputs,setInputs]= useState(defaultInputs);
  const {name, address, imageUrl, description} = inputs
  const [error, setError] = useState({});

  const dispatch = useDispatch()

  const onSubmit = async (ev)=> {
    ev.preventDefault();
    try {
      await dispatch(createCampus({ 
        name, 
        address, 
        imageUrl:imageUrl || 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png',
        description: description || 'Description to be Added'
      }));

      //reset form
      setInputs(defaultInputs)
      setError({})
    }
    catch(ex){
      console.log(ex);
      setError(ex.response.data);;
    }
  };

  const onChange = (ev) => {
    setInputs({
      ...inputs,
      [ev.target.name]:ev.target.value
    })
  }
  
  return (
    <CampusForm 
      name = {name}
      address = {address}
      imageUrl = {imageUrl}
      description = {description}
      onSubmit = {onSubmit}
      onChange = {onChange}
      error= {error}
      buttonLabel = 'Create'
      className = 'formFields-column'
      formTitle= 'Add a Campus'
    />
  )
};

export default CampusCreate;