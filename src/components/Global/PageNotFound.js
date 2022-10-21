import React from 'react';
import { Link } from 'react-router-dom'

const PageNotFound = ()=>{
  return (
    <div className = 'pageNotFound'>
      <h2>Oops! Page Not Found</h2>
      <p>Looks like you've followed a broken link or entered a URL that doesn't exist on this site.</p>
      <Link to = '/'>← Back to Homepage</Link>
    </div>
  )
};

export default PageNotFound;