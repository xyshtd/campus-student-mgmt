import React from 'react';
import FormErrorMessage from '../Global/FormErrorMessage';

const StudentForm = ({firstName,lastName,email,campusId,campuses,imageUrl,gpa,onSubmit,onChange,error,buttonLabel,className,formTitle})=>{
  return (
    <div className = 'studentForm'>
    <form onSubmit = {onSubmit} >
      <h3>{formTitle}</h3>
      <FormErrorMessage error={error} />
      <div className = {className}>
        <div style ={{flex:1}}>
          <div>
            <label>First Name *</label><br />
            <input name = 'firstName' value = {firstName} onChange = {onChange} />
          </div>
          <div>
            <label>Last Name *</label><br />
            <input name = 'lastName' value = {lastName} onChange = {onChange} />
          </div>
          <div>
            <label>Email *</label><br />
            <input placeholder = 'Email' name = 'email' value = {email} onChange = {onChange} />
          </div>
        </div>
        <div style ={{flex:1}}>
          <div>
          <label>Campus *</label><br />
          <select name="campusId" value = {campusId}  onChange = {onChange}>
          <option value = ''>--- select ---</option>
          {campuses.map(campus=><option key = {campus.id} value = {campus.id}> {campus.name}</option>)}
          </select>
          </div>
          <div>
            <label>Student Image</label><br />
            <input placeholder = 'https://upload.wikimedia.org/wikipedia/en/b/b1/Portrait_placeholder.png' name = 'imageUrl' value = {imageUrl} onChange = {onChange} />
          </div>
          <div>
            <label>GPA</label><br />
            <input placeholder = 'GPA 0.0 - 4.0 (optional)' name = 'gpa' value = {gpa} onChange = {onChange} />
          </div>
        </div>
      </div>
      <button disabled = {!firstName|| !lastName || !email || !campusId} className='specialButton'>{buttonLabel}</button>
    </form>
    </div>
  );
};

export default StudentForm;