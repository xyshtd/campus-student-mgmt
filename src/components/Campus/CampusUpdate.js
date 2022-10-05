import React,{useState , useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCampus } from '../../store/campuses';
import CampusForm from './CampusForm';
import {useParams} from 'react-router-dom';

const CampusUpdate = ()=>{
  const defaultInputs = {
    name:'',
    address: '',
    imageUrl: '',
    description:'',
  };

  const dispatch = useDispatch()
  const {id} = useParams()
  const {campuses} = useSelector(state=>state);
  const [inputs,setInputs]= useState(defaultInputs);
  const {name, address, imageUrl, description} = inputs
  const [error, setError] = useState({});

  useEffect(()=> {
    const campus = campuses.find(campus => campus.id === id*1);
    if(campus){
      setInputs({
        name:campus.name,
        address: campus.address,
        imageUrl: campus.imageUrl,
        description:campus.description,
      })
    }
  }, [campuses]);

  const onSubmit = async (ev)=> {
    ev.preventDefault();
    try {
      await dispatch(updateCampus({ 
        id,
        name, 
        address, 
        imageUrl:imageUrl || 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png',
        description: description || 'Description to be Added'
       }));
    }
    catch(ex){
      console.log(ex);
      setError(ex.response.data);
      //setInputs({...inputs, error: ex.response?.data || {} });
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
      error= { error }
      buttonLabel = 'Update'
      className = 'formFields-row'
      formTitle= 'Edit Campus Info'
    />
  )
};

export default CampusUpdate;