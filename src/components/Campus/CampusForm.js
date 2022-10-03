import React from 'react';
import FormErrorMessage from '../Global/FormErrorMessage';

const CampusForm = ({name,address,imageUrl,description,onSubmit,onChange, error,buttonLabel,className,formTitle})=>{
  return (
    <form onSubmit = {onSubmit} className = 'campusForm'>
      <h3>{formTitle}</h3>
      <FormErrorMessage error={error} />
      <div className = {className}>
        <div style ={{flex:1}}>
          <div>
            <label>Campus Name *</label><br />
            <input placeholder = 'Campus Name' name = 'name' value = {name} onChange = {onChange} />
          </div>
          <div>
            <label>Campus Address *</label><br />
            <input placeholder = 'Campus Address' name = 'address' value = {address} onChange = {onChange} />
          </div>
          <div>
            <label>Campus Image</label><br />
            <input placeholder = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png' name = 'imageUrl' value = {imageUrl} onChange = {onChange} />
          </div>
        </div>
        <div style ={{flex:2 }}>
          <div>
          <label>Description</label><br />
          <textarea rows="10" placeholder = 'Description (optional)' name="description" value = {description}  onChange = {onChange}></textarea>
          </div>
        </div>
      </div>
      <button disabled = {!name|| !address} className='specialButton'>{buttonLabel}</button>
    </form>
  );
};

export default CampusForm;