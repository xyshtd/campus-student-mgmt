import React from 'react';

const FormErrorMessage = ({error})=> {
  let messages = [];
  if(error.errors){
    messages = error.errors.map( e => e.message);
  }
  return (
      <ul>
        {
          messages.map( message => {
            return (
              <li key={ message }>
                { message }
              </li>
            );
          })
        }
      </ul>
  );
};

export default FormErrorMessage;